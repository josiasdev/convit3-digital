<div align="center" style="display: flex; justify-content: center; align-items: center;">
  <img src="./apps/front-end/public/logo.svg" alt="Logo" style="width: 50px; height: 50px; margin-right: 10px;">
  <h1 style="font-weight: bold; margin: 0;">Convit3 Digital</h1>
</div>

<p align="center">
    <b>Convit3 Digital é uma plataforma para criar e gerenciar eventos digitais, permitindo acompanhar a confirmação de presença dos participantes, visualizar quem confirmou ou recusou o convite, e organizar todos os detalhes em um só lugar.</b>
</p>

---

## Tecnologias <img src="./iconesREADME/tecnologia.png" alt="Logo Tecnologia" style="width: 50px; height: 50px; margin-left: 10px;">
---

### Front-end
- **React.js** <img src="./iconesREADME/react.svg" alt="React.js" style="width: 30px; height: 30px; margin-left: 10px;">
- **Next.js** <img src="./iconesREADME/nextjs.png" alt="Next.js" style="width: 30px; height: 30px; margin-left: 10px;">
- **TypeScript** <img src="./iconesREADME/typescript.png" alt="TypeScript" style="width: 30px; height: 30px; margin-left: 10px;">
- **Tailwind CSS** <img src="./iconesREADME/tailwindcss.png" alt="Tailwind CSS" style="width: 30px; height: 30px; margin-left: 10px;">

---

### Back-end
- **Nest.js** <img src="./iconesREADME/nestjs.svg" alt="Nest.js" style="width: 50px; height: 50px;">

---

### Banco de Dados Relacional <img src="./iconesREADME/bd.png" alt="Banco de Dados" style="width: 50px; height: 50px; margin-left: 10px;">

- **SqLite** <img src="./iconesREADME/sql lite.jpeg" alt="Sq Lite" style="width: 50px; height: 50px; margin-left: 10px;">

- **PostgreSQL** <img src="./iconesREADME/postgresql.png" alt="PostgreSQL" style="width: 30px; height: 30px; margin-left: 10px;">

---
## Instalar pacotes

### 1. Entrar na pasta do projeto
```bash
cd apps/front-end/
```
### 2. Instalar React e React-dom caso tenha acontecido algum problema na hora de executar.
```bash
npm install react@latest react-dom@latest
```

### 3. Atualizar o Next.js caso tenha acontecido algum problema na hora de executar.
```bash
npm install next@latest
```

### 3. React Qr-Code
```bash
npm i react-qr-code
```

### 4. Instalar Nest.JS
```
npm i -g @nestjs/cli
```

### 5. Instalar o NPM-RUN-ALL:
```
npm i npm-run-all
```
### 6. Instalar o tsup:
```
npm i -D tsup
```

### 7. Instalar o UUID (id único):
```
npm i uuid
```

### 8. Instalar o Types/uuid:
```
npm i -D @types/uuid
```

### 9. Prisma Orm:

### 9.1 Entrar na pasta do back-end:
```
cd apps/back-end
```

### 9.2 Instalar o prisma orm:
```
npm install prisma --save-dev
```

### 9.3 Iniciar o prisma e seta banco de dados SqlLite:
```
npx prisma init --datasource-provider sqlite
```

### 9.4 Criando Prisma Client:
```
npx prisma migrate dev
```

## Nest:

### Gerando um modulo usando Nest:
```
nest generate module eventos
```

### Gerando um Controller:
```
nest generate controller eventos --flat --no-spec
```


## Como executar o projeto usando o NPM-RUN-ALL:

### 1. Executando o projeto:
```
npm run dev
```