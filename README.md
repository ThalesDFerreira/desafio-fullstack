***ANTES DAS CONFIGURAÇÕES INICIAIS***

Este projeto consiste em uma aplicação FullStack com o objetivo de interagir com o chat Bot do Telegram.

Dito isso, requer-se para execução desse projeto que tenha em seu sistema o seguinte:

* "NodeJS" e "npm";
* "MySQL Workbanch";
* "Git".
* "Criação de um bot no telegram"

***CONFIGURAÇÕES INICIAIS***

1 - Faça o clone do projeto com uma das opções abaixo sem as aspas:

* HTTPS - "git clone https://github.com/ThalesDFerreira/desafio-fullstack.git"
* SSH - "git clone git@github.com:ThalesDFerreira/desafio-fullstack.git"


2 - Após você entrará na diretório do projeto:
"cd desafio-fullstack"


3 - Existirá dois diretórios, um do frontend e outro do backend.


4 - Será preciso instalar as dependências do projeto, para isso você deverá entrar em cada um dos diretórios e executar o comando "npm instal" no terminal.


5 - Caso não saiba como ir até o diretório, e tendo como parametro que você se encontra na pasta raiz do clone efetuado, basta executar o comando abaixo:

* frontend - "cd frontend && npm install" // entra no diretório frontend e instala as dependências;
* "cd .." // voltar para pasta raiz do projeto
* backend - "cd backend && npm install" // entra no diretório backend e instala as dependências;


6 - Após a instalação de todas as dependências dos projetos, você precisará configurar o arquivo que está nos diretórios raiz do frontend e backend chamado "env_exemple" e renomea-lo para ".env".


7 - Agora você precisará iniciar o Banco de Dados com esse comando:
* "npm run db:reset"


8 - Feito isso, agora precisara executar a inicialização dos projetos frontend e backend, ou seja, ter dois terminaism um no diretório backend, e outro no frontend. 
Feito isso, basta executar o comando de execução nos dois terminais:

* "npm run dev"

Após isso, basta inicializar o "/start" no bot do telegram;


***FRONT-END***

Para ter acesso ao frontend localmente você precisará acessar do navegador o endpoit abaixo:

* http://localhost:3000/

* para testar basta inserir o 
          email: teste@email.com
          senha: teste


