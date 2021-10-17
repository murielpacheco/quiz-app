# Quiz App

## Lógica de pensamento sobre a aplicação

### Componentes

- Container (que abrangerá toda a aplicação, podendo ser o próprio App.js)
  - Número atual da Question (2/10).
- Question (onde será renderizado o enunciado da mensagem)
- Respostas (onde serão renderizadas as opções de repostas)

### Lógica JS

- Pegar dados de uma API

  - JS Async (fetch)
  - Useffect
  - Destructuring

- Utilizar dados da API nos componentes React

  - React Hooks (useState, useContext, useEffect)
  - Métodos de array como o .map() para renderizar os dados na tela

- Manipular dados da API
  - Func de randomizar a ordem das questões e das respostas
    - Pesquisar como fazer
  - Funcionalidade de marcar como certa
    - condicionais + css
  - Func de passar para a próxima questão após marcar a questao atual
    - const [questions, setQuestions] = useState();
    - onClick que vai para o proximo elemento do array das questions
  - Func. de, após todas as perguntas respondidas, exibir na tela a quantidade
    de acertos e erros do user.
    - useState para marcar quantos acertos/total, e uma condicional de "elogio"
    - setState() para adicionar +1 em cada acerto

### CSS

- Será usado SCSS como framwork de CSS
- Container das Perguntas e Respostas com GRID
- Estilização após a resposta do User
  - Destacar a resposta certa e as demais opções erradas
  - Tela final após todas as respostas serem respondidas


## Ordem de execução

  1. [x] Fazer o HTML e CSS 
  2. [x] Separar em componentes 
  3. [x] Mexer na API e receber os dados
  4. [] Começar as funcionalidades
    a. [x] Func. de randomizar ordem das questões e perguntas
    b. [x] Func. de passar de questão
    c. [x] Func. de mostrar a atual/total;
    d. [] Func. de marcar como certa.
    e. [] Func. renderizar a endScreen