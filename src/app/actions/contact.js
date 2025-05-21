'use server'

import nodemailer from 'nodemailer';

// Función para sanitizar el texto
function sanitizeText(text) {
  if (!text) return '';
  // Eliminar caracteres especiales y scripts
  return text
    .replace(/[<>]/g, '') // Eliminar < y > para prevenir HTML injection
    .replace(/javascript:/gi, '') // Eliminar javascript: protocol
    .replace(/on\w+=/gi, '') // Eliminar event handlers
    .trim();
}

// Función para validar el email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Función para validar el teléfono
function isValidPhone(phone) {
  const phoneRegex = /^\+?[\d\s-]{7,}$/;
  return phoneRegex.test(phone);
}

// Función para validar la longitud del mensaje
function isValidMessageLength(message) {
  return message.length >= 3 && message.length <= 1000;
}

// Función para generar un ID único para el mensaje
function generateMessageId() {
  return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export async function sendEmail(formData) {
  try {
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      throw new Error('Configuración de correo no encontrada. Por favor, verifica las variables de entorno.');
    }

    // Validar y sanitizar los datos
    const sanitizedData = {
      name: sanitizeText(formData.name),
      email: sanitizeText(formData.email),
      phone: sanitizeText(formData.phone),
      message: sanitizeText(formData.message)
    };

    // Validaciones
    if (!sanitizedData.name || sanitizedData.name.length < 2) {
      throw new Error('El nombre debe tener al menos 2 caracteres.');
    }

    if (!isValidEmail(sanitizedData.email)) {
      throw new Error('Por favor, ingresa un correo electrónico válido.');
    }

    if (!isValidPhone(sanitizedData.phone)) {
      throw new Error('Por favor, ingresa un número de teléfono válido.');
    }

    if (!isValidMessageLength(sanitizedData.message)) {
      throw new Error('El mensaje debe tener entre 3 y 1000 caracteres.');
    }

    // Crear un transporter usando SMTP de Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });

    // Verificar la conexión
    await transporter.verify();

    const messageId = generateMessageId();
    const timestamp = new Date().toLocaleString('es-ES', {
      timeZone: 'America/Bogota'
    });

    // Configurar el correo con contenido sanitizado
    const mailOptions = {
      from: {
        name: 'Tecnología Plus - Formulario de Contacto',
        address: process.env.GMAIL_USER
      },
      to: process.env.GMAIL_RECIPIENTS.split(','),
      subject: `[Contacto] ${sanitizedData.name} - ${timestamp}`,
      headers: {
        'X-Entity-Ref-ID': messageId,
        'X-Auto-Response-Suppress': 'OOF, AutoReply',
        'List-Unsubscribe': `<mailto:${process.env.GMAIL_USER}?subject=unsubscribe>`,
        'X-Gmail-Labels': 'Contacto,Website'
      },
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #6f3bb4; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">Nuevo Mensaje de Contacto</h1>
          </div>
          
          <div style="padding: 20px; background-color: #f9f9f9;">
            <p><strong>ID del Mensaje:</strong> ${messageId}</p>
            <p><strong>Fecha y Hora:</strong> ${timestamp}</p>
            <hr style="border: 1px solid #ddd;">
            <p><strong>Nombre:</strong> ${sanitizedData.name}</p>
            <p><strong>Email:</strong> ${sanitizedData.email}</p>
            <p><strong>Teléfono:</strong> ${sanitizedData.phone}</p>
            <hr style="border: 1px solid #ddd;">
            <p><strong>Mensaje:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 5px; border: 1px solid #ddd;">
              <p>${sanitizedData.message}</p>
            </div>
          </div>
          
          <div style="background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; color: #666;">
            <p>Mensaje enviado desde el formulario de contacto de Tecnología Plus</p>
            <p>ID: ${messageId}</p>
          </div>
        </div>
      `
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    return { success: true, messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Mensajes de error más específicos
    if (error.code === 'EAUTH') {
      throw new Error('Error de autenticación. Por favor, verifica las credenciales de Gmail.');
    } else if (error.code === 'ESOCKET') {
      throw new Error('Error de conexión. Por favor, verifica tu conexión a internet.');
    } else {
      throw new Error(error.message || 'Error al enviar el correo. Por favor, intenta nuevamente más tarde.');
    }
  }
} 