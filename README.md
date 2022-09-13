# <h1 align="center"> ✍🏾 Blogs API 📹 </h1>

![image](https://user-images.githubusercontent.com/98190806/189659626-0fe60595-a0c1-4b5e-8472-79787516abd5.png)


## Descrição:

<p align="justify">Blogs API é uma <strong>API RESTful</strong> desenvolvida em <strong>arquitetura MSC</strong> (<strong>Model Service Controller</strong>), com o Sequelize ORM como responsável pelas consultas e manipulações do banco de dados. A API possibilita o CRUD (Create, Read, Update and Delete, em português criar, ler, atualizar e deletar) de postagens; a criação, leitura e exclusão de usuários; bem como a inclusão e leitura de categorias para as postagens. Tudo isso para simular o sistema de funcionamento de um blog.</p>

## Ferramentas de desenvolvimento:

<div align="left">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" height="50" alt="Docker_logo"  />
<img src="https://api.iconify.design/logos:sequelize.svg?color=%23888888" height="45" alt="Sequelize_logo"  />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" height="45" alt="Mysql_logo"  />
<img src="https://api.iconify.design/logos:jwt-icon.svg?color=%23888888" height="45" alt="JWT_logo"  />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="45" alt="Express_logo"  />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="45" alt="NodeJs_logo"  />
<img src="https://seeklogo.com/images/P/postman-logo-F43375A2EB-seeklogo.com.png" height="45" alt="Postman_logo"  />

<p align="justify">
Blogs API foi desenvolvido em ambiente isolado utilizando <strong>Docker</strong>; o <strong>ORM Sequelize</strong> foi responsável por toda a abstração de consultas e manipulação do banco de dados <strong>MySQL</strong>. Além disso, a biblioteca <strong>JSON Web Token</strong> (<strong>JWT</strong>) foi utilizada para gerar e autenticar tokens, aplicada com middlewares de validação, adicionando uma camada de segurança na API.
</p> 
<p align="justify" >
O <strong>Express.js</strong>, framework para <strong>Node.js</strong>, ofereceu estrutura para construir os endpoints dessa API seguindo os princípios de arquitetura REST. O <strong>Postman</strong> também foi utilizado, durante o desenvolvimento para monitorar e testar scripts e solicitações; posteriormente, para escrever a documentação.
</p> 

</div>

## Clique no ícone e acesse a documentação por meio do **Postman**:

<a href="https://documenter.getpostman.com/view/22527230/2s7YYpfm18" target="blanck"> <img src="https://seeklogo.com/images/P/postman-logo-F43375A2EB-seeklogo.com.png" height="70" alt="Postman_logo"  />

## Rodando o projeto na sua máquina:

1. Escolha um diretório e clone o repositório utilizando **git clone**:
```
  git clone git@github.com:AirelRibeiro/blogs-api.git
```

2. Acesse o diretório do projeto **blogs-api** e instale as dependências:
```
  cd blogs-api
  npm install
```

3. Então rode **npm start** para iniciar a aplicação:
```
  npm start
```

4. Por fim, acesse o projeto via navegador, usando a seguinte url:
```
  http://localhost:3000
```
