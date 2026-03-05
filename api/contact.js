export default async function handler(req, res) {
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

    // Enviar email usando Manus Email API
    const emailContent = `
Novo Lead Recebido!

Nome: ${name}
Telefone: ${phone}
Email: ${email}
Serviço: ${service}
Mensagem: ${message}

---
Enviado em: ${new Date().toLocaleString('pt-BR')}
    `.trim();

    try {
      const emailResponse = await fetch(process.env.BUILT_IN_FORGE_API_URL + '/email/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.BUILT_IN_FORGE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: process.env.EMAIL_USER || 'magnatadomarketingcontact@gmail.com',
          subject: `Novo Lead: ${name}`,
          html: emailContent.replace(/\n/g, '<br>'),
          text: emailContent,
        })
      });

      if (!emailResponse.ok) {
        console.error('Email send failed:', await emailResponse.text());
      }
    } catch (emailError) {
      console.warn('Email error:', emailError);
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
