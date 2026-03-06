# 🚀 Guia Completo: Deploy Vercel com Funcionalidade Total

## 📊 Visão Geral

Este guia mostra como colocar seu site **BORGES STACK BUSINESS** no ar no Vercel com **funcionalidade completa**:

✅ Frontend (React + Tailwind)
✅ Backend (Node.js + Express + tRPC)
✅ Banco de Dados (MySQL)
✅ Autenticação (Manus OAuth)
✅ Email (Gmail SMTP)
✅ Formulário de Contato
✅ WhatsApp integrado
✅ Instagram links

---

## ⏱️ Tempo Total: 30-45 minutos

---

## 📋 Pré-requisitos

Você vai precisar de:

1. ✅ **Conta GitHub** (você já tem)
2. ✅ **Repositório no GitHub** (você já tem)
3. ⏳ **Conta Vercel** (vamos criar)
4. ⏳ **Banco de Dados MySQL** (vamos configurar)
5. ⏳ **Gmail com App Password** (vamos gerar)

---

# 🔧 PARTE 1: Preparar Banco de Dados MySQL

## Opção A: Usar Banco de Dados Existente

Se você já tem um servidor MySQL rodando:

```
HOST: seu-host.com
USER: seu-usuario
PASSWORD: sua-senha
DATABASE: magnata_db
PORT: 3306
```

Anote a **connection string**:
```
mysql://usuario:senha@host:3306/magnata_db
```

---

## Opção B: Criar Banco de Dados Gratuito (Recomendado)

### Usar PlanetScale (MySQL Serverless Gratuito)

1. **Acesse**: https://planetscale.com
2. **Clique em "Sign Up"**
3. **Crie uma conta** com GitHub (mais fácil)
4. **Crie um novo banco de dados**:
   - Nome: `magnata-db`
   - Região: Escolha a mais próxima do Brasil (São Paulo)
5. **Clique em "Create Database"**

### Obter Connection String

1. Vá para o banco de dados criado
2. Clique em **"Connect"**
3. Selecione **"Node.js"**
4. Copie a string que aparece:

```
mysql://xxx:xxx@xxx.us-east-2.psdb.cloud/magnata-db?sslaccept=strict
```

**Salve esta string!** Você vai precisar dela no Vercel.

---

## Opção C: Usar Railway (Também Gratuito)

1. **Acesse**: https://railway.app
2. **Clique em "Start Project"**
3. **Selecione "MySQL"**
4. **Configure**:
   - Database name: `magnata_db`
   - Username: `root`
5. **Copie a connection string**

---

# 🔐 PARTE 2: Gerar App Password do Gmail

Necessário para o formulário enviar emails.

### Passo 1: Ativar 2-Step Verification

1. Acesse: https://myaccount.google.com/security
2. Procure por **"2-Step Verification"**
3. Clique em **"2-Step Verification"**
4. Siga as instruções (vai pedir seu telefone)

### Passo 2: Gerar App Password

1. Acesse: https://myaccount.google.com/apppasswords
2. **Select app**: Escolha **"Mail"**
3. **Select device**: Escolha **"Windows Computer"** (ou seu dispositivo)
4. Clique em **"Generate"**
5. **Copie a senha**: `xxxx xxxx xxxx xxxx` (16 caracteres com espaços)

**Salve esta senha!** Você vai precisar dela no Vercel.

---

# 🌐 PARTE 3: Criar Conta Vercel

### Passo 1: Acessar Vercel

1. Acesse: https://vercel.com/signup
2. Clique em **"Continue with GitHub"**
3. Autorize o Vercel a acessar sua conta GitHub

### Passo 2: Você Está Logado!

Pronto! Agora vamos importar seu projeto.

---

# 📦 PARTE 4: Importar Projeto do GitHub

### Passo 1: Ir para Dashboard

1. Acesse: https://vercel.com/dashboard
2. Clique em **"Add New..."** (canto superior direito)
3. Selecione **"Project"**

### Passo 2: Selecionar Repositório

