import Koa from 'koa';
const app = new Koa();

const PORT = 3000;

// response
app.use(ctx => {
  ctx.body = 'Hello Koa!';
});

app.listen(PORT, () => {
  console.log(`Server listening in port ${PORT}`);
});