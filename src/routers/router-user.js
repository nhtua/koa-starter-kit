import Router from 'koa-router';
import jwtVerify from '../middlewares/jwt-verify';
import faker from 'faker';

//ALL data here is faked by Faker.js 4.1

const router = new Router();

router.get('/user', jwtVerify, async (ctx, next)=> {
  const users = [];
  for(let i = 0; i < 20; i++) {
    users.push({
      id: faker.random.number(),
      username: faker.name.findName().toLowerCase().replace(/\s/g, '_'),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      updated_at: faker.date.past()
    });
  }
  ctx.body = users;
  await next();
});

router.get('/user/:id', jwtVerify, async (ctx, next)=> {
  const {id} = ctx.params;
  const user = {
    id: id,
    username: faker.name.findName().toLowerCase().replace(/\s/g, '_'),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    updated_at: faker.date.past()
  };

  ctx.body = user;
  await next();
});

export default router;