![Radio Memory](https://radiomemory.com.br/wp-content/uploads/2020/02/logo-site-com-borda.png)
# radiomemory/api

# EM CONSTRUÇÃO!

## Integração com operadoras de saúde (https://api.radiomemory.com.br/service/subscribe)
Receba imagens de seus referenciados assim que a documentação for publicada. A classificação da imagem também é informada.

### O que é?
A plataforma Radio Memory possui um recurso para acompanhamento de convênios. O cliente/referenciado pode determinar imagens e exames que serão encaminhadas diretamente à operadora assim que a documentação for publicada.

### Criando o serviço local
A operadora deve disponibilizar e expor um serviço REST (ex: https://operadora.com.br/rcv_img) que recebe um objeto json:

```

{
  "jwt":[chave de autenticação],
  "login":[usuário do referenciado],
  "pwd":[senha do referenciado],
  "guia":[número da guia de atendimento],
  "image": [base64 da imagem],
  "classify": [informações de classificação da imagem],
  "requestId":[identificação da requisição]
}
```

Este serviço também deverá retornar um json:

```
{
  "status":[codigo de retorno, 200 em geral],
  "error": [string de erro] #será apresentada na interface do usuário da integração
}
```

### Registrando o serviço
A operadora irá chamar o serviço subscribe informando um objeto json:

```
{
  "key": [chave de autenticação],
  "url": "https://operadora.com.br/rcv_img",
  "port": 10
  "type": [o nível desejado de classificação, 1 ou 2]
}
```

Essa chamada será realizada uma única vez, para registrar o serviço. A operadora pode alterar a url (ou o nível desejado de classificação) chamando novamente o serviço.

### Envios
Assim que as imagens em questão são publicadas online, um item é incluído em uma fila de processamento. Um serviço consome esta fila, acionando o serviço registrado pela operadora, enviando a imagem e registrando o retorno, permitindo o acompanhamento do processo por parte do cliente/referenciado.

### Implementação de referência
Foi incluída uma implementação de referência na pasta examples.

0. É preciso um ambiente node.js configurado com express e jsonwebtoken
1. Crie um projeto node: 
2. Faça o download do arquivo integracao_ref.js e inclua-o no projeto
3. Execute: node integracao_ref.js

Ao executar, o exemplo irá ativar o endpoint http://<SEU_IP>:3000/rcv_img e logo depois irá registrar este endpoint através de uma chamada ao subscribe. 5 segundos depois o endpoint será chamado. Se tudo funcionar corretamente, a mensagem "Comunicação estabelecida!" será apresentada diretamete no console local.
