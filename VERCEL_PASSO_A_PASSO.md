# 📸 Vercel: Passo a Passo Visual

## 🎯 Objetivo

Colocar seu site **BORGES STACK BUSINESS** no ar no Vercel com funcionalidade completa em **30 minutos**.

---

## ✅ Checklist Pré-Deploy

Antes de começar, você precisa ter:

- [ ] Conta GitHub (você já tem)
- [ ] Repositório com código (você já tem)
- [ ] Banco de dados MySQL (PlanetScale ou Railway)
- [ ] Gmail com App Password
- [ ] Conta Vercel (vamos criar)

---

# 🔧 PASSO 1: Criar Banco de Dados (5 minutos)

## Opção Recomendada: PlanetScale

### 1.1 Acessar PlanetScale

```
https://planetscale.com
```

### 1.2 Clique em "Sign Up"

Escolha "Continue with GitHub" para facilitar.

### 1.3 Criar Novo Banco

Clique em **"Create a new database"**

### 1.4 Configurar

```
Database Name: magnata-db
Region: São Paulo (us-east-2)
Tier: Free (gratuito)
```

Clique em **"Create database"**

### 1.5 Obter Connection String

1. Clique no banco criado
2. Clique em **"Connect"**
3. Selecione **"Node.js"**
4. Copie a string:

```
mysql://xxx:xxx@xxx.us-east-2.psdb.cloud/magnata-db?sslaccept=strict
```

**✅ Salve esta string!**

---

# 🔐 PASSO 2: Gerar App Password do Gmail (5 minutos)

### 2.1 Ativar 2-Step Verification

1. Acesse: https://myaccount.google.com/security
2. Procure por **"2-Step Verification"**
3. Clique em **"2-Step Verification"**
4. Siga as instruções

### 2.2 Gerar App Password

1. Acesse: https://myaccount.google.com/apppasswords
2. **Select app**: "Mail"
3. **Select device**: "Windows Computer"
4. Clique em **"Generate"**
5. Copie: `xxxx xxxx xxxx xxxx`

**✅ Salve esta senha!**

---

# 🌐 PASSO 3: Criar Conta Vercel (2 minutos)

### 3.1 Acessar Vercel

```
https://vercel.com/signup
```

### 3.2 Clique em "Continue with GitHub"

Autorize o Vercel.

### 3.3 Pronto!

Você está logado no Vercel.

---

# 📦 PASSO 4: Importar Projeto (3 minutos)

### 4.1 Ir para Dashboard

```
https://vercel.com/dashboard
```

### 4.2 Clique em "Add New..."

Canto superior direito → **"Project"**

### 4.3 Clique em "Import Git Repository"

### 4.4 Procurar Repositório

Busque por: `BORGESSTACK`

Clique em: `magnatadomarketingcontact-lang/BORGESSTACK`

### 4.5 Clique em "Import"

---

# ⚙️ PASSO 5: Configurar Variáveis (10 minutos)

### 5.1 Tela de Configuração

Você verá uma tela com:
- Project Name
- Framework Preset
- **Environment Variables** ← AQUI!

### 5.2 Adicionar Variáveis

Clique em **"Environment Variables"** e adicione cada uma:

---

## 📝 Variáveis a Adicionar

### Variável 1: DATABASE_URL

```
Chave: DATABASE_URL
Valor: mysql://xxx:xxx@xxx.us-east-2.psdb.cloud/magnata-db?sslaccept=strict
```

(Use a string que você copiou do PlanetScale)

### Variável 2: JWT_SECRET

```
Chave: JWT_SECRET
Valor: aB3xY9kL2mN5pQ8rS1tU4vW7xY0zC3dE5fG8hI1jK4lM7nO0pQ3rS6tU9vW2xY5z
```

(Ou gere uma nova com: `openssl rand -base64 32`)

### Variável 3: NODE_ENV

```
Chave: NODE_ENV
Valor: production
```

### Variável 4: OAUTH_SERVER_URL

```
Chave: OAUTH_SERVER_URL
Valor: https://api.manus.im
```

### Variável 5: VITE_OAUTH_PORTAL_URL

```
Chave: VITE_OAUTH_PORTAL_URL
Valor: https://portal.manus.im
```

### Variável 6: VITE_APP_ID

```
Chave: VITE_APP_ID
Valor: seu-app-id
```

(Deixe em branco se não tiver)

### Variável 7: EMAIL_USER

```
Chave: EMAIL_USER
Valor: magnatadomarketingcontact@gmail.com
```

### Variável 8: EMAIL_PASSWORD

```
Chave: EMAIL_PASSWORD
Valor: xxxx xxxx xxxx xxxx
```

(Use a App Password que você gerou do Gmail)

### Variável 9: VITE_APP_TITLE

