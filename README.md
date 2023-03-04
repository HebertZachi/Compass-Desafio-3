# Compass-Desafio-3
Esse é um repositório com o desafio 3 da programa de bolsa natura


# Compass-API
API com NEST - Operações de CRUD, Login e Query Events

<a href="./LICENSE.md"><img src="https://img.shields.io/badge/license-MIT-blue.svg"></a>

<img src="https://s3.amazonaws.com/gupy5/production/companies/417/career/35254/images/2021-11-05_19-02_logo.png" alt="img" align="right" width="150px">

## Description

Compass API é uma aplicação backend construída durante a semana do 3° Desafio do programa de bolsas Compass UOL/Natura Node.js

A aplicação consiste em realizar operações de CRUD, autenticação de login e Query de Eventos, onde os dados são coletados através de ferramentas como Postman ou Insomnia, e depois são armazenados em um banco de dados.

## Technologies

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=flat&logo=insomnia&logoColor=5849BE) 
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=postman&logoColor=white)

# Starting

## Clone
    git clone https://github.com/HebertZachi/Compass-Desafio3.git

# Requirements

[Node.js](https://nodejs.org/en/)
<br>

## Dependencies Installation with NPM
    npm install

## Start Server
    npm run start:prod

Agora que o ambiente está funcionando é possível enviar requisições ao servidor através do [Insomnia](https://insomnia.rest/download) ou [Postman](https://www.postman.com/)

## Routes

1. Users Routes<br>

   - GET http://localhost:3333/api/v1/users/
   - POST http://localhost:3333/api/v1/users/signup
   - POST http://localhost:3333/api/v1/users/signin
   - GET http://localhost:3333/api/v1/users/:id
   - PATCH http://localhost:3333/api/v1/users/:id
   - DELETE http://localhost:3333/api/v1/users/:id


2. Events Routes<br>

   - GET http://localhost:3333/api/v1/events/
   - POST http://localhost:3333/api/v1/events/
   - GET http://localhost:3333/api/v1/events/:id
   - PUT http://localhost:3333/api/v1/events/:id
   - DELETE http://localhost:3333/api/v1/events/:id
   

## JSON Template App

### 1. Users Template
    {
      "name": "hebert",
      "email": "hebert2@gmail.com",
      "password": "12345678"
    } 

### 2. Events Template

    {
      "description": "Descrição do evento",
      "userId": "5",
      "location": "Brazil",
      "latitude": -29.584227,
      "longitude": -51.091068,
    }       
