const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { fullName, email, subject, message } = req.body || {};

    if (!fullName || !email || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailPass) {
      console.error('Missing email configuration');
      return res.status(500).json({ error: 'Missing email configuration' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    const mailOptions = {
      from: `ASDTC Web <${gmailUser}>`,
      to: 'info@asdtc.com',
      subject: `[ASDTC Web] ${subject}`,
      text: `Gönderen: ${fullName} <${email}>\nKonu: ${subject}\nMesaj:\n${message}`,
      html: `
        <div style="font-family:Arial,sans-serif;font-size:14px;color:#111;max-width:600px;">
          <h2 style="color:#06b6d4;border-bottom:2px solid #06b6d4;padding-bottom:10px;">ASDTC Web Formu</h2>
          <p><strong>Gönderen:</strong> ${fullName} &lt;${email}&gt;</p>
          <p><strong>Konu:</strong> ${subject}</p>
          <p><strong>Mesaj:</strong></p>
          <div style="background:#f5f5f5;padding:15px;border-radius:8px;white-space:pre-line">${message}</div>
        </div>
      `,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('send-email error:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
};

