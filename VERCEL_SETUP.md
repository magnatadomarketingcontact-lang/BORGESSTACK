# 🚀 Guia Completo: Deploy no Vercel

## ✅ Status Atual

Seu site **BORGES STACK BUSINESS** está pronto para deploy! Aqui está como fazer isso no Vercel.

---

## 📋 Pré-requisitos

- ✅ Conta no GitHub (você já tem)
- ✅ Repositório no GitHub (já criado)
- ⏳ Conta no Vercel (vamos criar)

---

## 🔧 Passo 1: Criar Conta no Vercel

1. Acesse: **https://vercel.com/signup**
2. Clique em **"Continue with GitHub"**
3. Autorize o Vercel a acessar sua conta GitHub
4. Pronto! Você está logado no Vercel

---

## 📦 Passo 2: Importar Projeto do GitHub

1. Acesse: **https://vercel.com/dashboard**
2. Clique em **"Add New..."** → **"Project"**
3. Clique em **"Import Git Repository"**
4. Procure por: `magnatadomarketingcontact-lang/BORGESSTACK`
5. Clique em **"Import"**

---

## ⚙️ Passo 3: Configurar Variáveis de Ambiente

Na tela de configuração do projeto, você verá a seção **"Environment Variables"**.

### Adicione as seguintes variáveis:

#### Variáveis Obrigatórias:

| Variável | Valor | Descrição |
|----------|-------|-----------|
| `NODE_ENV` | `production` | Ambiente de produção |
| `DATABASE_URL` | `mysql://user:pass@host/db` | Conexão com banco de dados MySQL |
| `JWT_SECRET` | `sua-chave-secreta-aqui` | Chave para assinar tokens JWT |

#### Variáveis de OAuth (Manus):

| Variável | Valor |
|----------|-------|
| `OAUTH_SERVER_URL` | `https://api.manus.im` |
| `VITE_OAUTH_PORTAL_URL` | `https://portal.manus.im` |
| `VITE_APP_ID` | Seu App ID do Manus |

#### Variáveis de Email (Gmail SMTP):

| Variável | Valor | Como Obter |
|----------|-------|-----------|
| `EMAIL_USER` | `magnatadomarketingcontact@gmail.com` | Seu email Gmail |
| `EMAIL_PASSWORD` | `xxxx xxxx xxxx xxxx` | [Ver abaixo](#-como-gerar-app-password-do-gmail) |

#### Variáveis de Branding:

| Variável | Valor |
|----------|-------|
| `VITE_APP_TITLE` | `BORGES STACK BUSINESS` |
| `VITE_APP_LOGO` | URL da sua logo |

---

## 🔐 Como Gerar App Password do Gmail

O Gmail não permite senhas normais em aplicações. Você precisa gerar uma **App Password**.

### Passos:

1. **Ative 2-Step Verification**:
   - Acesse: https://myaccount.google.com/security
   - Clique em **"2-Step Verification"**
   - Siga as instruções para ativar

2. **Gere App Password**:
   - Acesse: https://myaccount.google.com/apppasswords
   - **Select app**: Escolha **"Mail"**
   - **Select device**: Escolha **"Windows Computer"** (ou seu dispositivo)
   - Clique em **"Generate"**
   - Você receberá uma senha de 16 caracteres: `xxxx xxxx xxxx xxxx`

3. **Copie a senha**:
   - Copie exatamente como aparece (com os espaços)
   - Cole em `EMAIL_PASSWORD` no Vercel

---

## 🚀 Passo 4: Deploy

1. Após configurar todas as variáveis, clique em **"Deploy"**
2. Aguarde 2-5 minutos enquanto o Vercel constrói seu projeto
3. Você verá uma mensagem de sucesso com seu URL

---

## 🌐 Seu Site Estará Em:

```
https://seu-projeto.vercel.app
```

Ou com domínio personalizado:

```
https://borgesstack.com.br  (se você configurar)
```

---

## 📊 Próximos Passos

### 1. **Testar o Site**
- Abra a URL do Vercel
- Teste o formulário de contato
- Teste o botão WhatsApp
- Verifique se o email está sendo enviado

### 2. **Configurar Domínio Personalizado** (Opcional)

Se você tem um domínio (ex: `borgesstack.com.br`):

1. No Vercel, vá para **"Settings"** → **"Domains"**
2. Clique em **"Add Domain"**
3. Digite seu domínio
4. Siga as instruções para apontar o domínio para o Vercel

### 3. **Configurar SSL** (Automático)
- Vercel configura SSL automaticamente
- Seu site terá HTTPS seguro

### 4. **Monitorar Performance**
- Vá para **"Analytics"** no Vercel
- Veja quantas pessoas estão acessando seu site
- Monitore performance e erros

---

## 🔄 Deploy Automático

Agora, sempre que você fizer push para o GitHub:

```bash
git add .
git commit -m "Sua mensagem"
git push origin main
```

O Vercel **automaticamente**:
1. ✅ Detecta as mudanças
2. ✅ Constrói o projeto
3. ✅ Faz deploy do novo site
4. ✅ Atualiza a URL

---

## 🆘 Troubleshooting

### Erro: "Build failed"

**Solução**: Verifique os logs no Vercel:
1. Vá para **"Deployments"**
2. Clique no deploy que falhou
3. Veja a aba **"Build Logs"**
4. Procure pela mensagem de erro

### Erro: "Database connection failed"

**Solução**: Verifique `DATABASE_URL`:
- Certifique-se que a URL está correta
- Verifique se o banco de dados está acessível
- Teste a conexão localmente: `pnpm db:push`

### Erro: "Email não está sendo enviado"

**Solução**: Verifique as credenciais do Gmail:
- Verifique se 2-Step Verification está ativado
- Gere uma nova App Password
- Atualize `EMAIL_PASSWORD` no Vercel

### Site em branco ou erro 500

**Solução**:
1. Verifique os logs do Vercel
2. Verifique se todas as variáveis de ambiente estão configuradas
3. Teste localmente: `pnpm build && pnpm start`

---

## 📞 Suporte

- **Vercel Docs**: https://vercel.com/docs
- **Vercel Support**: https://vercel.com/support
- **GitHub Issues**: https://github.com/magnatadomarketingcontact-lang/BORGESSTACK/issues

---

## ✅ Checklist Final

- [ ] Conta Vercel criada
- [ ] Projeto importado do GitHub
- [ ] Variáveis de ambiente configuradas
- [ ] App Password do Gmail gerado
- [ ] Deploy realizado com sucesso
- [ ] Site acessível em vercel.app
- [ ] Formulário testado
- [ ] Email funcionando
- [ ] WhatsApp funcionando
- [ ] Domínio personalizado configurado (opcional)

---

**Pronto! Seu site está no ar! 🎉**

Para qualquer dúvida, consulte a documentação ou entre em contato com o suporte.
