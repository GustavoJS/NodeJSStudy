let http =  require('http');

http.createServer((req, resp) => {
    resp.end('<h1>Bem vindo ao meu portal</h1><p>Acesse os nossos conteudos</p>');
}).listen('8181');


console.log('Servidor em execução');