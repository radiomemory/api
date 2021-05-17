![Radio Memory](https://radiomemory.com.br/wp-content/uploads/2020/02/logo-site-com-borda.png)
# radiomemory/api

Há mais de 25 anos a Radio Memory contribui com o desenvolvimento da radiologia odontológica, aprimorando e organizando a produção e acesso a imagens, diagnósticos e tratamentos dentários.

Sempre atenta aos avanços tecnológicos, a empresa apostou forte em inteligência artificial, direcionando suas principais mentes nessa frente de trabalho. Centenas de clínicas radiológicas em todo o Brasil já estão se beneficiando dessa tecnologia de ponta.

Com objetivo de impactar positivamente ainda mais, estamos disponibilizando acesso a estes serviços, possibilitando que outros players do mercado odontológico possam usufruir dessa tecnologia a um custo acessível.


## Catálogo (serviços disponíveis)

### Classificação de imagens (https://api.radiomemory.com.br/ia/classify)
O serviço é capaz de reconhecer a grande maioria das imagens geradas durante um tratamento odontológico, sejam radiográficas ou fotográficas. Mais detalhes [aqui](https://github.com/radiomemory/api/tree/main/ia/classify).

#### Classificação nível 1
Inclui apenas o tipo de imagem: panorâmica, periapical, foto frontal, intraoral esquerda, etc.

#### Classificação nível 2
Retorna informações mais detalhadas sobre alguns tipos de imagens (periapicais e panorâmicas).

### Integração com operadoras de saúde (https://api.radiomemory.com.br/service/subscribe)
Receba imagens de seus referenciados assim que a documentação for publicada. A classificação da imagem também é informada. Mais detalhes [aqui](https://github.com/radiomemory/api/tree/main/service/subscribe).

## Roadmap (serviços planejados)
Os serviços abaixo estão no pipeline de desenvolvimento e serão disponibilizados em breve.

### Cefbot
Serviço para realização de análises cefalométricas. 3 tipos de chamadas diferentes permitem que o usuário integre da forma mais adequada para sua realidade. Mais detalhes em breve.

### Identificação de dentes
Reconhece com grande precisão dentes presentes e ausentes incluindo as coordenadas dos longos-eixos em radiografias panorâmicas. Mais detalhes em breve.
