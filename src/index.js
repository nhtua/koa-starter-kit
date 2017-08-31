import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import routers from './routers';
import CONFIG from  './config';
import whiteListOrigin from './middlewares/white-list-origin';

const app = new Koa();
app
  .use(whiteListOrigin)
  .use(bodyParser({
    enableTypes: ['json'],
    extendTypes: ['application/json'],
    onerror: function (err, ctx) {
      ctx.throw('Body parse error', 422);
    }
  }))
  .use(routers)

app.listen(CONFIG.APP.port, CONFIG.APP.host);
console.log(`API Server started at http://${CONFIG.APP.host}:${CONFIG.APP.port}`);