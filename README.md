# COREBIZ FRONTEND CHALLENGE
O desafio consiste em tornar o layout proposto em uma página funcional.
Desenvolver uma aplicação HTML5 + CSS3 + JS baseando-se no [LAYOUT](https://www.figma.com/file/awhTJyKgrjEOqPHUrrFBv0/Corebiz---Frontend-Challenge) e [API](https://documenter.getpostman.com/view/1811817/Szzj8yAq?version=latest) proposto.

## Deploy vercel
[https://corebiz-challenge-mu.vercel.app/](https://corebiz-challenge-mu.vercel.app/)

### Tecnologias adotadas
- [React](https://reactjs.org/)

- [Axios](https://www.npmjs.com/package/axios)

- [Styled-components](https://styled-components.com/)

- [React-Slick](https://react-slick.neostack.com/)

### Para rodar o projeto localmente
1. Clonar o repósitório
2. No terminal, na pasta raiz do projeto, rodaar o seguinte comando: `npm install`
3. Em seguida `npm start`
4. Acessar o localhost:3000 ou porta indicada no navegador

## Checklist
### Requisitos
✅ Criar um repositório com README com as instruções para compilar, testar e rodar o projeto.

✅ Utilizar HTML5, CSS3 e JS (React)

✅ Layout responsivo

✅ Layout de acordo com o design proposto

✅ Foi usada API de produtos para pegar os dados dos produtos e construir a vitrine

✅ Ao clicar no botão “Comprar” é incrementada a quantidade de itens no carrinho

✅ Ao atualizar a página, a quantidade de produtos no carrinho é preservada.

✅ Validações para o form de contato

✅ Ao clicar em enviar com os campos validados, o form é disparado via javascript para a API de newsletter seguindo as especificações da API

❌ Automação de tarefas (Gulp? Grunt? Webpack? 😟 )

### Funcionalidades não exigidas

✅ Hamburguer menu funcional, apesar da opção encontrada não realizar nenhuma ação em si.

✅ Carousel funcional.

❌ Não foi implantada lógica no Search Input

❌ Não foram adicionados loadings/spinners

❌ Feedback ao usuário ao clicar em comprar poderia ser melhorado

## Informações adicionais
- Não foram utilizados bootstrap ou pré-processadores CSS pois não foi deixado claro no enunciado do desafio se era permitido.

- Funcionalidades não exigidas poderiam ser implantadas se houvesse mais tempo para o projeto.

- Para o carousel e lista de produtos foi usada a lib react-slick, apesar de simples utilização encontrei algumas dificuldades em posicionar elementos e tratar erros no console, em alguns viewports a aprensentação do componente pode ficar estranha, caso houvesse mais tempo para entrega do projeto poderia buscar outra solução, mas essa foi a forma mais rápida que encontrei para implantar a funcionalidade.
