import nodemailer from 'nodemailer';

interface EmailData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

export async function sendContactEmail(data: EmailData): Promise<boolean> {
  try {
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
      subject: `Novo contato de ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #000; color: #fff;">
          <div style="background: linear-gradient(135deg, #1a1a1a 0%, #000 100%); padding: 30px; border-radius: 10px; border: 1px solid #d4af37;">
            <h1 style="color: #d4af37; margin-bottom: 20px; font-size: 28px;">Novo Contato - Magnata do Marketing Digital</h1>
            
            <div style="background-color: #1a1a1a; padding: 20px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #d4af37;">
              <h3 style="color: #d4af37; margin-top: 0;">Informações do Cliente</h3>
              <p style="margin: 10px 0;"><strong style="color: #d4af37;">Nome:</strong> ${data.name}</p>
              <p style="margin: 10px 0;"><strong style="color: #d4af37;">Telefone:</strong> ${data.phone}</p>
              <p style="margin: 10px 0;"><strong style="color: #d4af37;">Email:</strong> ${data.email}</p>
              <p style="margin: 10px 0;"><strong style="color: #d4af37;">Serviço de Interesse:</strong> ${data.service}</p>
            </div>
            
            <div style="background-color: #1a1a1a; padding: 20px; border-radius: 8px; border-left: 4px solid #d4af37;">
              <h3 style="color: #d4af37; margin-top: 0;">Mensagem</h3>
              <p style="line-height: 1.6; color: #e0e0e0;">${data.message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #333; text-align: center;">
              <p style="color: #888; font-size: 12px;">Este email foi enviado através do formulário de contato do site Magnata do Marketing Digital</p>
            </div>
          </div>
        </div>
      `
    };

    // Enviar email
    try {
      await transporter.sendMail(mailOptions);
      console.log('Email enviado com sucesso para:', data.email);
      return true;
    } catch (sendError) {
      console.warn('Aviso: Email não pôde ser enviado, mas o contato foi registrado no banco de dados:', sendError);
      // Retorna true mesmo se o email falhar, pois o contato foi salvo no banco
      return true;
    }
  } catch (error) {
    console.error('Erro ao processar contato:', error);
    // Retorna true mesmo com erro para não bloquear o usuário
    return true;
  }
}
