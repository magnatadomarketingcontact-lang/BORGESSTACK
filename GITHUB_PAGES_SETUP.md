# 📄 Guia: Deploy no GitHub Pages

## ⚠️ Importante

GitHub Pages é ideal para **sites estáticos** (HTML, CSS, JavaScript).

Este projeto tem um **backend Node.js** (servidor, banco de dados, API). GitHub Pages **NÃO suporta backend**.

### O que funcionará:
- ✅ Layout e design
- ✅ Navegação
- ✅ Imagens e vídeos

### O que NÃO funcionará:
- ❌ Formulário de contato (sem backend)
- ❌ Envio de emails
- ❌ Banco de dados
- ❌ Autenticação

---

## 🎯 Recomendação

**Use Vercel em vez de GitHub Pages!**

Vercel suporta:
- ✅ Backend Node.js
- ✅ Banco de dados
- ✅ Formulários
- ✅ Emails
- ✅ Autenticação

[Veja o guia do Vercel](./VERCEL_SETUP.md)

---

## 📋 Se Você Ainda Quiser Usar GitHub Pages

### Passo 1: Habilitar GitHub Pages

1. Acesse: https://github.com/magnatadomarketingcontact-lang/BORGESSTACK/settings
2. Role até **"Pages"**
3. Em **"Source"**, selecione:
   - **Branch**: `main`
   - **Folder**: `/dist/public`
4. Clique em **"Save"**

### Passo 2: Aguardar Deploy

GitHub Pages levará 1-2 minutos para fazer deploy.

### Passo 3: Acessar o Site

Seu site estará em:
```
https://magnatadomarketingcontact-lang.github.io/BORGESSTACK/
```

---

## 🔄 Deploy Automático

Quando você fizer push para GitHub:

```bash
git add .
git commit -m "Sua mensagem"
git push origin main
```

GitHub Pages **automaticamente** fará deploy da pasta `/dist/public`.

---

## 📊 Monitorar Deploy

1. Acesse: https://github.com/magnatadomarketingcontact-lang/BORGESSTACK/settings/pages
2. Veja o status do deploy em **"Your site is live at..."**

---

## 🚨 Limitações

### Sem Backend
- Formulário não funciona
- Emails não são enviados
- Banco de dados não funciona

### Sem HTTPS Personalizado
- Você pode usar HTTPS, mas não com domínio personalizado gratuito

### Sem Variáveis de Ambiente
- Não pode usar secrets ou variáveis privadas

---

## 💡 Alternativa: GitHub Pages + Vercel

Você pode usar **ambos**:

1. **Vercel**: Site completo com backend
   - https://seu-projeto.vercel.app

2. **GitHub Pages**: Cópia estática
   - https://magnatadomarketingcontact-lang.github.io/BORGESSTACK/

Assim você tem backup e mais visibilidade.

---

## ✅ Checklist

- [ ] GitHub Pages habilitado
- [ ] Branch: `main`
- [ ] Folder: `/dist/public`
- [ ] Site acessível em github.io
- [ ] Design aparecendo corretamente

---

## 🆘 Troubleshooting

### Erro 404

**Causa**: GitHub Pages não encontrou o site.

**Solução**:
1. Verifique se `/dist/public` existe
2. Verifique se `index.html` está em `/dist/public`
3. Aguarde 1-2 minutos e recarregue

### Página em branco

**Causa**: Arquivos CSS/JS não carregaram.

**Solução**:
1. Abra DevTools (F12)
2. Veja a aba "Console" para erros
3. Verifique se os caminhos dos assets estão corretos

### Formulário não funciona

**Causa**: GitHub Pages não tem backend.

**Solução**: Use Vercel em vez de GitHub Pages.

---

## 📞 Suporte

- **GitHub Pages Docs**: https://pages.github.com
- **GitHub Help**: https://docs.github.com/en/pages

---

**Recomendação Final: Use Vercel para funcionalidade completa!**
