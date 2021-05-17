let express = require('express');
let jwt = require('jsonwebtoken')
let fs = require('fs')
let app = new express()

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

/**
 * Exemplo de recebimento de uma requisição
 * Será enviado o seguinte objeto JSON (application/json):
 * {
        "jwt":string,
        "login":string,
        "pwd": string,
        "guia":string,
        "image": string(base64),
        "classify":string,
        "requestId":number
    }
 */

let rcv_img = (req,res)=>{
    let body = req.body
    jwt.verify(body.jwt,'SEU TOKEN',(err,decoded)=>{
        if(err){
            let objError = {
                status:403,
                error: 'Erro de autenticação interna'
            }
           
            res.status(403).send(objError)
            return;
        }

        if(decoded){
            console.log('Comunicação estabelecida!')

            //Exemplo de objeto com os metadados da requisição
            // let requestData = {
            //     login: body.login,
            //     pwd: body.pwd,
            //     guia: body.guia,
            //     classify: body.classify,
            //     requestId: body.requestId
            // }
            if(body?.teste){
                fs.writeFileSync('./img.jpg',body.image, 'base64')
            }
            let responseData = {
                status: 200,
                error: ''
            }
            res.send(responseData)
        }
    })

}

app.post('/rcv_img', receiveImage);
app.listen(3000)