1. Clique em **"Import Git Repository"**
2. Na barra de busca, procure por: `BORGESSTACK`
3. Clique no repositório: `magnatadomarketingcontact-lang/BORGESSTACK`
4. Clique em **"Import"**

---

# ⚙️ PARTE 5: Configurar Variáveis de Ambiente

Esta é a parte **MAIS IMPORTANTE**. Aqui você vai adicionar todas as variáveis necessárias.

### Passo 1: Tela de Configuração

Após clicar em "Import", você verá uma tela com:
- **Project Name**
- **Framework Preset**
- **Environment Variables** ← AQUI!

### Passo 2: Adicionar Variáveis

Clique em **"Environment Variables"** e adicione cada uma:

---

## 📝 Variáveis Obrigatórias

### 1. DATABASE_URL
```
Chave: DATABASE_URL
Valor: mysql://usuario:senha@host/banco_de_dados
```

**Exemplo com PlanetScale**:
```
mysql://xxx:xxx@xxx.us-east-2.psdb.cloud/magnata-db?sslaccept=strict
```

---

### 2. JWT_SECRET
```
Chave: JWT_SECRET
Valor: sua-chave-secreta-muito-longa-e-aleatoria-aqui
```

**Gerar uma chave segura**:
1. Abra o terminal
2. Execute: `openssl rand -base64 32`
3. Copie o resultado

**Exemplo**:
```
aB3xY9kL2mN5pQ8rS1tU4vW7xY0zC3dE5fG8hI1jK4lM7nO0pQ3rS6tU9vW2xY5z
```

---

### 3. NODE_ENV
```
Chave: NODE_ENV
Valor: production
```

---

## 🔑 Variáveis de OAuth (Manus)

### 4. OAUTH_SERVER_URL
```
Chave: OAUTH_SERVER_URL
Valor: https://api.manus.im
```

### 5. VITE_OAUTH_PORTAL_URL
```
Chave: VITE_OAUTH_PORTAL_URL
Valor: https://portal.manus.im
```

### 6. VITE_APP_ID
```
Chave: VITE_APP_ID
Valor: seu-app-id-do-manus
```

**Como obter**:
- Se você está usando Manus, o app ID já foi fornecido
- Se não tem, deixe em branco por enquanto

---

## 📧 Variáveis de Email (Gmail)

### 7. EMAIL_USER
```
Chave: EMAIL_USER
Valor: magnatadomarketingcontact@gmail.com
```

### 8. EMAIL_PASSWORD
```
Chave: EMAIL_PASSWORD
Valor: xxxx xxxx xxxx xxxx
```

**Use a App Password que você gerou anteriormente!**
(Não use sua senha normal do Gmail)

---

## 🎨 Variáveis de Branding

### 9. VITE_APP_TITLE
```
Chave: VITE_APP_TITLE
Valor: BORGES STACK BUSINESS
```

### 10. VITE_APP_LOGO
```
Chave: VITE_APP_LOGO
Valor: https://seu-logo-url.com/logo.webp
```

**Ou deixe vazio** se não tiver URL da logo.

---

## 📋 Tabela Completa de Variáveis

| Chave | Valor | Obrigatório |
|-------|-------|------------|
| DATABASE_URL | mysql://... | ✅ SIM |
| JWT_SECRET | chave-aleatoria | ✅ SIM |
| NODE_ENV | production | ✅ SIM |
| OAUTH_SERVER_URL | https://api.manus.im | ✅ SIM |
| VITE_OAUTH_PORTAL_URL | https://portal.manus.im | ✅ SIM |
| VITE_APP_ID | seu-app-id | ⏳ Depois |
| EMAIL_USER | seu@email.com | ✅ SIM |
| EMAIL_PASSWORD | app-password | ✅ SIM |
| VITE_APP_TITLE | BORGES STACK BUSINESS | ⏳ Depois |
| VITE_APP_LOGO | url-logo | ⏳ Depois |

---

# 🚀 PARTE 6: Fazer Deploy

### Passo 1: Revisar Configuração

