const connection = require('./db-connection');

async function setupConnection() {
  try {
    await connection.authenticate();
    console.log('Successful connection!');
    connection.close();
  } catch (err) {
    console.error('Error on connection.authenticate():', err);
  }
}

setupConnection();
