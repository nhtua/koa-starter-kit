import jwt from 'jsonwebtoken';
import CONFIG from '../config';
import dateFns from 'date-fns';

async function verify(ctx, next){
    if (!ctx.header || !ctx.header.authorization) {
      ctx.throw(401,'Authentication Error');
    }

    const parts = ctx.request.header.authorization.split(' ');
    if (parts.length === 2) {
        const scheme = parts[0];
        const credentials = parts[1];

        if (/^Bearer$/i.test(scheme)) {
          
          //cerf (cerfiticate) contains payload decoded data
          const cerf = jwt.decode(credentials);
          
          //we NEED to get user data from either DB or REDIS to check that he still has the access right
          //USER data should be cached in REDIS, then it doesn't affect perfomance too much.
          //We also need to delete the cache every time we change user account
          const user = {
            id: 1,
            username: 'john_doe',
            password: '$2a$10$TjZ4eIUYrxpF1IZ2zzU8Sel5BH6jFmdZey0L.Bmftw5apgd44hiHu', //123456
            email: 'john.doe@email.com',
            permission: 7,
            status: 1,
            updated_at: '2017-08-31 00:00:00',
            created_at: '2017-08-31 00:00:00'
          }; //I pretend this user was found from database by getUser(cerf.id);

          const superSecret = CONFIG.JWT.secret + user.status + user.updated_at;
          try {
            const trustedData = jwt.verify(credentials, superSecret);
            ctx.state = { user: trustedData };
          } catch (err) {
            ctx.throw(401,'Authentication Error');
          }
          
        }
    } else {
        ctx.throw(401, 'Bad Authorization header format. Format is "Authorization: Bearer <token>"');
    }
    await next();
}

export default verify;