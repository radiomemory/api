import requests
import time
import json
import http.client,urllib.parse

import base64

def classify(key,image):
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

def returnClass(res):
    j = json.loads(res)
    status = j.get('status', 500)
    if status == 200:
        return j['classify']['classe']
    else:
        print(j['error'])
        return ''    

def imageFromFile(file):
    try:
        with open(file, "rb") as img_file:
            img64 = base64.b64encode(img_file.read())
            return img64.decode()
    except Exception as e:
        print(e)
        return e

# res = classify('CHAVE_DE_AUTENTICACAO', imageFromFile('1569__904-68585.jpg'))
# print(returnClass(res))
