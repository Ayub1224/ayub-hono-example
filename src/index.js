import { Hono } from 'hono';
const app = new Hono();
app.get('/', (resp) => resp.text('hello There !!!'));
export const handler = app.fetch;