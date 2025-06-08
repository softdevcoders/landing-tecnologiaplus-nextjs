const nodemailer = require('nodemailer');
const core = require('@actions/core');

function generateMessageId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

async function sendEmail() {
  const {
    GMAIL_USER,
    GMAIL_APP_PASSWORD,
    GMAIL_RECIPIENTS,
    HEALTH_CHECK_URL,
  } = process.env;
  
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD || !GMAIL_RECIPIENTS || !HEALTH_CHECK_URL) {
      core.setFailed('Missing required environment variables for sending email.');
      return;
  }  

  try {
    core.info(`Attempting to send email using GMAIL_USER: ${GMAIL_USER}, GMAIL_APP_PASSWORD: ${GMAIL_APP_PASSWORD}, GMAIL_RECIPIENTS: ${GMAIL_RECIPIENTS}, HEALTH_CHECK_URL: ${HEALTH_CHECK_URL}`);
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user:  GMAIL_USER,
        pass: "kzob qbbx afgb zzim",
      },
    });

    await transporter.verify();

    const timestamp = new Date().toLocaleString('es-ES', {
      timeZone: 'America/Bogota'
    });

    const messageId = generateMessageId();

    const result = await transporter.sendMail({
      from: {
        name: 'Tecnología Plus - Servidor caido 🚨', 
        address: GMAIL_USER
      },
      to: GMAIL_RECIPIENTS.split(','),
      subject: `[Urgente] Servidor caido 🚨`,
      headers: {
        'X-Entity-Ref-ID': messageId,
        'X-Auto-Response-Suppress': 'OOF, AutoReply',
        'List-Unsubscribe': `<mailto:${GMAIL_USER}?subject=unsubscribe>`,
        'X-Gmail-Labels': 'Urgente'
      },
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #6f3bb4; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">Servidor caido 🚨</h1>
          </div>
          
          <div style="padding: 20px; background-color: #f9f9f9;">
            <p><strong>URL:</strong> ${HEALTH_CHECK_URL}</p>
            <p><strong>Fecha y Hora:</strong> ${timestamp}</p>
            <p><strong>ID del Mensaje:</strong> ${messageId}</p>
          </div>
          
          <div style="background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; color: #666;">
            <p>Mensaje enviado desde el servidor de Tecnología Plus</p>
            <p>El servidor no está respondiendo correctamente a las verificaciones de salud.</p>
            <p>Por favor, investigue inmediatamente.</p>
            <p>Gracias por su atención.</p>
            <p>Saludos,</p>
            <p>Equipo de Tecnología Plus</p>
          </div>
        </div>
      `
    });

    core.info(`Email sent successfully with messageId: ${result.messageId}`);
    core.setOutput('email_sent', result.messageId);
  } catch (error) {
    core.setFailed(`Error sending email: ${error.message}`);
    core.error(`Failed to send email due to error: ${error.message}`);
    return;
  }
}

sendEmail(); 