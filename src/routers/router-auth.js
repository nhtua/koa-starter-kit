import Router from 'koa-router';
import jwt from 'jsonwebtoken';
import CONFIG from '../config';
import bcrypt from 'bcrypt';

const router = new Router();

router.post('/login', async (ctx, next) =>{
  const {username} = ctx.request.body;
  const user = {
    id: 1,
    username: 'john_doe',
    password: '$2a$10$TjZ4eIUYrxpF1IZ2zzU8Sel5BH6jFmdZey0L.Bmftw5apgd44hiHu', //123456
    email: 'john.doe@email.com',
    permission: 7,
    status: 1,
    updated_at: '2017-08-31 00:00:00',
    created_at: '2017-08-31 00:00:00'
  }; //I pretend this user was found from database

  const checkPwd = await bcrypt.compare( ctx.request.body.password, user.password );

  if ( checkPwd ) {
    const payload = {
      id: user.id,
      username: user.username,
      status: user.status,
      updated_at: user.updated_at
    };

    //Web need to include status + updated_at in to the secret 
    // Then we can automatically force user logout when their account was changed (block, change password, etc)
    const superSecret = CONFIG.JWT.secret + user.status + user.updated_at;
    const token = jwt.sign(payload, superSecret);
    delete user.password;
    ctx.body = {
      error: false,
      token: token,
      user: user,
      message: 'Logged in successfully!'
    }
  } else {
    ctx.body = {
      message: 'Login fail!'
    }
  }
  await next();
});


export default router;