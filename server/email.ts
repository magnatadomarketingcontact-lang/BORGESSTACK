import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

export async function sendContactEmail(data: EmailData): Promise<boolean> {
  try {
    console.log("📧 Enviando email via Resend...");
    console.log("🔑 API Key configurada:", process.env.RESEND_API_KEY ? "✓ Sim" : "✗ Não");

    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #000; color: #fff;">
        <div style="background: linear-gradient(135deg, #1a1a1a 0%, #000 100%); padding: 30px; border-radius: 10px; border: 1px solid #00d4ff;">
          <h1 style="color: #00d4ff; margin-bottom: 20px; font-size: 28px;">🎉 Novo Lead - Happy Nation Store</h1>
          
          <div style="background-color: #1a1a1a; padding: 20px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #00d4ff;">
            <h3 style="color: #00d4ff; margin-top: 0;">📋 Informações do Cliente</h3>
            <p style="margin: 10px 0;"><strong style="color: #00d4ff;">Nome:</strong> ${data.name}</p>
            <p style="margin: 10px 0;"><strong style="color: #00d4ff;">Telefone:</strong> ${data.phone}</p>
            <p style="margin: 10px 0;"><strong style="color: #00d4ff;">Email:</strong> ${data.email}</p>
            <p style="margin: 10px 0;"><strong style="color: #00d4ff;">Serviço de Interesse:</strong> ${data.service}</p>
          </div>
          
          <div style="background-color: #1a1a1a; padding: 20px; border-radius: 8px; border-left: 4px solid #00d4ff;">
            <h3 style="color: #00d4ff; margin-top: 0;">💬 Mensagem</h3>
            <p style="line-height: 1.6; color: #e0e0e0;">${data.message.replace(/\n/g, "<br>")}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #333; text-align: center;">
            <p style="color: #888; font-size: 12px;">Este email foi enviado através do formulário de contato do site Happy Nation Store</p>
          </div>
        </div>
      </div>
    `;

    const result = await resend.emails.send({
      from: "noreply@resend.dev",
      to: "happynationstorecontato@gmail.com",
      subject: `🎉 Novo Lead: ${data.name} - ${data.service}`,
      html: emailContent,
    });

    if (result.error) {
      console.error("❌ Erro ao enviar email:", result.error);
      return false;
    }

    console.log("✅ Email enviado com sucesso:", result.data?.id);
    return true;
  } catch (error) {
    console.error("❌ Erro ao processar contato:", error);
    return false;
  }
}
