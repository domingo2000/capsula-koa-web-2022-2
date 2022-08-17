import Koa from 'koa';
import Router from '@koa/router';
import KoaLogger from 'koa-logger';
import koaBody from 'koa-body';

const app = new Koa();
const router = new Router();

// Log the requests of the server
app.use(KoaLogger());

// Parse the request body
app.use(koaBody())


const PORT = 3000;

router.get('/', (ctx, next) => {
  ctx.body = "Hello world!"
});


router.post('root', '/', (ctx, next) => {
  const message = ctx.request.body.message;
  ctx.body = `Your message is: ${message}`;
})

app.use(router.routes()).use(router.allowedMethods());


app.listen(PORT, () => {
  console.log(`Server listening in port ${PORT}`);
});
