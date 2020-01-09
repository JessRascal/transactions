import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send(`This is a route`);
})

app.listen(3000, () => {
  console.log('API listening on port 3000');
});
