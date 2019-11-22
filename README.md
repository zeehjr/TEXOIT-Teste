# Teste Node.js TEXO IT

## Observações para os recrutadores
- Tentei fazer no menor tempo possível, até mesmo por conta de minha atual disponibilidade
- Fiz a função de cálculo extremamente flexível, com várias etapas até chegar no cálculo, pelo motivo de legibilidade. Sei que a performance poderia ter ficado melhor se feita de forma mais crua e com menos voltas. Cogitei usar ramda ou lodash para simplificar esse procedimento, mas pensei que pudesse ser mais interessante exibir o quão confortável me sinto com os recursos nativos do ES6.
- Sobre o CSV, optei por não utilizar nenhuma biblioteca externa para o carregamento da mesma, também para exibir um pouco do conhecimento de CSV em geral, de manipulação de strings, de conversão para objetos.
- Sobre os testes, acabei por fazer alguns unitários, e alguns de integração com a API. Para a API foi usada a biblioteca 'supertest'. A engine de testes usada foi o 'Jest' apenas por ainda ser o mais comercialmente usado, apesar de eu ter preferência pelo 'Mocha' com 'Chai'.
- Utilizo a biblioteca 'sucrase' para não ter de configurar um transpiler.
- Não instalei o ESLint devido à simplicidade da aplicação, mas sem dúvidas teria o feito se fosse algo a ser mantido a longo prazo.
- Não utilizei workspace "v1" para versionamento da API.
- Nunca fui muito bom em implementar tudo bem certinho segundo as regras do REST, não fiquei satisfeito com minha escolha de onde por o resource também.

## Rodando os testes

`yarn test` ou `npm run test`.

## Rodando a aplicação

`yarn start` iniciará a aplicação iniciada na porta 8080

## Navegação

- `GET /movies` retornará a lista completa de filmes carregados, exatamente da forma como se encontra no CSV
- `GET /movies?resource=producersMinMaxWinInterval` retornará a lista desejada com o cálculo de menores e maiores intervalos de premiação por produtor.