import Koa from 'koa';
import Router from '@koa/router';
import KoaLogger from 'koa-logger';

const app = new Koa();
const router = new Router();

// Log the requests of the server
app.use(KoaLogger());


const PORT = 3000;

router.get('/', (ctx, next) => {
  ctx.body = "Hello world!"
});

app.use(router.routes()).use(router.allowedMethods());


app.listen(PORT, () => {
  console.log(`Server listening in port ${PORT}`);
});
