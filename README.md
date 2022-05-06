
# IP SEM 6: ELITE SERVICES
Elite services is a platform where user can book services related to painting, plumbing etc. 


## MEMBERS

- 30 - AROMA SINHA
- 52 - PALLAVI VISHWAKARMA
- 57 - ANKIT YADAV
- 61 - RAHUL YADAV


## API Reference

app running on:

```
http://localhost/4000
```
#### Get all services

```http
   GET /api/services
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get particular service

```http
  GET /api/services/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of services to fetch |


#### Get all services
```http
   POST /api/service
```
## Documentation

#### Stripe API

https://stripe.com

Millions of businesses of all sizes—from startups to large enterprises—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.

#### PassportJs
https://www.passportjs.org/

Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.

#### Mongodb Atlas
```mongodb
MONGO_URI="Your connection string"
```
https://www.mongodb.com/docs/guides/cloud/connectionstring/
Documentation to connect your database with your nodejs project
## Run Locally

Clone the project

```bash
  git clone https://github.com/AromaSinha/elite.git
```

Go to the project directory

```bash
  cd eliteone
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  nodemon server
```
```server
   http://localhost:4000
```
