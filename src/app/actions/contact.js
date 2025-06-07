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

    const config = {
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    }

    // Crear un transporter usando SMTP de Gmail
    const transporterContact = nodemailer.createTransport(config);
    const transporterConfirmation = nodemailer.createTransport(config);

    // Verificar la conexión
    await transporterContact.verify();
    await transporterConfirmation.verify();

    const messageId = generateMessageId();
    const timestamp = new Date().toLocaleString('es-ES', {
      timeZone: 'America/Bogota'
    });

    // Enviar el correo
    await transporterContact.sendMail({
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
        'X-Gmail-Labels': 'Contacto'
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
    });

    // Enviar el correo de confirmación
    await transporterConfirmation.sendMail({
      from: {
        name: 'Tecnología Plus - Confirmación de Contacto',
        address: process.env.GMAIL_USER
      },
      to: sanitizedData.email,
      subject: `[Confirmación] Tu mensaje ha sido recibido`,
      headers: {
        'X-Entity-Ref-ID': messageId,
        'X-Auto-Response-Suppress': 'OOF, AutoReply',
        'List-Unsubscribe': `<mailto:${process.env.GMAIL_USER}?subject=unsubscribe>`,
        'X-Gmail-Labels': 'Confirmación'
      },
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #6f3bb4; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">Confirmación de Mensaje</h1>
          </div>
          <div style="padding: 20px; background-color: #f9f9f9;">
            <p>Estimado/a ${sanitizedData.name},</p>
            <p>Queremos agradecerte por contactarnos. Tu mensaje ha sido recibido con éxito y pronto nos pondremos en contacto contigo.</p>
            <p>Gracias por confiar en nosotros.</p>
          </div>
          <div style="background-color: #f4f4f4; padding: 20px; text-align: center;">
            <p>Conectate con nosotros en las redes sociales:</p>
            <a href="https://www.facebook.com/tecnologiapluscolombia" style="margin: 0 10px; display: inline-block; color: blue; text-decoration: none;">Facebook</a>
            <a href="https://www.instagram.com/tecnologiapluscolombia/" style="margin: 0 10px; display: inline-block; color: blue; text-decoration: none;">Instagram</a>
            <a href="https://www.tiktok.com/@tecnologiapluscolombia?_t=ZS-8vifPxXi2KX&_r=1" style="margin: 0 10px; display: inline-block; color: blue; text-decoration: none;">TikTok</a>
            <a href="https://www.youtube.com/channel/UCPho92vfQwC24X8Y3eI8Dvg" style="margin: 0 10px; display: inline-block; color: blue; text-decoration: none;">YouTube</a>
          </div>
        </div>
      `
    });

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