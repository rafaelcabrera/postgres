const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'rafa',
    password: '1212',
    database: 'my_store'
  });
  await client.connect();
  return client;
}

module.exports = getConnection;