const nodemailer = require('nodemailer');
const core = require('@actions/core');

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
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `Server Monitor <${GMAIL_USER}>`,
      to: GMAIL_RECIPIENTS,
      subject: `🔴 Server Down Alert: ${HEALTH_CHECK_URL}`,
      text: `The server at ${HEALTH_CHECK_URL} is not responding correctly to health checks. Please investigate immediately.`,
      html: `<p>The server at <strong>${HEALTH_CHECK_URL}</strong> is not responding correctly to health checks.</p><p>Please investigate immediately.</p>`
    };

    const result = await transporter.sendMail(mailOptions);
    core.setOutput('email_sent', result.messageId);
  } catch (error) {
    core.setFailed(`Error sending email: ${error.message}`);
    return;
  }
}

sendEmail(); 