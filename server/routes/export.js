const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const { parse } = require('json2csv');

const endpoints = {
  orders: 'orders',
  customers: 'customers',
  products: 'products',
};

router.get('/export', async (req, res) => {
  const { shop, accessToken } = req.session;
  const type = req.query.type || 'orders';
  const apiType = endpoints[type] || 'orders';

  const url = `https://${shop}/admin/api/2023-10/${apiType}.json?limit=250`;
  const response = await fetch(url, {
    headers: { 'X-Shopify-Access-Token': accessToken }
  });
  const data = await response.json();

  // 自动获取全部字段
  const items = data[apiType];
  const allKeys = Array.from(new Set(items.flatMap(item => Object.keys(item))));
  const csv = parse(items, { fields: allKeys });

  res.header('Content-Type', 'text/csv');
  res.attachment(`${apiType}.csv`);
  res.send(csv);
});

module.exports = router;
