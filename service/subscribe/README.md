![Radio Memory](https://radiomemory.com.br/wp-content/uploads/2020/02/logo-site-com-borda.png)
# radiomemory/api

## Integração com operadoras de saúde (https://api.radiomemory.com.br/service/subscribe)
Receba imagens de seus credenciados assim que a documentação for publicada. A classificação da imagem também é informada.

### O que é?
A plataforma Radio Memory possui um recurso para acompanhamento de convênios. O cliente/credenciado pode encaminhar imagens e exames diretamente à operadora assim que a documentação for publicada.

### Criando o serviço local
A operadora deve disponibilizar e expor um serviço REST (ex: https://operadora.com.br/rcv_img) que irá receber um objeto json no seguinte formato:

```json
{
  "jwt": "chave de autenticação",
  "login": "usuário do referenciado",
  "pwd": "senha do referenciado",
  "guia": "número da guia de atendimento",
  "image": "base64 da imagem",
  "class": {
    "initials": "PERI",
    "name": "Periapical"
  },
  "subclass": {
    "initials": "RCID",
    "name": "Região Canino Inferior Direito",
    "defaultNumbers": [43]
  }
  "requestId": "identificação da requisição"
}
```
O exemplo acima explicíta a classificação de uma periapical do canino inferior diretiro. Veja [aqui](https://github.com/radiomemory/api/tree/main/ia/classify) os possíveis valores de retorno (atributos class e subclass).

Este serviço também deverá retornar um json:

```json
{
  "status": "código de retorno, 200 em geral",
  "error": "string de erro, será apresentada na interface do usuário da integração"
}
```

### Registrando o serviço
A operadora irá chamar o serviço subscribe informando um objeto json:

```json
{
  "key": "chave de autenticação",
  "url": "https://operadora.com.br/rcv_img",
  "port": 10,
  "type": "o nível desejado de classificação, 1 ou 2"
}
```

Essa chamada será realizada uma única vez, para registrar o serviço. A operadora pode alterar a url (ou o nível desejado de classificação) chamando novamente o serviço.

### Envios
Assim que as imagens em questão são publicadas online, um item é incluído em uma fila de processamento. Um serviço consome esta fila, acionando o serviço registrado pela operadora, enviando a imagem e registrando o retorno, permitindo o acompanhamento do processo por parte do cliente/referenciado.

### Implementação de referência
Foi incluída uma implementação de referência na pasta examples.

0. É preciso um ambiente Node.js funcionando
1. Crie um projeto node integracao_ref
2. Faça o download dos arquivo integracao_ref.js e integracao_ref.package e inclua-os no projeto
3. Execute
```bash
npm install
node integracao_ref.js
```

Ao executar, o exemplo irá:
* Ativar o endpoint http://<SEU_IP>:3000/rcv_img (o serviço deve estar exposto para acesso externo)
* Registrar este endpoint através de uma chamada ao subscribe
* Imediatamente o endpoint será chamado com o parâmetro "teste" (veja o exemplo)
* Se tudo funcionar corretamente, as mensagens "Comunicação estabelecida!" e "Imagem recebida!" serão apresentadas diretamete no console local
