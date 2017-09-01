# Koa Starter Kit

Koa Starter Kit (KSK) is a basic boilerplate for the quick starting with Koa2. It was written in ES6 with a little messily primitive Javascript syntax that helps you get started building NodeJS API easier than ever.

KSK includes some lovely common setup:

- [x] `src` structure based-on Javascript modules
- [x] Watching file changes then reload the server
- [x] Build production with Babel
- [x] Routing, multi routers
- [x] Middlewares
- [x] Authentication with JSON Web Token 
- [ ] Authorization with built-in solution
- [x] CORS accepts request from domain white list

want more? Folk and submit your regular tasks.

### Requirement
KSK requires Node >= 7.6 or higher.

### Getting Started
First we'll clone source code from [GitHub Repo](https://github.com/nhtua/koa-starter-kit.git)

```shell
  git clone https://github.com/nhtua/koa-starter-kit.git
```

Then we need to install the dependencies

```shell
cd koa-starter-kit
npm install
```

Finally, run the serve

```shell
npm start
```

### Dev's shortcuts
There are npm commands for dev's stuff.

- Run the server during the development
```shell
npm start
```

- Build and transpile code into Javascript for production
```shell
npm run build
```

- Run server as production (run the Js transpiled code)
```shell
npm run serve
```

- Do the UnitTest
```shell
npm run test
```

### The REST Api
KSK has three api endpoints for demonstration purpose.

You need to setup domains white list before you can use any api endpoints in React, Angular or Vuejs application.
You'll find the white list at: `src/config/index.js` (someone please help me turn the config file into multi enviroments config!)

#### /auth
Login to get the jwt token.

- request config:
  + Method: POST
  + Header: 
  ```plain-text
  Content-Type : application/json
  ```

- input: JSON as Raw body
  ```json
  {
    "username": "john_doe",
    "password": "123456"
  }
  ```

- output:
```json
{
    "error": false,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJqb2huX2RvZSIsInN0YXR1cyI6MSwidXBkYXRlZF9hdCI6IjIwMTctMDgtMzEgMDA6MDA6MDAiLCJpYXQiOjE1MDQyMDA2Mzd9.lVRnRCNB7-5zeq_DKtw0jzn_reTCKK5sYC3csIo-Je4",
    "user": {
        "id": 1,
        "username": "john_doe",
        "password": "$2a$10$TjZ4eIUYrxpF1IZ2zzU8Sel5BH6jFmdZey0L.Bmftw5apgd44hiHu",
        "email": "john.doe@email.com",
        "permission": 7,
        "status": 1,
        "updated_at": "2017-08-31 00:00:00",
        "created_at": "2017-08-31 00:00:00"
    },
    "message": "Logged in successfully!"
}
```

#### /user
Get user list

- request config:
  + Method: GET
  + Header: 
  ```plain-text
  Content-Type : application/json
  Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJqb2huX2RvZSIsInN0YXR1cyI6MSwidXBkYXRlZF9hdCI6IjIwMTctMDgtMzEgMDA6MDA6MDAiLCJpYXQiOjE1MDQyMDA2Mzd9.lVRnRCNB7-5zeq_DKtw0jzn_reTCKK5sYC3csIo-Je4
  ```

- input: NONE

- output:
```json
[
    {
        "id": 80978,
        "username": "neal_carter",
        "email": "Zaria.Batz49@gmail.com",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/vytautas_a/128.jpg",
        "updated_at": "2017-04-04T07:00:50.812Z"
    },
    {
        "id": 68624,
        "username": "meta_pollich",
        "email": "Rylee.Casper67@yahoo.com",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bereto/128.jpg",
        "updated_at": "2016-11-02T15:54:55.781Z"
    },
    ...
]
```

#### /user/:id
Get specific user info (/user/2 ~ get user info who has id = 2)

- request config:
  + Method: GET
  + Header: 
  ```plain-text
  Content-Type : application/json
  Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJqb2huX2RvZSIsInN0YXR1cyI6MSwidXBkYXRlZF9hdCI6IjIwMTctMDgtMzEgMDA6MDA6MDAiLCJpYXQiOjE1MDQyMDA2Mzd9.lVRnRCNB7-5zeq_DKtw0jzn_reTCKK5sYC3csIo-Je4
  ```

- input: NONE

- output:
```json
{
    "id": "2",
    "username": "davon_corwin",
    "email": "Maurine.Koepp79@yahoo.com",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/areandacom/128.jpg",
    "updated_at": "2016-11-24T13:29:42.484Z"
}
```