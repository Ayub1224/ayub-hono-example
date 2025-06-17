// import { Hono } from 'hono';
// const app = new Hono();
// app.get('/', (resp) => resp.text('hello There !!!'));
// export const handler = app.fetch;



import {Hono} from 'hono';
const app = new Hono();

app.get('/', (resp) => resp.text('welcome'));

app.post('/params', async (c) => {
  const params = c.req.query();
  return c.json({
    message: 'Received parameters',
    params: params
  });
});


export const handler = app.fetch;