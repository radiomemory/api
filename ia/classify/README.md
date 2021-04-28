![Radio Memory](https://radiomemory.com.br/wp-content/uploads/2020/02/logo-site-com-borda.png)
# radiomemory/api

## Classificação de imagens(https://api.radiomemory.com.br/ia/classify)
O serviço é capaz de reconhecer a grande maioria das imagens geradas durante um tratamento odontológico, sejam radiográficas ou fotográficas.

### Acionando o serviço (veja a pasta examples para mais detalhes)

```
    headers = {"Content-type": "application/json", "Accept": "text/plain"}
    #https://api.radiomemory.com.br/ia/classify
    url = '/ia/classify'
    post = {
        "key":key,
        "image": image,
        "type":1
    }
    httplib = http.client

    try:
        conn = httplib.HTTPSConnection('api.radiomemory.com.br')
        conn.request("POST", url, json.dumps(post),headers)
        res = conn.getresponse()
        dec = res.read().decode()
        return dec
    except Exception as e:
        print(e)
```
#### key
Chave de autenticação que permite o acesso ao serviço. Solicite-a através de desenvolvimento@radiomemory.com.br.
#### image
Base64 da imagem.
#### type
Nível de informação sobre a imagem que será retornado. Por hora, apenas o nível 1 está ativo. Em breve, outros níveis serão disponibilizados.

### Classificação nível 1
Retorna o tipo de imagem odontológica, entre os seguintes:
* Fotografia-Frontal
* Fotografia-Perfil
* Fotografia-Perfil-Esq
* Fotografia-Sorriso
* Sorriso-Zoom
* Impressao-Desenhos
* Impressao-Imgs
* Impressao-Relat
* Modelo-3D
* Modelo-3D-Color
* Modelo-Ana
* Oclusal-Inferior
* Oclusal-Superior
* Outros
* Pedidos-etc
* Intra-Oral-Direita
* Intra-Oral-Esquerda
* Intra-Oral-Frontal
* Carpal
* Frontal
* Interproximal
* Panoramica
* Periapical
* Telerradiografia

### Classificação nível 2
Retorna informações mais detalhadas sobre alguns tipos de imagens (periapicais e panorâmicas)
####Periapicais
* 18-17
* 16-15-14
* 46-45-44
* 48-47
* 13
* 43
* 11-21
* 42-41-31-32
* 23
* 33
* 27-28
* 24-25-26
* 34-35-36
* 37-38
#### Panorâmicas
* Dentição permanente ou mista
* Desdentado superior, desdentado inferior ou desdentado total
