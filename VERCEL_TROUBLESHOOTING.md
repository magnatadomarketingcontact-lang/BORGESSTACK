# 🆘 Vercel: Troubleshooting & Suporte

## 🔍 Problemas Comuns e Soluções

---

## ❌ Erro 1: "Build failed"

### Sintoma
Você vê: `Build failed` no Vercel dashboard

### Causa Comum
- Erro no código
- Dependência não instalada
- Variável de ambiente faltando

### Solução

#### Passo 1: Ver Build Logs

1. Vá para: https://vercel.com/dashboard
2. Clique no projeto
3. Vá para **"Deployments"**
4. Clique no deploy que falhou
5. Clique em **"Build Logs"**

#### Passo 2: Procurar Erro

Procure por mensagens como:
```
Error: ...
Cannot find module ...
SyntaxError: ...
```

#### Passo 3: Corrigir Localmente

1. Abra o terminal
2. Execute: `pnpm build`
3. Veja o erro
4. Corrija o problema
5. Teste: `pnpm build` novamente

#### Passo 4: Fazer Push

```bash
git add .
git commit -m "Corrigir build"
git push origin main
```

Vercel fará deploy automaticamente.

---

## ❌ Erro 2: "Database connection failed"

### Sintoma
Você vê: `Database connection failed` ou `ECONNREFUSED`

### Causa Comum
- `DATABASE_URL` incorreta
- Banco de dados offline
- Firewall bloqueando conexão

### Solução

#### Passo 1: Verificar DATABASE_URL

1. Vá para: https://vercel.com/dashboard
2. Clique no projeto
3. Vá para **"Settings"** → **"Environment Variables"**
4. Verifique `DATABASE_URL`

#### Passo 2: Testar Localmente

```bash
# Instalar dependências
pnpm install

# Testar conexão
pnpm db:push
```

Se funcionar localmente, o problema está no Vercel.

#### Passo 3: Regenerar Connection String

Se estiver usando PlanetScale:

1. Acesse: https://planetscale.com
2. Vá para seu banco de dados
3. Clique em **"Connect"**
4. Selecione **"Node.js"**
5. Copie a string novamente
6. Atualize em Vercel

#### Passo 4: Testar Novamente

```bash
pnpm db:push
```

---

## ❌ Erro 3: "Email não está sendo enviado"

### Sintoma
Formulário envia, mas email não chega

### Causa Comum
- `EMAIL_PASSWORD` incorreta
- 2-Step Verification não ativado
- Gmail bloqueando acesso

### Solução

#### Passo 1: Verificar 2-Step Verification

1. Acesse: https://myaccount.google.com/security
2. Procure por **"2-Step Verification"**
3. Verifique se está **ativado** (verde)

Se não estiver, ative agora.

#### Passo 2: Gerar Nova App Password

1. Acesse: https://myaccount.google.com/apppasswords
2. **Select app**: "Mail"
3. **Select device**: "Windows Computer"
4. Clique em **"Generate"**
5. Copie a nova senha: `xxxx xxxx xxxx xxxx`

#### Passo 3: Atualizar Vercel

1. Vá para: https://vercel.com/dashboard
2. Clique no projeto
3. Vá para **"Settings"** → **"Environment Variables"**
4. Clique em `EMAIL_PASSWORD`
5. Delete o valor antigo
6. Cole a nova senha
7. Clique em **"Save"**

#### Passo 4: Testar

Preencha o formulário e envie. O email deve chegar agora.

---

## ❌ Erro 4: "Página em branco ou erro 500"

### Sintoma
Site abre mas está em branco ou mostra erro 500

### Causa Comum
- Erro no código frontend
- Erro no código backend
- Variável de ambiente faltando

### Solução

#### Passo 1: Abrir DevTools

Pressione **F12** no navegador

#### Passo 2: Ver Console

Clique na aba **"Console"**

Procure por mensagens de erro em vermelho.

#### Passo 3: Ver Network

Clique na aba **"Network"**

Procure por requisições que falharam (em vermelho).

#### Passo 4: Ver Logs do Vercel

1. Vá para: https://vercel.com/dashboard
2. Clique no projeto
3. Vá para **"Deployments"**
4. Clique no deployment atual
5. Vá para **"Functions"**
6. Veja os logs

#### Passo 5: Corrigir

Se encontrou o erro:
1. Corrija localmente
2. Teste: `pnpm build && pnpm start`
3. Faça push: `git push origin main`

---

## ❌ Erro 5: "Formulário não funciona"

### Sintoma
Clica em "Enviar" mas nada acontece

### Causa Comum
- Backend não está respondendo
- Erro na API
- Variáveis de ambiente faltando

### Solução

#### Passo 1: Abrir DevTools

