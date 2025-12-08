import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Environment variables
  const SMTP_USER = process.env.SMTP_USER;
  const SMTP_PASS = process.env.SMTP_PASS;
  const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'info@asdtc.com';

  if (!SMTP_USER || !SMTP_PASS) {
    console.error('Missing SMTP credentials in environment variables');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  const { fullName, email, subject, message, phone, school, department, internshipTopic, supportTopic, formType, attachment } = req.body;

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS
    }
  });

  let mailOptions;

  if (formType === 'internship') {
    // Prepare attachments if exists
    const attachments = [];
    if (attachment && attachment.data) {
      // Extract base64 data (remove data:application/pdf;base64, prefix)
      const base64Data = attachment.data.split(',')[1];
      attachments.push({
        filename: attachment.name,
        content: base64Data,
        encoding: 'base64'
      });
    }

    // Internship application email
    mailOptions = {
      from: `"ASDTC Staj Başvurusu" <${SMTP_USER}>`,
      to: RECIPIENT_EMAIL,
      subject: `Yeni Staj Başvurusu - ${fullName}`,
      attachments: attachments,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background: linear-gradient(135deg, #005aaf, #007bff); padding: 30px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Yeni Staj Başvurusu</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">ASDTC Mühendislik</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
            <h2 style="color: #005aaf; border-bottom: 2px solid #005aaf; padding-bottom: 10px;">Başvuran Bilgileri</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef; font-weight: bold; color: #495057; width: 40%;">Ad Soyad:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef; color: #212529;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef; font-weight: bold; color: #495057;">E-Posta:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef; color: #212529;"><a href="mailto:${email}" style="color: #005aaf;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef; font-weight: bold; color: #495057;">Telefon:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef; color: #212529;"><a href="tel:${phone}" style="color: #005aaf;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef; font-weight: bold; color: #495057;">Okul:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef; color: #212529;">${school}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef; font-weight: bold; color: #495057;">Bölüm:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef; color: #212529;">${department}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef; font-weight: bold; color: #495057;">Staj Konusu:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef; color: #212529;">${internshipTopic || '-'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef; font-weight: bold; color: #495057;">Destek Konusu:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef; color: #212529;">${supportTopic || '-'}</td>
              </tr>
            </table>

            ${message ? `
            <h3 style="color: #005aaf; margin-top: 25px;">Mesaj:</h3>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #005aaf;">
              <p style="margin: 0; color: #495057; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
            </div>
            ` : ''}

            ${attachment && attachment.name ? `
            <h3 style="color: #005aaf; margin-top: 25px;">Ek Dosya:</h3>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745;">
              <p style="margin: 0; color: #495057;">📎 ${attachment.name}</p>
            </div>
            ` : ''}
            
            <div style="margin-top: 30px; padding: 15px; background-color: #e8f4fd; border-radius: 8px;">
              <p style="margin: 0; font-size: 12px; color: #666;">
                Bu e-posta asdtc-new.vercel.app staj başvuru formu üzerinden gönderilmiştir.
              </p>
            </div>
          </div>
        </div>
      `
    };
  } else {
    // Contact form email
    mailOptions = {
      from: `"ASDTC İletişim" <${SMTP_USER}>`,
      to: RECIPIENT_EMAIL,
      subject: `İletişim Formu: ${subject}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background: linear-gradient(135deg, #005aaf, #007bff); padding: 30px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Yeni İletişim Mesajı</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">ASDTC Mühendislik</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef; font-weight: bold; color: #495057; width: 30%;">Ad Soyad:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef; color: #212529;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef; font-weight: bold; color: #495057;">E-Posta:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef; color: #212529;"><a href="mailto:${email}" style="color: #005aaf;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef; font-weight: bold; color: #495057;">Konu:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef; color: #212529;">${subject}</td>
              </tr>
            </table>

            <h3 style="color: #005aaf; margin-top: 25px;">Mesaj:</h3>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #005aaf;">
              <p style="margin: 0; color: #495057; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
            </div>
            
            <div style="margin-top: 30px; padding: 15px; background-color: #e8f4fd; border-radius: 8px;">
              <p style="margin: 0; font-size: 12px; color: #666;">
                Bu e-posta asdtc-new.vercel.app iletişim formu üzerinden gönderilmiştir.
                <br>Yanıtlamak için doğrudan bu e-postayı yanıtlayabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      `
    };
  }

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
}
