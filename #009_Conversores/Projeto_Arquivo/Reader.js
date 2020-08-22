const fs = require("fs");
const util = require("util");


class Reader{
    constructor(){
        this.reader = util.promisify(fs.readFile);
    }

    /*        
    Read(filePath){
        fs.readFile(filePath,"utf-8", (err, data) => {
            if(!err){
                console.log(data);
            }else{
                console.log(`Erro ao ler o arquivo: ${err}`)
            }
        });

    }
       */


    async Read(filepath)
    {   
        try{
            return await this.reader(filepath, "utf8");

        }catch(erro){

            return "Erro na leitura do arquivo: " + erro;
        }

    }
}

module.exports = Reader;