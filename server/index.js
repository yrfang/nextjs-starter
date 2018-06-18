const express = require('express');
const next = require('next');

const PORT = process.env.PORT || 3200;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: './', dev });
const handler = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('*', (req, res) => handler(req, res));

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on ${PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
