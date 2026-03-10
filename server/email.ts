import nodemailer from 'nodemailer';
import { ENV } from './_core/env';

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
    const emailUser = ENV.emailUser || 'magnatadomarketingcontact@gmail.com';
    const emailPassword = (ENV.emailPassword || '').replace(/\s/g, ''); // Remove espaços
    
    console.log('📧 Tentando conectar ao Gmail com:', emailUser);
    console.log('🔑 Senha configurada:', emailPassword ? '✓ Sim' : '✗ Não');
    console.log('🔑 Tamanho da senha:', emailPassword.length, 'caracteres');
    
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: emailUser,
        pass: emailPassword
      }
    });

    // Configurar email
    const mailOptions = {
      from: emailUser,
      to: 'guilhermesilvaborges085@gmail.com',
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
      console.log('✅ Email enviado com sucesso para:', mailOptions.to);
      return true;
    } catch (sendError) {
      console.error('❌ Erro ao enviar email:', sendError);
      return false;
    }
  } catch (error) {
    console.error('Erro ao processar contato:', error);
    return false;
  }
}
