![Radio Memory](https://radiomemory.com.br/wp-content/uploads/2020/02/logo-site-com-borda.png)
# radiomemory/api

## Classificação de imagens(https://api.radiomemory.com.br/ia/classify)
O serviço é capaz de reconhecer a grande maioria das imagens geradas durante um tratamento odontológico, sejam radiográficas ou fotográficas.

### Acionando o serviço (veja os exemplos para mais detalhes)

```
headers = {"Content-type": "application/json", "Accept": "text/plain"}
#https://api.radiomemory.com.br/ia/classify
url = '/ia/classify'
post = {
  "key":key,
  "image": image,
  "type":1
  }
```
#### key
Chave de autenticação que permite o acesso ao serviço. Solicite-a através de desenvolvimento@radiomemory.com.br.
#### image
Base64 da imagem.
#### type
Nível de informação sobre a imagem que será retornado. Por hora, apenas o nível 1 está ativo. Em breve, outros níveis serão disponibilizados.

#### Classificação nível 1
Retona o tipo de imagem odontológica, entre os seguintes:
##### panorâmica
##### periapical
##### foto frontal
##### intraoral esquerda
##### COMPLETAR!!!!
