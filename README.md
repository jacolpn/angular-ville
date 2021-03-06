# Ville - Angular App Starter

## 1. Passos para começar

### Instalando as Dependências

`npm install`

### Inicializando o Servidor

`ng serve` ou `npm start`

## 2. Iniciando o Backend

### Instalando o json-server

`npm install -g json-server`

### Iniciando o serviço (raiz da aplicação)

`json-server db.json` (port 3000)
`tsc -w` - `(dentro da pasta backend)`
`node backend/server`
`nodemon --watch backend .\backend\dist\server.js` (lembrar de entrar no localhost 3000 e liberar acesso)

## Goodies

Expressões regulares usadas na validação de formulários

### Email Regex

`/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i`

### Number Regex

`/^[0-9]*$/`

## Instalações
`npm i nodemon -g`
`npm install jsonwebtoken`
`npm i --save-dev @types/node`
`choco install nodejs.install --version=8.9.4`
`choco install nodejs.install --version=10.0.0`
`npm i @angular/cli@6.0.0`

## Produção
`ng build --prod --extract-css=false` - Para criar um build sem problemas no css.

## Créditos

Todas as imagens usadas na aplicação são pertencentes a freepik.com
