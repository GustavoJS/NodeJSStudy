/* **************************************************** *************************************************/
/* ******************* Função Assincrona ************** *************************************************/
/* **************************************************** *************************************************/

/*

enviarEmail = ((corpo, para) => {
    
    setTimeout(() => {
        console.log(`
        Para: ${para}
        -----------------------------------------
        ${corpo}
        -----------------------------------------
        De: José Almeida
        `);
    }, 8000);
 });


 console.log("Primeira mensagem");
 enviarEmail("Olá. Seja bem vindo ao conteúdo", "santos_jorge@gmail.com");
 console.log("Terceira mensagem");

 */

/* ****************************************************** *************************************************/
/* ******************* Uso de Callbacks ***************** *************************************************/
/* ****************************************************** *************************************************/


/*
enviarEmail = ((corpo, para, callback) => {
    
    setTimeout(() => {
        console.log(`
        Para: ${para}
        -----------------------------------------
        ${corpo}
        -----------------------------------------
        De: José Almeida
        `);

        callback(); // Função Callback sendo execultado após envio de mensagem dentro dos 8 segundos
    }, 8000);

 });


 console.log("Primeira mensagem");
 enviarEmail("Olá. Seja bem vindo ao conteúdo", "santos_jorge@gmail.com", () => {
    console.log("Mensagem enviada com sucesso");
 });
 console.log("Terceira mensagem");
*/

/* ********************************************************/
/* ******************* Um outro exemplo *******************/
/* ********************************************************/ 
/*
let salarioBruto = 3000;
let salarioLiquido;

let getSalario = (salarioBruto, callback) => {
    setTimeout(() => {

        let liquido = 0;
        const inss  = salarioBruto * 0.11;
        const vr    = salarioBruto * 0.05;
        const vt    = salarioBruto * 0.06;
        const fgts  = salarioBruto * 0.15;
    
        const descontos = inss + vr + vt + fgts;
    
        liquido = salarioBruto  - descontos;
        
        return callback(liquido, 1, 5);

    }, 5000);
};

console.log(` Testando apenas uma requisão para função getSalario
    Parâmetro - salarioBruto de R$${salarioBruto}
`);

getSalario(salarioBruto, (resultado, countRequire, time ) => {
    salarioLiquido = resultado;
    console.log(`O salário líquido é R$${salarioLiquido}`);
    console.log(` 
        Quantidade de requisição para a função : ${countRequire}
        --------------------------------------------------------------------
        Tempo de execução: ${time} segundos
        --------------------------------------------------------------------
        `
    );
});

console.log(`Aguarde um momento`);

*/



/* ****************************************************** *************************************************/
/* ******************* USO DE PROMISSES ***************** *************************************************/
/* ****************************************************** *************************************************/


/*
function enviarEmail(corpo, para){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var deuErro = false;
            
            // console.log("Email enviado");

            if(!deuErro)
            {
                //resolve(); // Sucesso com essa Promise
                resolve({time: 3, to: para}); // Atribuindo parâmetro
            }else{
                reject({messageError: 'Falha no tempo de processamento do servidor externo'}); // Erro com essa Promisse

            }
        },3000);
    });
}
enviarEmail("Olá, seja muito bem vindo", "victor@udemy.com").then((info) => {
    console.log(`
    O email foi enviado com sucesso
    ----------------------------------------------
    Tempo: ${info.time}segs
    Destinatário: ${info.to} 
    `);
}).catch( erro => {
    console.log(`Erro ao enviar o email!
    ----------------------------------------------
    Mensagem do Erro: ${erro.messageError}
    ` );
});

*/



/********************  O mesmo exemplo mas utilizando parâmetros via Destructor **********************************/
/*
enviarEmail("Olá, seja muito bem vindo", "victor@udemy.com").then( ({time, to}) => {
    console.log(`
    O email foi enviado com sucesso
    ----------------------------------------------
    Tempo: ${time}segs
    Destinatário: ${to} 
    `);
}).catch( ({messageError}) => {
    console.log(`Erro ao enviar o email!
    ----------------------------------------------
    Mensagem do Erro: ${messageError}
    ` );
});
*/


