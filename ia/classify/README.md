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

### Classificação nível 1
Retona o tipo de imagem odontológica, entre os seguintes:
#### Fotografia-Frontal
#### Fotografia-Perfil
#### Fotografia-Perfil-Esq
#### Fotografia-Sorriso
#### Sorriso-Zoom
#### Impressao-Desenhos
#### Impressao-Imgs
#### Impressao-Relat
#### Modelo-3D
#### Modelo-3D-Color
#### Modelo-Ana
#### Oclusal-Inferior
#### Oclusal-Superior
#### Outros
#### Pedidos-etc
#### Intra-Oral-Direita
#### Intra-Oral-Esquerda
#### Intra-Oral-Frontal
#### Carpal
#### Frontal
#### Interproximal
#### Panoramica
#### Periapical
#### Telerradiografia

#### Classificação nível 2 (em desenvolvimento!)
Inclui também o subtipo da imagem, quando disponível: periapical [11-12-13], panorâmica [permanente, desdentado superior], etc. No momento, o nível 2 é apenas para radiografias panorâmicas e periapicais.
