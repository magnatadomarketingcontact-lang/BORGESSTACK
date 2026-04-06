import { describe, it, expect } from "vitest";
import { sendContactEmail } from "./email";

describe("Email Service", () => {
  it("should send contact email successfully", async () => {
    const result = await sendContactEmail({
      name: "Teste User",
      email: "teste@example.com",
      phone: "(85) 99177-8762",
      service: "Acessórios Mobile",
      message: "Teste de envio de email via Resend",
    });

    console.log("📧 Resultado do teste:", result ? "✅ Sucesso" : "❌ Falha");
    expect(result).toBe(true);
  });
});
