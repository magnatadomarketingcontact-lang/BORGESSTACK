# 🚀 Guia de Deploy - BORGES STACK BUSINESS

## Status Atual

✅ **Site está funcionando** em: http://localhost:3000
✅ **Design dark cyber** implementado
✅ **Formulário de contato** funcional
✅ **WhatsApp integrado** (85 991778762)
✅ **Instagram** (@borgesstack)

---

## 📋 Opções de Hospedagem

### Opção 1: Vercel (Recomendado) ⭐

O Vercel é a plataforma ideal para este projeto. Oferece deploy automático, SSL grátis e performance otimizada.

#### Passos:

1. **Acesse Vercel**: https://vercel.com
2. **Faça login** com sua conta GitHub
3. **Clique em "New Project"**
4. **Selecione o repositório**: `magnatadomarketingcontact-lang/BORGESSTACK`
5. **Configure as variáveis de ambiente**:
   - `DATABASE_URL`: Sua string de conexão MySQL
   - `JWT_SECRET`: Chave secreta para sessões
   - `OAUTH_SERVER_URL`: URL do servidor OAuth
   - `EMAIL_USER`: seu@email.com
   - `EMAIL_PASSWORD`: Senha do email (App Password do Gmail)
   - Outras variáveis conforme necessário

6. **Clique em "Deploy"**

O site estará disponível em: `seu-projeto.vercel.app`

---

### Opção 2: GitHub Pages

GitHub Pages é gratuito, mas serve apenas conteúdo estático. Este projeto tem backend (Node.js), então GitHub Pages não é ideal.

#### Se ainda assim quiser usar:

1. **Acesse**: https://github.com/magnatadomarketingcontact-lang/BORGESSTACK/settings
2. **Vá para "Pages"**
3. **Source**: Selecione `main` branch
4. **Folder**: Selecione `/dist/public`
5. **Salve**

O site estará em: `https://magnatadomarketingcontact-lang.github.io/BORGESSTACK/`

⚠️ **Nota**: Isso servirá apenas os arquivos estáticos (HTML/CSS/JS). A API e o formulário não funcionarão.

---

### Opção 3: Manus (Atual) ✅

O site já está hospedado no Manus! Você pode acessar em:

- **URL**: https://3000-ii2e6z9db4tm6n49f2rn8-647d966a.manusvm.computer
- **Management UI**: Clique em "View" no card do projeto

Para um domínio personalizado:
1. Acesse **Settings > Domains** no Management UI
2. Compre um domínio ou conecte um existente
3. Configure o domínio para apontar para o Manus

---

## 🔧 Configuração de Variáveis de Ambiente

### Para Vercel:

Adicione estas variáveis no painel do Vercel:

```
DATABASE_URL=mysql://user:password@host/database
JWT_SECRET=sua-chave-secreta-aqui
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://portal.manus.im
VITE_APP_ID=seu-app-id
VITE_APP_TITLE=BORGES STACK BUSINESS
VITE_APP_LOGO=seu-logo-url
EMAIL_USER=magnatadomarketingcontact@gmail.com
EMAIL_PASSWORD=sua-app-password-gmail
```

### Para Gmail (SMTP):

1. Ative **2-Step Verification** em: https://myaccount.google.com/security
2. Gere uma **App Password**: https://myaccount.google.com/apppasswords
3. Use a senha gerada em `EMAIL_PASSWORD`

---

## 📦 Build Local

Para testar o build localmente:

```bash
# Instalar dependências
pnpm install

# Build
pnpm build

# Iniciar servidor de produção
pnpm start
```

---

## 🔄 Workflow de Deploy Automático

Os arquivos de workflow estão em `.github/workflows/`:

- **deploy.yml**: Workflow principal (testes + build + deploy)
- **deploy-vercel.yml**: Deploy automático no Vercel
- **deploy-github-pages.yml**: Deploy automático no GitHub Pages

Esses workflows rodam automaticamente quando você faz push para `main` ou `master`.

---

## ✅ Checklist de Deploy

- [ ] Variáveis de ambiente configuradas
- [ ] Banco de dados conectado
- [ ] Email (SMTP) testado
- [ ] WhatsApp funcionando
- [ ] Formulário testado
- [ ] Build local testado (`pnpm build`)
- [ ] Domínio configurado (se usando domínio personalizado)

---

## 🆘 Troubleshooting

### "Site não carrega"
- Verifique se as variáveis de ambiente estão corretas
- Verifique a conexão com o banco de dados
- Verifique os logs do servidor

### "Formulário não envia email"
- Verifique EMAIL_USER e EMAIL_PASSWORD
- Verifique se o Gmail tem 2-Step Verification ativado
- Gere uma nova App Password

### "Erro 404 no GitHub Pages"
- GitHub Pages serve apenas conteúdo estático
- Use Vercel ou Manus para backend completo

---

## 📞 Suporte

Para mais informações:
- **Vercel Docs**: https://vercel.com/docs
- **GitHub Pages**: https://pages.github.com
- **Manus**: https://help.manus.im

---

**Última atualização**: Fevereiro 2026
