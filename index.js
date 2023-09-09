const express = require('express');
const app = express();
const port = 3000;
const customer = require('./data/customer.json')
const transaction = require('./data/transaction.json')
const promotion = require('./data/promotion.json')

app.get('/customer', (req, res) => {
  res.send(customer);
});
app.get('/transaction', (req, res) => {
  res.send(transaction);
});
app.get('/promotion', (req, res) => {
  res.send(promotion);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});