# SkyFit Cascavel - Premium LP (V4 Company)

Esta é a versão definitiva e de alta performance da Landing Page da SkyFit Cascavel. O projeto foi estruturado de forma modular para facilitar a manutenção e garantir o máximo de fluidez visual.

## 📁 Estrutura do Projeto

- `index.html`: Estrutura semântica e conteúdo (SEO-ready).
- `css/styles.css`: Design premium com Glassmorphism e hardware acceleration.
- `js/scripts.js`: Lógica de animação e performance (Scroll & Counters).
- `assets/`: 
  - `images/`: Coloque aqui as imagens do projeto (ex: hero-bg, fotos da unidade).
  - `icons/`: Ícones locais se não for usar o CDN do Phosphor.

## 🚀 Como Visualizar Localmente

Basta abrir o arquivo `index.html` em qualquer navegador (Chrome, Edge, Safari). Todos os arquivos estão conectados por caminhos relativos, então o site funcionará perfeitamente "offline".

## 🛡️ Segurança e Captação de Leads (Próximos Passos)

Para colocar este site online e capturar dados de clientes com segurança:

1. **Backend**: Recomendamos o uso do **Supabase** (que você já possui acesso). 
2. **Formulário**: O formulário no `index.html` já está pronto para ser conectado por uma API.
3. **Segurança (RLS)**: No Supabase, você criará uma tabela de `leads` e ativará as políticas de segurança (Row Level Security). Isso permite que qualquer pessoa *envie* os dados, mas que somente *você* consiga visualizá-los.

---
*Desenvolvido com foco em alta performance e conversão pela V4 Company.*
3
