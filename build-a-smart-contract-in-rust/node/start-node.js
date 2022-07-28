import express from 'express';

const loc = p => new URL(p, import.meta.url).pathname;
const app = express();
const PORT = 3031;

app.use(express.json());
app.use(express.static(loc('client')));
// app.use(express.static(loc('data')));
console.debug(loc('.'));
app.use(express.static(loc('.')));

app.get('/', (req, res) => {
  const client = loc('client/index.html');
  res.sendFile(client);
});

app.listen(PORT, () => {
  console.info(`Server started on port ${PORT}`);
});
