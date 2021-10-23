![Radio Memory](https://radiomemory.com.br/wp-content/uploads/2020/02/logo-site-com-borda.png)
# radiomemory/api

## Descrição de imagens (https://api.radiomemory.com.br/ia/describe)
O serviço é capaz de descrever imagens geradas durante um tratamento odontológico e reconhecer com grande precisão dentes presentes e ausentes incluindo as coordenadas dos longos-eixos em radiografias panorâmicas. Atualmente está focado em imagens panorâmicas.

### Acionando o serviço (veja a pasta examples para mais detalhes)

```
???
```
#### key
Chave de autenticação que permite o acesso ao serviço. Solicite-a através de desenvolvimento@radiomemory.com.br.
#### image
Base64 da imagem.
#### type
Nível de informação sobre a imagem que será retornado. Por hora, apenas o nível 1 está ativo. Em breve, outros níveis serão disponibilizados.
???

### Panorâmicas

#### Descrição nível 1
Retorna o tipo de dentição dentre as classes abaixo:
* Dentição permanente ou mista
* Desdentado superior, desdentado inferior ou desdentado total

#### Descrição nível 2
Retorna a lista de dentes presentes e ausentes, incluindo as coordenadas do longo eixo.

#### Descrição nível 3
Retorna a lista de procedimentos presentes, incluindo as coordenadas.

#### Descrição nível 4
Retorna a lista de anomalias presentes, incluindo as coordenadas.
