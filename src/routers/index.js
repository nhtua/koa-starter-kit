import compose from 'koa-compose';
import routerAuth from './router-auth';
import routerUser from './router-user';

//We need to convert list of separated route in to the one
let routers = [
  routerAuth,
  routerUser
];

//So we extract the middelware from router
let middleware = [];
routers.forEach((router) => {
  middleware.push(router.routes())
  middleware.push(router.allowedMethods())
});

//Then put them into one router. Magic here! 
export default compose(middleware);