/* ***********************************************************/
/* ******************* Promisses aninhadas *******************/
/* ***********************************************************/ 

/*
function pegarId(){
    return new Promise((resolve) => { 
        setTimeout(() => {
            resolve(5); // Utilizando 5 para representar o Id do exemplo
        },2000);
    });
}


function buscarEmailNoBanco(id) {
    return new Promise((resolve) => {
        setTimeout(() => {

            // { ... }
            // lógica para buscar através do Id
            // { ... }
            
            resolve('victor@udemy.com');
        },2000);
    });
}

function enviarEmail(corpo, para){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            let deuErro = true;
            if(!deuErro)
            {
                resolve({time: 6, to: para});
            }else{
                reject("Fila cheia");
            }
        }, 4000);
    });
}



let corpo = "Olá, seja muito bem vindo!!!";
let para  = "victor@udemy.com";

console.log("INICIO");

pegarId().then((id) => {
    buscarEmailNoBanco(id).then((email) => {
        
        enviarEmail(corpo, para)
        .then( ({time, to }) => {
            console.log(`
                Mensagem enviada com sucesso!
                --------------------------------------
                Id: ${id}
                Tempo: ${time} segundos
                Destinatário: ${to}
                --------------------------------------
            `);
        })
        .catch(erro => {
            console.log(`
            Erro ao enviar a mensagem!
            --------------------------------------
            Mensagem: ${erro}
            --------------------------------------
            `);
        });
    })
});

console.log("FIM");

*/


/* ****************************************************** *************************************************/
/* ************************ Async/Await ***************** *************************************************/
/* ****************************************************** *************************************************/
/*
function getUsers(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {name: 'Bruna', lang: 'JavaScript'},
                {name: 'Rafael', lang: 'Python'},
                {name: 'Lucas', lang: 'C#'},
            ]);
        }, 3000);
    });
}

async function main(){

    // let users = await getUsers(); // Utilizando await a função se torna Síncrona

    // console.log(users);
    // console.log("OLÁ");


    // Para utilizar a função de Forma Assíncrona é necessário o operador THEN conforme abaixo
    getUsers().then(users => {
        console.log(users);
    });
    
    console.log("OLÁ");

}

main();

*/



/* ************************************************** ***************** */
/* ************************ Outro exemplo Async/Await ***************** */
/* ************************************************** ***************** */



function pegarId(){
    return new Promise((resolve) => { 
        setTimeout(() => {
            resolve(5); // Utilizando 5 para representar o Id do exemplo
        },2000);
    });
}


function buscarEmailNoBanco(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            // { ... }
            // lógica para buscar através do Id
            // { ... }
            let erro = true;
            if(!erro)
            {

                resolve('victor@udemy.com');
            }else{
                reject('Erro com banco de daodos!');
            }
        },2000);
    });
}

function enviarEmail(corpo, para){
    return new Promise( (resolve, reject) => {
        if( para != undefined)
        {
            setTimeout(() => {
                let deuErro = false;
                if(!deuErro)
                {
                    resolve({time: 6, to: para});
                }else{
                    reject("Fila cheia");
                }
            }, 4000);
        }else{
            reject("Email sem destinatário!");
        }

    });
}




let emailBody = "Olá, seja muito bem vindo!!!";

// let para  = "victor@udemy.com";

async function principal()
{
    let id = await pegarId();
    // let emailTo = await buscarEmailNoBanco(id);
    try{

        var emailTo = await buscarEmailNoBanco(id);
        console.log("Email encontrado...");
    }catch(erro){
        console.log(erro);
    }
    
    enviarEmail(emailBody, emailTo)
    .then( ({time, to }) => {
        console.log(`
            Mensagem enviada com sucesso!
            --------------------------------------
            Id: ${id}
            Tempo: ${time} segundos
            Destinatário: ${to}
            --------------------------------------
        `);
    })
    .catch(erro => {
        console.log(`
        Erro ao enviar a mensagem!
        --------------------------------------
        Mensagem: ${erro}
        --------------------------------------
        `);
    });

}

console.log("INICIO");
principal();
console.log("FIM");
