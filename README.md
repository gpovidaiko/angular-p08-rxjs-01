# angular-p08-rxjs-01

Aplicação para estudo de Angular.

Projeto desenvolvido ao longo de curso realizado, com a motivação de compreender e trabalha com a biblioteca _RxJS_ em projetos Angular. Como ponto de partida, foi baixado o projeto [_Byte Bank Broker_](https://github.com/alura-cursos/alura_angular_rxjs_1/archive/master.zip), indicado para o desenvolvimento do curso.

## 01. Observables

Criação de interfaces de modelo para representar os dados de ações recuperados do servidor. Criação de serviço para consulta ao servidor, para recuperar dados de ações. Consumo do serviço de consulta pelo componente que irá listar os dados de ações recuperados.
Falado sobre o conceito de _Observable_, objeto retornado ao realizar uma requisição _HTTP_. Ao trabalhar de forma reativa, tendo que esperar o retorno de uma requisição, um _Observable_ é utilizado para aguardar os dados dessa requisição, abrindo um fluxo de passagem de dados á serem tratados e recebidos.

|| único valor | coleção de valores |
|--|--|--|
| **imperativo** | function | iterator |
| **reativo** | promise | observable |
