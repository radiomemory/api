let express = require("express");
let jwt = require("jsonwebtoken");
let fs = require("fs");
const { default: axios} = require("axios");
let app = new express();

app.use(express.json({limit: "50mb"}));
//app.use(express.urlencoded({limit: "50mb"}));

// serviço à ser implementado e hospedado pela operadora
let rcv_img = (req,res)=>{
    
    // verificar autenticação b2b
    console.log(req.headers.authorization)
    let token = req.headers.authorization.replace('Bearer ', '')
    jwt.verify(token, "86a756afd5fa8ea0635be3f0a0c32897", (err, decoded) => {
        if(err) {
            let responseData = {
                status: 403,
                error: "acesso não autorizado"
            };
            res.status(403).send(responseData);
            return;
        }

        if(decoded) {

            // agora entram as regras de negócio, como exemplo validação de login/senha do credenciado
            if(req.body.login !== "RM" || req.body.pwd !== "RM") {
                let responseData = {
                    status: 200,
                    error: "usuário/senha inválido"
                };
                res.send(responseData);
                console.log(responseData);
                return;
            }

            // ou guia não existe ou não pertence ao credenciado
            if(req.body.guia != 0) {
                let responseData = {
                    status: 200,
                    error: "guia não existe ou não pertence ao referenciado"
                };
                res.send(responseData);
                console.log(responseData);
                return;
            }

            // ou imagem não corresponde à nenhum procedimento existente na guia
            if(req.body.class.initials != "PERI" || req.body.subclass.initials != "RCID") {
                let responseData = {
                    status: 200,
                    error: "imagem não corresponde à nenhum procedimento existente na guia"
                };
                res.send(responseData);
                console.log(responseData);
                return;
            }

            // tudo OK!
            console.log(req.body);
            if(req.body.teste){
                fs.writeFileSync("./img.jpg", req.body.image, "base64");
            }
            let responseData = {
                status: 200
            };
            res.send(responseData);
            console.log(responseData);
        }
    });
};

// o serviço criado deve então ser publicado em URL acessível
app.post("/rcv_img", rcv_img);
app.listen(3000);

// finalmente o serviço deve ser registrado na API Radio Memory
let body = {
    "key": "86a756afd5fa8ea0635be3f0a0c32897",
    "url": "https://3000-coral-seahorse-z7738oq8.ws-us15.gitpod.io/rcv_img",
    "type": 2
};

setTimeout(function() { // ignore o timeout, não é necessário
    axios.post("https://api.radiomemory.com.br/servicos/subscribe", body).then(function(e) {
        //console.log(e.data);
    }).catch(err => {
        console.log(err);
    });
}, 1000);
