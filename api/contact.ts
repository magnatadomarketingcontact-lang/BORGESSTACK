import { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Apenas POST é permitido
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, email, service, message } = req.body;

    // Validar dados
    if (!name || !phone || !email || !service || !message) {
      return res.status(400).json({ error: 'Dados incompletos' });
    }

    // Configurar transporter com Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'magnatadomarketingcontact@gmail.com',
        pass: process.env.EMAIL_PASSWORD || ''
      }
    });

    // Configurar email
    const mailOptions = {
      from: process.env.EMAIL_USER || 'magnatadomarketingcontact@gmail.com',
      to: 'magnatadomarketingcontact@gmail.com',
      subject: `Novo contato de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #000; color: #fff;">
          <div style="background: linear-gradient(135deg, #1a1a1a 0%, #000 100%); padding: 30px; border-radius: 10px; border: 1px solid #d4af37;">
            <h1 style="color: #d4af37; margin-bottom: 20px; font-size: 28px;">Novo Contato - BORGES STACK BUSINESS</h1>
            
            <div style="background-color: #1a1a1a; padding: 20px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #d4af37;">
              <h3 style="color: #d4af37; margin-top: 0;">Informações do Cliente</h3>
              <p style="margin: 10px 0;"><strong style="color: #d4af37;">Nome:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong style="color: #d4af37;">Telefone:</strong> ${phone}</p>
              <p style="margin: 10px 0;"><strong style="color: #d4af37;">Email:</strong> ${email}</p>
              <p style="margin: 10px 0;"><strong style="color: #d4af37;">Serviço de Interesse:</strong> ${service}</p>
            </div>
            
            <div style="background-color: #1a1a1a; padding: 20px; border-radius: 8px; border-left: 4px solid #d4af37;">
              <h3 style="color: #d4af37; margin-top: 0;">Mensagem</h3>
              <p style="line-height: 1.6; color: #e0e0e0;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #333; text-align: center;">
              <p style="color: #888; font-size: 12px;">Este email foi enviado através do formulário de contato do site BORGES STACK BUSINESS</p>
            </div>
          </div>
        </div>
      `
    };

    // Enviar email
    try {
      await transporter.sendMail(mailOptions);
      console.log('Email enviado com sucesso para:', email);
    } catch (sendError) {
      console.warn('Aviso: Email não pôde ser enviado:', sendError);
    }

    // Retornar sucesso
    return res.status(200).json({
      success: true,
      message: 'Contato recebido com sucesso! Entraremos em contato em breve.'
    });

  } catch (error) {
    console.error('Erro ao processar contato:', error);
    return res.status(500).json({
      error: 'Erro ao processar sua solicitação. Tente novamente mais tarde.'
    });
  }
}