Pressione **F12**

#### Passo 2: Ir para Network

Clique na aba **"Network"**

#### Passo 3: Preencher Formulário

Preencha o formulário e clique em "Enviar"

#### Passo 4: Ver Requisição

Na aba Network, procure por uma requisição para `/api/trpc/...`

Clique nela e veja:
- **Status**: Deve ser 200 (sucesso)
- **Response**: Deve ter dados

Se o status for 500 ou erro:
1. Veja a mensagem de erro
2. Corrija no código
3. Faça push

---

## ❌ Erro 6: "Variáveis de ambiente não estão funcionando"

### Sintoma
Código tenta usar variável mas ela é `undefined`

### Causa Comum
- Variável não foi adicionada no Vercel
- Nome da variável está errado
- Precisa fazer redeploy

### Solução

#### Passo 1: Verificar Variáveis

1. Vá para: https://vercel.com/dashboard
2. Clique no projeto
3. Vá para **"Settings"** → **"Environment Variables"**
4. Verifique se a variável está lá

#### Passo 2: Verificar Nome

Certifique-se que o nome está **exatamente igual** no código.

Exemplo:
```
Variável: DATABASE_URL
Código: process.env.DATABASE_URL ✅
Código: process.env.database_url ❌ (case sensitive!)
```

#### Passo 3: Fazer Redeploy

1. Vá para **"Deployments"**
2. Clique no deployment atual
3. Clique em **"Redeploy"**

Vercel vai usar as novas variáveis.

---

## ❌ Erro 7: "Timeout ao fazer deploy"

### Sintoma
Deploy leva muito tempo e falha com timeout

### Causa Comum
- Muitos arquivos
- Build muito lento
- Conexão lenta

### Solução

#### Passo 1: Otimizar Build

Verifique se há arquivos desnecessários:

```bash
# Ver tamanho dos arquivos
du -sh node_modules/
du -sh dist/

# Limpar
rm -rf node_modules/
pnpm install
```

#### Passo 2: Aumentar Timeout

Se estiver usando Vercel Pro, você pode aumentar o timeout.

#### Passo 3: Fazer Push Novamente

```bash
git push origin main
```

---

## ✅ Verificar Saúde do Site

### Checklist de Saúde

```
☐ Site abre sem erros
☐ Formulário funciona
☐ Email é enviado
☐ WhatsApp abre
☐ Instagram abre
☐ Banco de dados conecta
☐ Performance é boa (< 3s)
```

### Monitorar Performance

1. Vá para: https://vercel.com/dashboard
2. Clique no projeto
3. Vá para **"Analytics"**
4. Veja:
   - Page Views (visitantes)
   - Response Time (velocidade)
   - Error Rate (erros)

---

## 📞 Contatos de Suporte

### Vercel Support
- **Website**: https://vercel.com/support
- **Docs**: https://vercel.com/docs
- **Community**: https://github.com/vercel/vercel/discussions

### PlanetScale Support
- **Website**: https://planetscale.com/docs
- **Help**: https://planetscale.com/help

### Gmail Support
- **Website**: https://support.google.com/mail

---

## 🔧 Ferramentas Úteis

### Testar Conexão com Banco

```bash
# Instalar mysql client
brew install mysql-client

# Testar conexão
mysql -h seu-host -u seu-usuario -p seu-banco
```

### Verificar Variáveis Locais

```bash
# Ver todas as variáveis
env | grep DATABASE_URL
env | grep EMAIL_USER
```

### Limpar Cache do Vercel

1. Vá para: https://vercel.com/dashboard
2. Clique no projeto
3. Vá para **"Settings"** → **"Git"**
4. Clique em **"Disconnect Git"**
5. Reconecte o repositório

---

## 📋 Checklist de Troubleshooting

Quando algo não funciona:

- [ ] Verifiquei os Build Logs
- [ ] Verifiquei o Console (F12)
- [ ] Verifiquei as Variáveis de Ambiente
- [ ] Testei localmente (`pnpm build`)
- [ ] Fiz um novo deploy
- [ ] Aguardei 1-2 minutos
- [ ] Limpei o cache do navegador (Ctrl+Shift+Delete)
- [ ] Tentei em outro navegador

---

## 🎯 Próximos Passos

Se o problema persistir:

1. **Coletar informações**:
   - Screenshot do erro
   - Build Logs (copiar texto)
   - Console errors (F12)

2. **Contatar suporte**:
   - Vercel: https://vercel.com/support
   - GitHub: Abrir issue no repositório

3. **Descrever problema**:
   - O que você tentou fazer
   - O que aconteceu
   - O que esperava que acontecesse
   - Screenshots/logs

---

**Última atualização**: Março 2026