```
Chave: VITE_APP_TITLE
Valor: BORGES STACK BUSINESS
```

### Variável 10: VITE_APP_LOGO

```
Chave: VITE_APP_LOGO
Valor: https://seu-logo-url.com/logo.webp
```

(Deixe em branco se não tiver)

---

## ✅ Verificar Variáveis

Após adicionar todas, você deve ver:

```
✓ DATABASE_URL
✓ JWT_SECRET
✓ NODE_ENV
✓ OAUTH_SERVER_URL
✓ VITE_OAUTH_PORTAL_URL
✓ VITE_APP_ID
✓ EMAIL_USER
✓ EMAIL_PASSWORD
✓ VITE_APP_TITLE
✓ VITE_APP_LOGO
```

---

# 🚀 PASSO 6: Deploy (5 minutos)

### 6.1 Revisar Tudo

Verifique:
- [ ] Project Name correto
- [ ] Framework Preset correto
- [ ] Todas as variáveis adicionadas

### 6.2 Clique em "Deploy"

Botão grande no canto inferior direito.

### 6.3 Aguarde

Vercel vai:
1. Clonar repositório
2. Instalar dependências
3. Fazer build
4. Fazer deploy

**Tempo: 3-5 minutos**

### 6.4 Sucesso!

Você verá:

```
✓ Deployment successful!

Your live URL:
https://seu-projeto.vercel.app
```

---

# 🌐 Seu Site Está No Ar!

```
https://seu-projeto.vercel.app
```

---

# ✅ PASSO 7: Testar (5 minutos)

### 7.1 Teste 1: Acessar Site

1. Abra: `https://seu-projeto.vercel.app`
2. Verifique:
   - ✅ Layout aparece
   - ✅ Design dark cyber
   - ✅ Logo dragon/shield visível

### 7.2 Teste 2: Formulário

1. Preencha o formulário:
   - Nome: "Teste"
   - Telefone: "(85) 99177-8762"
   - Email: "seu@email.com"
   - Serviço: "Tráfego Pago"
   - Mensagem: "Teste"

2. Clique em **"Enviar Solicitação"**

3. Verifique:
   - ✅ Mensagem de sucesso aparece
   - ✅ Email chega em sua caixa de entrada

### 7.3 Teste 3: WhatsApp

1. Clique no botão WhatsApp verde
2. Deve abrir WhatsApp com mensagem

### 7.4 Teste 4: Instagram

1. Clique no link do Instagram
2. Deve abrir @borgesstack

---

# 📊 Monitorar Seu Site

### Acessar Dashboard

```
https://vercel.com/dashboard
```

Você pode:
- ✅ Ver analytics (quantas pessoas visitaram)
- ✅ Ver logs (erros e avisos)
- ✅ Fazer rollback (voltar a versão anterior)
- ✅ Configurar domínio personalizado

---

# 🔄 Atualizar o Site

Sempre que você fizer mudanças:

```bash
# 1. Fazer mudanças locais
# Editar arquivos...

# 2. Fazer commit
git add .
git commit -m "Descrição da mudança"

# 3. Fazer push
git push origin main
```

**Vercel fará deploy automaticamente!** ✨

---

# 🆘 Se Algo Deu Errado

## Erro: "Build failed"

1. Vá para **Deployments** no Vercel
2. Clique no deploy que falhou
3. Veja **"Build Logs"**
4. Procure pela mensagem de erro
5. Corrija localmente
6. Faça push novamente

## Erro: "Database connection failed"

1. Verifique `DATABASE_URL`
2. Teste localmente: `pnpm db:push`
3. Se não funcionar, regenere a string no PlanetScale

## Erro: "Email não está sendo enviado"

1. Verifique se 2-Step Verification está ativado
2. Gere nova App Password
3. Atualize em Vercel → Settings → Environment Variables

---

# 📞 Suporte

- **Vercel**: https://vercel.com/support
- **PlanetScale**: https://planetscale.com/docs
- **Gmail**: https://support.google.com

---

# 📋 Checklist Final

- [ ] Banco de dados criado
- [ ] Connection string copiada
- [ ] App Password do Gmail gerado
- [ ] Conta Vercel criada
- [ ] Projeto importado
- [ ] Variáveis configuradas
- [ ] Deploy realizado
- [ ] Site acessível
- [ ] Formulário testado
- [ ] Email funcionando
- [ ] WhatsApp funcionando
- [ ] Instagram funcionando

---

# 🎉 Pronto!

Seu site **BORGES STACK BUSINESS** está **100% funcional** no Vercel! 🚀

**Tempo total**: ~30 minutos

**Próximos passos**:
1. Configurar domínio personalizado (opcional)
2. Compartilhar URL com clientes
3. Monitorar performance
4. Adicionar mais funcionalidades

---

**Última atualização**: Março 2026
