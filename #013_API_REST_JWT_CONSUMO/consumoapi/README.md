API de GAMES
===================
Esta API é utilizada para gerenciamento de Jogos para Vendas

----------


### Endpoints

### GET  /games
Este endpoint é responsável por tornar a listagem de todos os games cadastrados no **banco de dados**.

#### Parametros
```
Nenhum
```

#### **Respostas**
##### ***Status:*** 200
Caso essa resposta aconteça você vai receber a listagem de todos os games
Exemplo de Resposta:
```
[
    {
        "id": 4,
        "title": "The last of us - Part 2",
        "year": 2020,
        "platform": "PlayStation 4",
        "price": "169.18",
        "createdAt": "2020-08-19T22:47:06.000Z",
        "updatedAt": "2020-08-20T23:57:23.000Z"
    },
    {
        "id": 5,
        "title": "Red dead Redemption 2",
        "year": 2018,
        "platform": "Xbox One",
        "price": "137.27",
        "createdAt": "2020-08-19T22:48:04.000Z",
        "updatedAt": "2020-08-19T22:48:04.000Z"
    },
    {
        "id": 8,
        "title": "Battlefield V - Edição Deluxe",
        "year": 2018,
        "platform": "PlayStation 4",
        "price": "189.75",
        "createdAt": "2020-08-19T22:56:11.000Z",
        "updatedAt": "2020-08-21T22:22:31.000Z"
    }
]
```

##### ***Status:*** 401
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo de autenticação. Motivos: Token inválido, Token expirado
Exemplo de resposta:
```
{
	"error": "Token inválido!"
}
```
---
### POST /auth
Este endpoint é responsável no processo de **login** .

#### Parametros
```
{
	"email": "victordevtb@udemy.com",
	"password": "victor123"
}
```

#### **Respostas**
##### **Status:** 200

Caso essa resposta aconteça você receberá os previlégios para o gerenciamento dos verbos correspondentes a cada rota da API

#### **Status:** 404

Caso essa resposta aconteça significa que ocorreu alguma falha durante o processo de autenticação. Possíveis motivos: Email não encontrado, Email inválido

Exemplo de resposta:
```
{
    "error": "Email não encontrado"
}
```

#### **Status:** 401

Ou caso a senha esteja inválida surgira status 401 coma mensagem abaixo:
```
{
    "error": "Credencial inválida"
}
```

#### **Status:** 400
Ou ainda caso receba o status 400, possivelmente falha com banco de Dados ou acesso as requisições vindas pelo servidor de aplicação
Exemplo de resposta:
```
{
    "error": "Credencial inválida"
}
```
