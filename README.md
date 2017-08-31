# Koa Starter Kit
For Babel Sarter-Kit, please see [Babel/Node Server Example](https://github.com/babel/example-node-server).

Koa Starter Kit (KSK) is a basic setup template for the quick starting with Koa2. It was written in ES6 with a little messily primitive Javascript syntax that helps you get started building NodeJS API easier than ever.

KSK includes some lovely common setup:

- [x] `src` structure based-on Javascript modules
- [x] Auto reload in the dev time
- [x] Build production with Babel
- [x] Routing
- [x] Middlewares using
- [ ] Authentication with JSON Web Token 
- [ ] Authorization with built-in solution

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
