# NaTrave API


## Como rodar

Pré-requisitos
- npm / yarn
- Docker


1. Instale as dependências
> npm install

2. Inicie o servidor de banco de dados
> docker run -d --name natrave-postgres -e POSTGRESQL_PASSWORD=admin -e POSTGRESQL_USERNAME=admin -e POSTGRESQL_DATABASE=natrave -p 5432:5432 bitnami/postgresql:latest

3. Rode as migrations
> npm run migrate:dev

4. Inicie a aplicação 
> npm run dev

