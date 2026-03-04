import { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('Testando credenciais de email...');
    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_PASSWORD:', process.env.EMAIL_PASSWORD ? '***' : 'não configurado');

    // Configurar transporter com Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'magnatadomarketingcontact@gmail.com',
        pass: process.env.EMAIL_PASSWORD || ''
      }
    });

    // Verificar conexão
    const verified = await transporter.verify();
    
    if (!verified) {
      return res.status(400).json({ 
        success: false,
        error: 'Credenciais de email inválidas. Verifique EMAIL_USER e EMAIL_PASSWORD.',
        details: 'A conexão com Gmail falhou. Verifique se a App Password está correta.'
      });
    }

    // Enviar email de teste
    const testEmail = {
      from: process.env.EMAIL_USER || 'magnatadomarketingcontact@gmail.com',
      to: process.env.EMAIL_USER || 'magnatadomarketingcontact@gmail.com',
      subject: 'Teste de Configuração - BORGES STACK BUSINESS',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #000; color: #fff;">
          <h1 style="color: #d4af37;">✅ Email Configurado com Sucesso!</h1>
          <p>Este é um email de teste para validar a configuração do sistema de envio de leads.</p>
          <p><strong>Data:</strong> ${new Date().toLocaleString('pt-BR')}</p>
          <p>Seu formulário de contato está funcionando corretamente!</p>
        </div>
      `
    };

    await transporter.sendMail(testEmail);

    return res.status(200).json({
      success: true,
      message: 'Email de teste enviado com sucesso! Credenciais validadas.',
      details: 'O sistema está pronto para receber leads.'
    });

  } catch (error) {
    console.error('Erro ao testar email:', error);
    return res.status(500).json({
      success: false,
      error: 'Erro ao testar credenciais de email',
      details: error instanceof Error ? error.message : 'Erro desconhecido'
    });
  }
}
