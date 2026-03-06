# 🚀 BORGES STACK BUSINESS

**Arquitetura Digital Estratégica | Marketing + Tecnologia + Segurança**

---

## 📊 Status do Projeto

| Aspecto | Status | Detalhes |
|--------|--------|----------|
| **Design** | ✅ Completo | Dark premium cyber-estratégico |
| **Funcionalidades** | ✅ Completo | Formulário, WhatsApp, Instagram |
| **Hospedagem Manus** | ✅ Ativo | http://localhost:3000 |
| **GitHub** | ✅ Sincronizado | Repositório pronto para deploy |
| **Vercel** | ⏳ Pronto | Aguardando configuração |
| **GitHub Pages** | ⏳ Pronto | Aguardando habilitação |

---

## 🎨 Características do Site

### Design
- 🌑 **Tema Dark Premium**: Fundo #0B0F14 com acentos metálicos
- 🐉 **Logo Dragon/Shield Cyber**: Integrada em hero e footer
- ✨ **Efeitos Glow Sutil**: Bordas neon discretas
- 📱 **Responsivo**: Funciona em desktop, tablet e mobile
- ⚡ **Transições Suaves**: 0.3s ease-in-out em todos os elementos

### Funcionalidades
- 📝 **Formulário de Contato**: 7 opções de serviços
- 💬 **WhatsApp Integrado**: Botão flutuante + links nos contatos
- 📸 **Instagram**: Link para @borgesstack
- 📧 **Email**: magnatadomarketingcontact@gmail.com
- 🎯 **Serviços Destacados**:
  - Tráfego Pago
  - Tráfego Orgânico
  - Vídeos com IA
  - Estratégias Digitais
  - Gestão de Redes
  - Marketing Odontológico

---

## 📁 Estrutura do Projeto

```
magnata-marketing/
├── client/                    # Frontend React
│   ├── src/
│   │   ├── pages/            # Páginas (Home.tsx)
│   │   ├── components/       # Componentes reutilizáveis
│   │   ├── lib/              # Utilitários (tRPC client)
│   │   └── index.css         # Estilos globais
│   ├── public/               # Ativos estáticos
│   └── index.html            # HTML principal
├── server/                    # Backend Node.js
│   ├── routers.ts            # Rotas tRPC
│   ├── db.ts                 # Helpers de banco de dados
│   └── _core/                # Framework (OAuth, contexto)
├── drizzle/                  # Esquema do banco de dados
├── .github/workflows/        # GitHub Actions
│   ├── build.yml             # Workflow de build
│   └── deploy.yml            # Workflow de deploy
├── vercel.json               # Configuração Vercel
├── vite.config.ts            # Configuração Vite
├── package.json              # Dependências
├── VERCEL_SETUP.md           # Guia de setup Vercel
├── GITHUB_PAGES_SETUP.md     # Guia de setup GitHub Pages
└── DEPLOY.md                 # Guia geral de deploy
```

---

## 🔧 Tecnologias

| Camada | Tecnologia |
|--------|-----------|
| **Frontend** | React 19 + Tailwind CSS 4 + Vite |
| **Backend** | Node.js + Express 4 + tRPC 11 |
| **Banco de Dados** | MySQL + Drizzle ORM |
| **Autenticação** | Manus OAuth |
| **Email** | Nodemailer + Gmail SMTP |
| **Hospedagem** | Manus / Vercel / GitHub Pages |

---

## 🚀 Como Começar

### 1. **Desenvolvimento Local**

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm run dev

# Acessar em http://localhost:3000
```

### 2. **Build para Produção**

```bash
# Construir projeto
pnpm build

