# Store Rating Platform

A full-stack Store Rating Platform developed using Spring Boot, PostgreSQL, and ReactJS.

## Tech Stack

### Backend

* Java
* Spring Boot
* Spring Data JPA
* Spring Security
* PostgreSQL

### Frontend

* ReactJS
* Axios
* HTML
* CSS

## Features

### User

* User Registration
* User Login
* View All Stores
* Search Stores
* Submit Ratings
* View Ratings

### Admin

* View All Users
* Add New Users
* View All Stores
* Add New Stores
* Dashboard Management

### Store Owner

* View Store Ratings

## Project Structure

```text
Roxiler
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
└── storerating
    ├── src
    ├── pom.xml
    └── application.properties
```

## Database

PostgreSQL is used as the database.

### Tables

* users
* store
* rating

## API Endpoints

### Authentication

```http
POST /auth/register
POST /auth/login
```

### Admin

```http
GET /admin/users
POST /admin/add-user

GET /admin/stores
POST /admin/add-store
```

### Stores

```http
GET /stores
GET /stores/search/name
GET /stores/search/address
```

### User

```http
GET /user/stores
POST /user/rating
GET /user/ratings
```

### Store Owner

```http
GET /owner/ratings
```

## How to Run

### Backend

```bash
cd storerating
mvn spring-boot:run
```

Backend runs on:

```text
http://localhost:8080
```

### Frontend

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

## GitHub Repository

Repository Link:

https://github.com/abhiraje01/roxiler_coding_challenge

## Author

Abhiraje Nimbalkar
