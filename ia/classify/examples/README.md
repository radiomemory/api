# RADIO MEMORY API

## Classificação de imagens(https://api.radiomemory.com.br/ia/classify)
O serviço é capaz de reconhecer a grande maioria das imagens geradas durante um tratamento odontológico, sejam radiográficas ou fotográficas.

### Acionando o serviço

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
chave de autenticação que permite o acesso ao serviço. Solicite-a através de desenvolvimento@radiomemory.com.br.
#### image
base64 da imagem
#### type
nível de informação sobre a imagem que será retornado. Por hora, apenas o nível 1 está ativo. Em breve, outros níveis serão disponibilizados.

#### Classificação nível 1
Inclui apenas o tipo de imagem: panorâmica, periapical, foto frontal, intraoral esquerda, etc.
