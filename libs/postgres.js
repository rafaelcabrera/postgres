const {Client} = require('pg')

async function getConnection(){
const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'rafa',
  password: '1212',
  database: 'my_store'

});

await client.connect(); // nos da una promesa como retorno. Necesito que sea asincorona por eso vuelvo async
return client;
}

module.exports = getConnection;