_Rota_: Endereco completo da requisicao

_Recurso_: Entidade do sistema

# Verbos HTTP

GET: Obter informações

POST: Inserir informações

PUT: Alterar informações

DELETE: Excluir informações

**POST**: http://www.meusite.com.br/recurso: insere informação

**GET**: http://www.meusite.com.br/recurso: obtem uma listagem do recruso.

**GET**: http://www.meusite.com.br/recurso/id: obtem informações do recurso id.

# Request Parameters

**Request Params**: Parâmetros enviados na rota e servem para identificar o recurso, quase sempre obrigatório.
`request.body`

**Query Params**: Parâmetros enviados pela rota para filtrar as informações que serão enviadas, opcionais.
`request.params`

**Request Body**: Informações enviadas no body da requisição. Para este projeto usaremos o formato JSON.
`request.body`
