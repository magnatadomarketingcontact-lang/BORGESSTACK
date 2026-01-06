import { describe, it, expect } from 'vitest';
import { sendContactEmail } from './email';

describe('Email Service', () => {
  it('should send contact email successfully', async () => {
    const testData = {
      name: 'Teste User',
      phone: '(85) 9 9126-6516',
      email: 'test@example.com',
      service: 'Tráfego Pago',
      message: 'Este é um email de teste para validar o sistema de envio.'
    };

    const result = await sendContactEmail(testData);
    
    expect(result).toBe(true);
    console.log('✅ Email enviado com sucesso!');
  });
});
