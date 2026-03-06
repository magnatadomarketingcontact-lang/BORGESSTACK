# ⚡ Vercel: Guia Rápido (5 minutos de leitura)

## 🎯 Resumo Executivo

Deploy seu site no Vercel em **30 minutos** com funcionalidade completa.

---

## 📋 Checklist Pré-Deploy

```
☐ Banco de dados MySQL (PlanetScale ou Railway)
☐ Connection string copiada
☐ Gmail App Password gerado
☐ Conta Vercel criada
```

---

## 🚀 Processo em 6 Passos

### 1️⃣ Criar Banco de Dados (5 min)

**PlanetScale** (recomendado):
```
https://planetscale.com
→ Sign Up with GitHub
→ Create Database
→ Name: magnata-db
→ Region: São Paulo
→ Connect → Node.js → Copy string
```

**String esperada**:
```
mysql://xxx:xxx@xxx.us-east-2.psdb.cloud/magnata-db?sslaccept=strict
```

---

### 2️⃣ Gerar App Password Gmail (5 min)

```
https://myaccount.google.com/security
→ 2-Step Verification (ativar)
→ https://myaccount.google.com/apppasswords
→ Mail + Windows Computer
→ Generate
→ Copy: xxxx xxxx xxxx xxxx
```

---

### 3️⃣ Criar Conta Vercel (2 min)

```
https://vercel.com/signup
→ Continue with GitHub
→ Autorizar
```

---

### 4️⃣ Importar Projeto (3 min)

```
https://vercel.com/dashboard
→ Add New → Project
→ Import Git Repository
→ Search: BORGESSTACK
→ Select: magnatadomarketingcontact-lang/BORGESSTACK
→ Import
```

---

### 5️⃣ Configurar Variáveis (10 min)

Adicionar no Vercel:

| Chave | Valor |
|-------|-------|
| `DATABASE_URL` | `mysql://...` (do PlanetScale) |
| `JWT_SECRET` | `chave-aleatoria-32-caracteres` |
| `NODE_ENV` | `production` |
| `OAUTH_SERVER_URL` | `https://api.manus.im` |
| `VITE_OAUTH_PORTAL_URL` | `https://portal.manus.im` |
| `VITE_APP_ID` | `seu-app-id` (opcional) |
| `EMAIL_USER` | `magnatadomarketingcontact@gmail.com` |
| `EMAIL_PASSWORD` | `xxxx xxxx xxxx xxxx` (do Gmail) |
| `VITE_APP_TITLE` | `BORGES STACK BUSINESS` |
| `VITE_APP_LOGO` | `url-logo` (opcional) |

---

### 6️⃣ Deploy (5 min)

```
Clique em "Deploy"
Aguarde 3-5 minutos
Pronto! Site no ar em: https://seu-projeto.vercel.app
```

---

## ✅ Testar

```
☐ Acessar site
☐ Preencher formulário
☐ Verificar email
☐ Testar WhatsApp
☐ Testar Instagram
```

---

## 🔄 Atualizar Site

```bash
git add .
git commit -m "Descrição"
git push origin main
# Vercel faz deploy automaticamente!
```

---

## 🆘 Erros Comuns

| Erro | Solução |
|------|---------|
| Build failed | Veja Build Logs no Vercel |
| Database connection failed | Verifique DATABASE_URL |
| Email não funciona | Gere nova App Password do Gmail |
| Página em branco | Verifique console (F12) |

---

## 📞 Links Úteis

- Vercel: https://vercel.com/dashboard
- PlanetScale: https://planetscale.com
- Gmail App Passwords: https://myaccount.google.com/apppasswords
- Suporte: https://vercel.com/support

---

## ⏱️ Tempo Total

```
Banco de dados:    5 min
Gmail:             5 min
Vercel signup:     2 min
Importar projeto:  3 min
Configurar vars:  10 min
Deploy:            5 min
Testar:            5 min
─────────────────────
TOTAL:            35 min
```

---

## 🎉 Resultado

✅ Site no ar com funcionalidade completa
✅ Formulário funcionando
✅ Email funcionando
✅ WhatsApp integrado
✅ Instagram links
✅ Banco de dados sincronizado

---

## 📚 Guias Completos

Para mais detalhes, veja:
- **VERCEL_COMPLETO.md** - Guia detalhado
- **VERCEL_PASSO_A_PASSO.md** - Passo a passo visual

---

**Última atualização**: Março 2026
