import nodemailer from "nodemailer";

const parsePort = (value, fallback) => {
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const getMailerConfig = () => {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = parsePort(process.env.SMTP_PORT, 587);
  const smtpSecure = process.env.SMTP_SECURE === "true";

  const user = process.env.SMTP_USER || process.env.EMAIL_USER;
  const pass = process.env.SMTP_PASSWORD || process.env.EMAIL_PASSWORD;

  const toEmail = process.env.EMAIL_TO || process.env.API_CONTACT_EMAIL || "hello@cubecakestudiios.com";
  const fromEmail = process.env.EMAIL_FROM || user || toEmail;

  return {
    smtpHost,
    smtpPort,
    smtpSecure,
    user,
    pass,
    toEmail,
    fromEmail,
  };
};

export const isMailerConfigured = () => {
  const { user, pass, toEmail } = getMailerConfig();
  return Boolean(user && pass && toEmail);
};

const createTransport = () => {
  const { smtpHost, smtpPort, smtpSecure, user, pass } = getMailerConfig();

  if (smtpHost) {
    return nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user,
        pass,
      },
    });
  }

  // Gmail / service-based fallback
  return nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || "gmail",
    auth: {
      user,
      pass,
    },
  });
};

export const sendContactSubmissionEmail = async (submission) => {
  const { toEmail, fromEmail } = getMailerConfig();
  const transporter = createTransport();

  const safePhone = submission.phone || "Not provided";
  const subject = `New Website Inquiry: ${submission.name}`;

  const textBody = `
New inquiry received from website contact form.

Name: ${submission.name}
Email: ${submission.email}
Phone: ${safePhone}
Service: ${submission.service}
Submitted At: ${submission.submittedAt}
Client IP: ${submission.clientIp}

Message:
${submission.message}
  `.trim();

  const htmlBody = `
<div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111827;">
  <h2 style="margin: 0 0 16px;">New Website Inquiry</h2>
  <p style="margin: 0 0 8px;"><strong>Name:</strong> ${submission.name}</p>
  <p style="margin: 0 0 8px;"><strong>Email:</strong> ${submission.email}</p>
  <p style="margin: 0 0 8px;"><strong>Phone:</strong> ${safePhone}</p>
  <p style="margin: 0 0 8px;"><strong>Service:</strong> ${submission.service}</p>
  <p style="margin: 0 0 8px;"><strong>Submitted At:</strong> ${submission.submittedAt}</p>
  <p style="margin: 0 0 16px;"><strong>Client IP:</strong> ${submission.clientIp}</p>
  <div style="padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; background: #f9fafb;">
    <p style="margin: 0; white-space: pre-line;">${submission.message}</p>
  </div>
</div>
  `.trim();

  await transporter.sendMail({
    from: `"CUBE CAKE STUDIIOS Website" <${fromEmail}>`,
    to: toEmail,
    replyTo: submission.email,
    subject,
    text: textBody,
    html: htmlBody,
  });
};

