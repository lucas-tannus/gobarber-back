# Gobarber Backend

O desenvolvimento dessa aplicação foi feita seguindo o Bootcamp 9 da Rocketseat.

> O gobarber é um software de agendamento de serviço de beleza.

Foi desenvolvida uma API Rest como backend da aplicação.

## Pré-requisitos

 - NodeJS
 - Yarn/Npm
 - Redis
 - Instância Mongo
 - Instância Postgre
 - Docker

## Instalação

Para a criação dos containers que irão subir os bancos devemos rodar os seguintes comandos:

1. Redis container

```
	docker run --name <your-container-name> -p 6379:6379 -d -t redis:alpine

```
2. MongoDB container

```
	docker run --name <your-container-name> -p 27017:27017 -d -t mongo

```
3. Postgre container

```
	docker run --name <your-container-name> -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres

```


Instalando com o Yarn:
```
	yarn install
```

Instalando com o Npm:
```
	npm install
```

### Rodando a aplicação em DEV

Com yarn:
```
	yarn dev
```

Com npm:
```
	npm run dev
```