Verifique se todas as variáveis foram adicionadas corretamente.

### Passo 2: Clicar em "Deploy"

1. Clique no botão **"Deploy"** (canto inferior direito)
2. Aguarde 3-5 minutos enquanto o Vercel:
   - Clona o repositório
   - Instala dependências
   - Faz build do projeto
   - Faz deploy

### Passo 3: Aguardar Sucesso

Você verá uma tela com:
```
✓ Deployment successful!
Your live URL: https://seu-projeto.vercel.app
```

---

# 🌐 Seu Site Está No Ar!

```
https://seu-projeto.vercel.app
```

---

# ✅ PARTE 7: Testar o Site

### Teste 1: Acessar o Site
1. Abra a URL do Vercel
2. Verifique se o layout aparece corretamente

### Teste 2: Testar Formulário
1. Preencha o formulário de contato
2. Clique em "Enviar"
3. Verifique se:
   - ✅ Aparece mensagem de sucesso
   - ✅ Email chega em sua caixa de entrada

### Teste 3: Testar WhatsApp
1. Clique no botão WhatsApp verde
2. Deve abrir WhatsApp com a mensagem

### Teste 4: Testar Instagram
1. Clique no link do Instagram
2. Deve abrir @borgesstack no Instagram

---

# 🔄 PARTE 8: Atualizações Futuras

Sempre que você fizer mudanças no código:

```bash
# Fazer mudanças locais
# Editar arquivos...

# Fazer commit
git add .
git commit -m "Sua mensagem de mudança"

# Fazer push
git push origin main
```

**Vercel fará deploy automaticamente!** ✨

---

# 🆘 Troubleshooting

## Erro: "Build failed"

**Solução**:
1. Vá para **Deployments** no Vercel
2. Clique no deploy que falhou
3. Veja a aba **"Build Logs"**
4. Procure pela mensagem de erro
5. Corrija o problema localmente
6. Faça push novamente

---

## Erro: "Database connection failed"

**Solução**:
1. Verifique se `DATABASE_URL` está correto
2. Teste a conexão localmente:
   ```bash
   pnpm db:push
   ```
3. Se não funcionar, regenere a connection string no PlanetScale/Railway

---

## Erro: "Email não está sendo enviado"

**Solução**:
1. Verifique se 2-Step Verification está ativado no Gmail
2. Gere uma nova App Password
3. Atualize `EMAIL_PASSWORD` no Vercel:
   - Vá para **Settings** → **Environment Variables**
   - Edite `EMAIL_PASSWORD`
   - Salve

---

## Erro: "Página em branco ou erro 500"

**Solução**:
1. Abra DevTools (F12)
2. Veja a aba "Console" para erros
3. Verifique os logs do Vercel:
   - Vá para **Deployments**
   - Clique em **"Functions"**
   - Veja os logs

---

# 📞 Suporte

- **Vercel Docs**: https://vercel.com/docs
- **Vercel Support**: https://vercel.com/support
- **PlanetScale Docs**: https://planetscale.com/docs
- **Railway Docs**: https://docs.railway.app

---

# 📋 Checklist Final

- [ ] Banco de dados criado (PlanetScale ou Railway)
- [ ] Connection string copiada
- [ ] Gmail 2-Step Verification ativado
- [ ] App Password do Gmail gerado
- [ ] Conta Vercel criada
- [ ] Projeto importado do GitHub
- [ ] Todas as variáveis de ambiente configuradas
- [ ] Deploy realizado com sucesso
- [ ] Site acessível em vercel.app
- [ ] Formulário testado
- [ ] Email funcionando
- [ ] WhatsApp funcionando
- [ ] Instagram funcionando

---

# 🎉 Parabéns!

Seu site **BORGES STACK BUSINESS** está **100% funcional** no Vercel! 🚀

**Próximos passos**:
1. Configurar domínio personalizado (opcional)
2. Monitorar performance
3. Adicionar mais funcionalidades
4. Otimizar SEO

---

**Última atualização**: Março 2026  
**Status**: ✅ Pronto para Produção
