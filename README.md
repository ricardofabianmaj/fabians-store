
# 🛒 Fabians Store

[PT-BR] (English version below)

Seja muito bem-vindo ao **Fabians Store**, um sistema completo de **gestão de produtos** desenvolvido com **React + TailwindCSS** no frontend e **Spring Boot com Java** no backend. Os dados são armazenados de forma persistente usando **PostgreSQL**. A aplicação permite visualizar, adicionar, editar e remover produtos com segurança e eficiência.

---

## 🎯 Objetivo

O **Fabians Store** permite que o usuário:

- ✅ Visualize os produtos cadastrados
- ✅ Adicione novos produtos
- ✅ Atualize informações dos produtos existentes
- ✅ Delete produtos do banco de dados
- ✅ Faça todas as operações com segurança através de uma API estruturada com Spring Boot (padrão MVC)
- ✅ Tenha persistência dos dados com PostgreSQL

---

## 🛠️ Tecnologias Utilizadas

### 💻 Frontend

- ReactJS  
- TypeScript  
- TailwindCSS  
- Axios  

### 🔧 Backend

- Java 17  
- Spring Boot  
- Spring MVC  
- Spring Data JPA  
- PostgreSQL  
- Lombok  

---

## 🚀 Como Executar o Projeto Localmente

### 📦 Pré-requisitos

- Node.js  
- PostgreSQL  
- Java 17+  
- Maven  

### 🧭 Passos

#### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/fabians-store.git
```

#### 2. Crie o banco de dados

No PostgreSQL, crie um banco com o nome:

```sql
CREATE DATABASE fabians_store;
```

#### 3. Configure o backend

No arquivo `src/main/resources/application.properties`, insira suas credenciais do PostgreSQL:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/fabians_store
spring.datasource.username=seu_usuario
spring.datasource.password=sua_senha
spring.jpa.hibernate.ddl-auto=update
```

#### 4. Execute o backend

```bash
./mvnw spring-boot:run
```

O backend estará disponível em:  
📍 `http://localhost:8080`

#### 5. Execute o frontend

Em outro terminal:

```bash
cd fabians-store-frontend
npm install
npm start
```

O frontend estará disponível em:  
📍 `http://localhost:3000`

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT.  
Consulte o arquivo `LICENSE` para mais informações.

---

## 👨‍💻 Autor

Desenvolvido por **Ricardo Fabian**  
Soldado do Exército Brasileiro | Desenvolvedor Fullstack | Estudante de Tecnologia e Programação  

🔗 GitHub: [ricardofabianmaj](https://github.com/ricardofabianmaj)

🧠 “Você nunca fará nada neste mundo sem coragem” - Aristóteles

---

## 🌐 [EN-US] Fabians Store

Welcome to **Fabians Store**, a complete **product management system** built with **React + TailwindCSS** on the frontend and **Spring Boot with Java** on the backend. All data is stored persistently using **PostgreSQL**.

---

### 🎯 Objective

The **Fabians Store** allows users to:

- ✅ View all registered products  
- ✅ Add new products  
- ✅ Update existing product information  
- ✅ Delete products from the database  
- ✅ Use a secure, structured API built with Spring Boot (MVC pattern)  
- ✅ Persist all data using PostgreSQL  

---

### 🛠️ Technologies Used

#### 💻 Frontend

- ReactJS  
- TypeScript  
- TailwindCSS  
- Axios  

#### 🔧 Backend

- Java 17  
- Spring Boot  
- Spring MVC  
- Spring Data JPA  
- PostgreSQL  
- Lombok  

---

### 🚀 How to Run the Project Locally

#### 📦 Prerequisites

- Node.js  
- PostgreSQL  
- Java 17+  
- Maven  

#### 🧭 Steps

##### 1. Clone the repository

```bash
git clone https://github.com/your-username/fabians-store.git
```

##### 2. Create the PostgreSQL database

```sql
CREATE DATABASE fabians_store;
```

##### 3. Configure backend database credentials

Edit `src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/fabians_store
spring.datasource.username=your_user
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
```

##### 4. Run the backend

```bash
./mvnw spring-boot:run
```

Backend will run at:  
📍 `http://localhost:8080`

##### 5. Run the frontend

In another terminal:

```bash
cd fabians-store-frontend
npm install
npm start
```

Frontend will run at:  
📍 `http://localhost:3000`

---

### 📄 License

This project is licensed under the MIT License.  
See the `LICENSE` file for more details.

---

### 👨‍💻 Author

Developed by **Ricardo Fabian**  
Brazilian Army Soldier | Fullstack Developer | Technology and Programming Student  

🔗 GitHub: [ricardofabianmaj](https://github.com/ricardofabianmaj)

🧠 “You will never accomplish anything in this world without courage.” -  Aristoteles
