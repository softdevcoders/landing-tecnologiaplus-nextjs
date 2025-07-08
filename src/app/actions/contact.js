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
      replyTo: "ventas@tecnologiaplus.com",
      subject: `[Confirmación] Tu mensaje ha sido recibido`,
      headers: {
        'X-Entity-Ref-ID': messageId,
        'X-Auto-Response-Suppress': 'OOF, AutoReply',
        'List-Unsubscribe': `<mailto:${process.env.GMAIL_USER}?subject=unsubscribe>`,
        'X-Gmail-Labels': 'Confirmación'
      },
      html: `
        <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
          </head>
          <body style="margin: 0; padding: 0; background-color: #f4f4f4;">
            <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; margin: 0; padding: 0; background-color: #f4f4f4;">
              <tr>
                <td align="center" style="padding: 20px 0;">
                  <table role="presentation" cellpadding="0" cellspacing="0" style="width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden;">
                    <!-- Header -->
                    <tr>
                      <td style="background-color: #2b0f76; padding: 20px;">
                        <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%;">
                          <tr>
                            <td style="width: 50%;">
                              <h1 style="margin: 0; font-family: Arial, sans-serif; font-size: 24px; font-weight: 500; color: white;">Mensaje recibido</h1>
                            </td>
                            <td style="width: 50%; text-align: right;">
                              <img src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1749921675/website-v2/logos/logo-email-template/cqwf2nljlutt3iucwsjp.png" alt="Tecnología Plus" style="max-width: 200px; height: auto;" />
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <!-- Content -->
                    <tr>
                      <td style="padding: 40px 20px; background-color: #ffffff;">
                        <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%;">
                          <tr>
                            <td>
                              <p style="margin: 0 0 20px 0; font-family: Arial, sans-serif; font-size: 18px; color: #333333;">Hola ${sanitizedData.name},</p>
                              <p style="margin: 0 0 20px 0; font-family: Arial, sans-serif; font-size: 16px; line-height: 1.6; color: #333333;">Gracias por tu confianza.</p>
                              <p style="margin: 0; font-family: Arial, sans-serif; font-size: 16px; color: #333333;">Una asesora te va a contactar para ofrecerte una solución que se ajuste a tu necesidad.</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td style="background-color: #2b0f76; padding: 20px;">
                        <table role="presentation" cellpadding="0" cellspacing="0" style="width: 120%;">
                          <tr>
                            <td style="width: 100px;">
                              <p style="font-family: Arial, sans-serif; font-size: 20px; font-weight: 500; color: white;">Síguenos</p>
                            </td>
                            <td>
                              <table role="presentation" cellpadding="0" cellspacing="0">
                                <tr>
                                  <td style="padding-right: 15px;">
                                    <a href="https://www.instagram.com/tecnologiapluscolombia/" style="display: inline-block; background-color: white; border-radius: 50%; padding: 8px; line-height: 0;">
                                      <img src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1749926430/website-v2/logos/logo-email-template/b2aqxprwdfpowqm8azhz.png" alt="Instagram" width="24" height="24" style="display: block;" />
                                    </a>
                                  </td>
                                  <td style="padding-right: 15px;">
                                    <a href="https://www.tiktok.com/@tecnologiapluscolombia" style="display: inline-block; background-color: white; border-radius: 50%; padding: 8px; line-height: 0;">
                                      <img src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1749926430/website-v2/logos/logo-email-template/i5fxv0qhy9fov2qmj25i.png" alt="TikTok" width="24" height="24" style="display: block;" />
                                    </a>
                                  </td>
                                  <td style="padding-right: 15px;">
                                    <a href="https://www.facebook.com/tecnologiapluscolombia" style="display: inline-block; background-color: white; border-radius: 50%; padding: 8px; line-height: 0;">
                                      <img src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1749926430/website-v2/logos/logo-email-template/algv3vxhu28azt7jzn3i.png" alt="Facebook" width="24" height="24" style="display: block;" />
                                    </a>
                                  </td>
                                  <td>
                                    <a href="https://www.youtube.com/channel/UCPho92vfQwC24X8Y3eI8Dvg" style="display: inline-block; background-color: white; border-radius: 50%; padding: 8px; line-height: 0;">
                                      <img src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1749926430/website-v2/logos/logo-email-template/gju8q7du6n9kvmqakv1k.png" alt="YouTube" width="24" height="24" style="display: block;" />
                                    </a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
          </html>
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