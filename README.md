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

## 02. Operadores de transformação

Apresentados alguns operadores disponíveis para utilizar em fluxos de _Observables_, funções passadas como parâmetro para a função _pipe_.
Com o operador _map_ é possível manipular o dado trafegado pelo fluxo. Foi utilizado para ordenar a lista de ações pelo código.
Mostrado o operador _tap_, utilizado como forma de _debug_, que permite manipular o dado sem altera-lo em relação a sua trafegação pelo fluxo.
Para alterar o fluxo extraindo apenas uma propriedade do dado trafegado foi mostrado o operador _pluck_. Com ele é possível substituir usos de _map_ criados apenas para obter uma determinada propriedade do dado de entrada, passando a usa-lá na saída. Foi utilizado para extrair a lista de ações do retornor da _API_.
Falado sobre a importância de se desinscrever de _Observables_ através da estratégia de chamar o método _unsubscribe_ no ciclo de vida _OnDestroy_ do componente. Isso é necessário para evitar vazamento de memória de subscrições se mantendo ativas. No caso de _Observables_ retornados em requisições _HTTP_, o _HttpClient_ já trata de encerrar a subscrição à _Observables_ assim que a requisição é concluída, mas em outros casos esse tratamento se torna necessário.
Utilizando o _pipe async_, que recebe um _Observable_ direto no _template_, também nos auxilia a tratar o ciclo de vida do _Observable_ conforme o do componente.
Explicado sobre o gráfico de _Marbles_, utilizados para explicar e exemplificar operações reativas ao se trabalhar com _RxJS_ e _Observables_. 

## 03. Operadores de fluxo

Apresentado alguns operadores disponíveis para auxiliar na manipulação de fluxos de _Observable_.
Implementada integração de consulta de ações conforme valor digitado em campo de pesquisa. Para isso foi realizada um alteração ao evento _valueChanges_ do campo, que também é um _Observable_. No fluxo desse, foi utilizado o operador _switchMap_, para transformar cada alteração de valor do campo de busca em uma consulta de ações.
Para manter o funcionamento original de carregar a lista de ações ao iniciar o componente e juntar com o _Observable_ de consulta de ações por termo de busca, foi utilizado o operador _merge_. Com ele é possível unirmos dois fluxos à serem utilizados como o mesmo _Observable_.

## 04. Operadore de filtro

Apresentado alguns operadores disponíveis para filtragem de fluxos de _Observable_.
Para filtragens conforme a veracidade de uma expressão booleana, podesse utilizar o operador _filter_. No projeto, foi utilizado executar a consulta de ações por busca quando o termo de busca fosse vazio ou maior que três caracteres.
Com o operador _debounceTime_ foi possível definir um tempo de espera entre o momento da última alteração de valor emitida e a execução da busca, evitando emissões descartáveis enquanto há alterações contínuas de valor no campo de busca.
Para evitar emissões com valores de busca iguais ao último consultado, podesse utilizar o operador _distinctUntilChanged_.

## I. RxJS - Documentação

https://rxjs-dev.firebaseapp.com/guide/overview