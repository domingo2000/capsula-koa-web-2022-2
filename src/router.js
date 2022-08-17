import Router from '@koa/router';
const router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = "Hello world!";
});

router.post('root', '/', (ctx, next) => {
  const message = ctx.request.body.message;
  ctx.body = `Your message is: ${message}`;
});

export default router;