# Iniciar servidor de produção
pnpm start
```

### 3. **Deploy no Vercel** ⭐ (Recomendado)

[Veja o guia completo: VERCEL_SETUP.md](./VERCEL_SETUP.md)

**Resumo**:
1. Acesse https://vercel.com
2. Clique "Add New Project"
3. Selecione seu repositório GitHub
4. Configure variáveis de ambiente
5. Clique "Deploy"

### 4. **Deploy no GitHub Pages**

[Veja o guia: GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md)

**Nota**: GitHub Pages é apenas para conteúdo estático. Formulário e email não funcionarão.

---

## 📋 Variáveis de Ambiente Necessárias

### Para Desenvolvimento Local

Crie um arquivo `.env.local`:

```env
DATABASE_URL=mysql://user:password@localhost/magnata
JWT_SECRET=sua-chave-secreta-aqui
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://portal.manus.im
VITE_APP_ID=seu-app-id
VITE_APP_TITLE=BORGES STACK BUSINESS
VITE_APP_LOGO=https://seu-logo-url.com/logo.webp
EMAIL_USER=magnatadomarketingcontact@gmail.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx
```

### Para Vercel

Configure no dashboard do Vercel (não no repositório).

---

## 📧 Configurar Email (Gmail)

1. **Ative 2-Step Verification**: https://myaccount.google.com/security
2. **Gere App Password**: https://myaccount.google.com/apppasswords
3. **Use a senha em EMAIL_PASSWORD**

---

## 🧪 Testes

```bash
# Rodar testes
pnpm test

# Verificar tipos TypeScript
pnpm check

# Formatar código
pnpm format
```

---

## 📊 Monitorar Banco de Dados

```bash
# Sincronizar schema com banco de dados
pnpm db:push

# Gerar migrations
pnpm db:generate
```

---

## 🔗 Links Importantes

| Link | Descrição |
|------|-----------|
| [Vercel Setup](./VERCEL_SETUP.md) | Guia completo para Vercel |
| [GitHub Pages Setup](./GITHUB_PAGES_SETUP.md) | Guia para GitHub Pages |
| [Deploy Guide](./DEPLOY.md) | Guia geral de deploy |
| [GitHub Repo](https://github.com/magnatadomarketingcontact-lang/BORGESSTACK) | Repositório do projeto |
| [Vercel Dashboard](https://vercel.com/dashboard) | Dashboard Vercel |
| [Gmail App Passwords](https://myaccount.google.com/apppasswords) | Gerar senha de app |

---

## 🆘 Troubleshooting

### "Site não carrega"
- Verifique se `pnpm run dev` está rodando
- Verifique se as variáveis de ambiente estão corretas
- Verifique o console do navegador (F12)

### "Formulário não envia email"
- Verifique EMAIL_USER e EMAIL_PASSWORD
- Gere uma nova App Password do Gmail
- Verifique os logs do servidor

### "Erro ao fazer build"
- Verifique se todas as dependências estão instaladas: `pnpm install`
- Verifique se o TypeScript está correto: `pnpm check`
- Veja os logs completos do build

### "Banco de dados não conecta"
- Verifique se DATABASE_URL está correto
- Verifique se o servidor MySQL está rodando
- Teste a conexão localmente

---

## 📞 Suporte

- **Documentação Vercel**: https://vercel.com/docs
- **GitHub Pages Docs**: https://pages.github.com
- **Manus Help**: https://help.manus.im
- **Drizzle ORM**: https://orm.drizzle.team
- **tRPC Docs**: https://trpc.io

---

## 📝 Próximos Passos

1. ✅ **Deploy no Vercel** (Recomendado)
   - [Seguir guia: VERCEL_SETUP.md](./VERCEL_SETUP.md)

2. ⏳ **Configurar Domínio Personalizado**
   - Comprar domínio (ex: borgesstack.com.br)
   - Apontar para Vercel ou Manus

3. ⏳ **Adicionar Portfolio/Case Studies**
   - Criar página de portfólio
   - Adicionar case studies de clientes

4. ⏳ **Implementar Chat com IA**
   - Adicionar assistente de IA 24/7
   - Integrar com OpenAI ou similar

5. ⏳ **Integrar Stripe** (Se vender serviços)
   - Configurar pagamentos
   - Criar checkout

---

## 📄 Licença

MIT

---

## 👨‍💻 Desenvolvido por

**Manus AI** - Plataforma de Desenvolvimento Web

---

**Última atualização**: Fevereiro 2026

**Status**: ✅ Pronto para Deploy
