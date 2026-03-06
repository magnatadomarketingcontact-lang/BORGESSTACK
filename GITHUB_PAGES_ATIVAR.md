# 🚀 Como Ativar GitHub Pages - BORGES STACK BUSINESS

## ✅ O Que Foi Feito

✅ Arquivos do site foram enviados para GitHub em `dist/public/`
✅ Arquivo `.nojekyll` adicionado para evitar processamento Jekyll
✅ Arquivo `404.html` adicionado para redirecionar URLs

Agora você precisa **habilitar GitHub Pages** nas configurações do repositório.

---

## 📋 Passo a Passo: Ativar GitHub Pages

### Passo 1: Acesse as Configurações do Repositório

1. Vá para: https://github.com/magnatadomarketingcontact-lang/BORGESSTACK
2. Clique em **"Settings"** (engrenagem no topo direito)

![Settings](https://imgur.com/example.png)

---

### Passo 2: Vá para a Seção "Pages"

1. No menu esquerdo, procure por **"Pages"**
2. Clique em **"Pages"**

---

### Passo 3: Configure a Fonte

Na seção **"Build and deployment"**:

1. **Source**: Selecione **"Deploy from a branch"**
2. **Branch**: Selecione **"main"**
3. **Folder**: Selecione **"/dist/public"**
4. Clique em **"Save"**

![GitHub Pages Config](https://imgur.com/example2.png)

---

### Passo 4: Aguarde o Deploy

GitHub Pages levará **1-2 minutos** para fazer deploy.

Você verá uma mensagem como:
```
Your site is live at https://magnatadomarketingcontact-lang.github.io/BORGESSTACK/
```

---

## 🌐 Seu Site Estará Em:

```
https://magnatadomarketingcontact-lang.github.io/BORGESSTACK/
```

---

## ✅ Verificar se Funcionou

1. Acesse a URL acima
2. Você deve ver o site BORGES STACK BUSINESS
3. Teste:
   - ✅ Layout e design
   - ✅ Botão WhatsApp
   - ✅ Links do Instagram
   - ✅ Formulário (pode não funcionar completamente sem backend)

---

## 🔄 Atualizar o Site

Sempre que você fizer mudanças:

```bash
# Fazer mudanças locais
# Fazer build
pnpm build

# Fazer commit
git add .
git commit -m "Sua mensagem"

# Fazer push
git push origin main
```

GitHub Pages **automaticamente** fará deploy da pasta `/dist/public/`.

---

## ⚠️ Limitações do GitHub Pages

GitHub Pages é **apenas para conteúdo estático**. Isso significa:

### ✅ Funciona:
- Layout e design
- Imagens e vídeos
- Links e navegação
- CSS e JavaScript

### ❌ NÃO Funciona:
- Formulário de contato (sem backend)
- Envio de emails
- Banco de dados
- Autenticação

---

## 💡 Para Funcionalidade Completa

Use **Vercel** em vez de GitHub Pages:

[Veja o guia: VERCEL_SETUP.md](./VERCEL_SETUP.md)

Vercel suporta:
- ✅ Backend Node.js
- ✅ Banco de dados
- ✅ Formulários
- ✅ Emails
- ✅ Autenticação

---

## 🆘 Troubleshooting

### Erro 404 ao acessar

**Causa**: GitHub Pages não encontrou o site.

**Solução**:
1. Verifique se a pasta é `/dist/public` (não `/dist`)
2. Verifique se `index.html` existe em `/dist/public/`
3. Aguarde 1-2 minutos e recarregue a página

### Página em branco

**Causa**: Arquivos CSS/JS não carregaram.

**Solução**:
1. Abra DevTools (F12)
2. Veja a aba "Console" para erros
3. Verifique se os caminhos estão corretos

### Formulário não funciona

**Causa**: GitHub Pages não tem backend.

**Solução**: Use Vercel para funcionalidade completa.

---

## 📞 Suporte

- **GitHub Pages Docs**: https://pages.github.com
- **GitHub Help**: https://docs.github.com/en/pages

---

## ✨ Próximos Passos

1. ✅ Siga os passos acima para ativar GitHub Pages
2. ⏳ Teste o site em produção
3. ⏳ Considere usar Vercel para funcionalidade completa
4. ⏳ Configure domínio personalizado (opcional)

---

**Última atualização**: Março 2026
