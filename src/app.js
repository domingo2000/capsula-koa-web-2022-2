import Koa from 'koa';
import KoaLogger from 'koa-logger';
import koaBody from 'koa-body';
import router from './router.js';

const app = new Koa();

// Main Parameters of the app
const PORT = 3000;

// Log the requests of the server
app.use(KoaLogger());

// Parse the request body
app.use(koaBody())

app.use(router.routes()).use(router.allowedMethods());


app.listen(PORT, () => {
  console.log(`Server listening in port ${PORT}`);
});
