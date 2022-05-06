
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

## Screenshots
#### HOME PAGE
![HOME PAGE](https://user-images.githubusercontent.com/73636017/167126854-175645b3-9de4-496c-865e-215cd60b9647.png)

#### SERVICE PAGE
![SERVICE PAGE](https://user-images.githubusercontent.com/73636017/167126908-6d3a7ba5-b967-4ae9-8649-03215f441f0d.png)

#### PARTICULAR SERVICE PAGE
![PSP](https://user-images.githubusercontent.com/73636017/167126946-1486219f-b29f-4177-be32-572fb2c655df.png)

#### CHECKOUT PAGE
![checkout](https://user-images.githubusercontent.com/73636017/167125699-427161bd-9608-4d7d-a80f-e488d3a62321.png)

#### ADMIN LOGIN PAGE
![ADMIN LOGIN](https://user-images.githubusercontent.com/73636017/167127218-ee2b8772-0de6-4856-a4ef-bb57d09e0d6b.png)

#### SERVICE DASHBOARD PAGE
![SERVICE_DASHBOARD](https://user-images.githubusercontent.com/73636017/167127363-fc7e6588-e7b9-4498-a7b8-e43fdeb5ccb6.png)

#### QUOTATION PAGE
![quote](https://user-images.githubusercontent.com/73636017/167127654-07d2f3b2-4c16-4be9-b7f3-bf32142b04db.png)


