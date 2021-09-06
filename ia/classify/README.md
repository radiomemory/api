![Radio Memory](https://radiomemory.com.br/wp-content/uploads/2020/02/logo-site-com-borda.png)
# radiomemory/api

## Classificação de imagens (https://api.radiomemory.com.br/ia/classify)
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

### Classificação nível 1 (atributo class)
Retorna o tipo de imagem odontológica, entre os seguintes:

initials|name|nível 2?
---|---|---
PANO|Panorâmica
PERI|Periapical|[sim](#periapicais)
FEO|Fotografia Extraoral|[sim](#extraorais)
IMPD|Impressão Desenhos
IMPD|Impressão Desenhos
IMPI|Impressão Imagens
IMPR|Impressão Relatórios
MOD3D|Modelo 3D
MOD|Modelo
MOD3DC|Modelo 3D Colorido
MODANA|Modelo Anatômico
FO|Fotografia Oclusal|[sim](#fotografias-oclusais)
FIO|Fotografia Intraoral|[sim](#intraorais)
CARP|Carpal
FRON|Frontal
BW|Interproximal|[sim](#interproximais)
RXO|Oclusal|[sim](#radiografias-oclusais)
TELE|Telerradiografia
PEDETC|Pedidos, etc
OTR|Outros
LEVRAD|Levantamento Radiográfico
CEF|Análise Cefalométrica

### Classificação nível 2 (atributo subclass)
Retorna informações mais detalhadas sobre alguns tipos de imagens (periapicais e interproximais):
#### Periapicais
initials|name|defaultNumbers
---|---|---
RMSD|Região Molar Superior Direito|18/17/16
RPSD|Região Pré-Molar Superior Direito|14/15
RPID|Região Pré-Molar Inferior Direito|45/44
RMID|Região Molar Inferior Direito|48/47/46
RCSD|Região Canino Superior Direito|13
RCID|Região Canino Inferior Direito|43
RIS|Região Incisivo Superior|12/11/21/22
RII|Região Incisivo Inferior|42/41/32/31
RCSE|Região Canino Superior Esquerdo|23
RCIE|Região Canino Inferior Esquerdo|33
RMSE|Região Molar Superior Esquerdo|26/27/28
RPSE|Região Pré-Molar Superior Esquerdo|24/25
RPIE|Região Pré-Molar Inferior Esquerdo|34/35
RMIE|Região Molar Inferior Esquerdo|36/37/388
#### Interproximais
initials|name|defaultNumbers
---|---|---
RMD|Região Molar Direito|18/17/16/48/47/46
RPD|Região Pré-Molar Direito|15/14/45/44
RME|Região Molar Esquerdo|28/27/26/38/37/36
RPE|Região Pré-Molar Esquerdo|25/24/35/34
#### Radiografias oclusais
initials|name|defaultNumbers
---|---|---
SUP|Região Oclusal Superior|18/17/16/15/14/13/12/11/21/22/23/24/25/26/27/28
INF|Região Oclusal Inferior|48/47/46/45/44/43/42/41/31/32/33/34/35/36/37/38
#### Extraorais
initials|name
---|---
FFRON|Fotografia Frontal
FSOR|Fotografia Sorriso
FPER|Fotografia Perfil
FPERE|Fotografia Perfil Esquerda
SORZ|Fotografia Sorriso Zoom
#### Intraorais
initials|name
---|---
IOD|Intra Oral Direita
IOE|Intra Oral Esquerda
IOF|Intra Oral Frontal
#### Fotografias oclusais
initials|name
---|---
OSUP|Oclusal superior
OINF|Oclusal Inferior
