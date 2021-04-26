from pathlib import Path
from  apiConnect import classify
from apiConnect import imageFromFile
import json
from multiprocessing.dummy import Pool as ThreadPool 

def findFiles(folder, limit=0):
    files = []
    for path in Path(folder).rglob('*.jpg'):
        if limit > 0 and len(files) == limit:
            return files
        files.append(str(path))

    print(len(files))    
    return files
def classifyTeste(file):
    fileStr = imageFromFile(file)
    ret = classify('CHAVE_DE_AUTENTICACAO', fileStr)
    j = json.loads(ret)
    status = j.get('status', 500)
    if status == 200:
        #print(j['classify']['classe'])
        cf = j['classify']['classe']
        #print(cf, flush=True)
    else:
        #err = err + 1
        print(j, end=" ")    

#/workspace/api-service/testes/imgs/Intra-Oral-Esquerda/1.00_1028a429e3111ac7c6891f533eea6ccd.jp
#workspace/api-service/testes/imgs/Intra-Oral-Esquerda/1.00_da00ae5fe129d2eb8e4412f589d7a17e.jpg
files = findFiles('/workspace/api-service/testes/imgs')
print(len(files))
pool = ThreadPool(50)
pool.map(classifyTeste,files)
pool.close() 
pool.join()
