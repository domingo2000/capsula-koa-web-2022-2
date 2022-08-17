import Koa from 'koa';
import Router from '@koa/router';

const app = new Koa();
const router = new Router();


const PORT = 3000;

router.get('/', (ctx, next) => {
  ctx.body = "Hello world!"
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`Server listening in port ${PORT}`);
});
