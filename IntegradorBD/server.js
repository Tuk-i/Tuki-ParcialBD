require('dotenv').config();
const express = require('express');
const conectarDB = require('./src/config/db');

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 3000;

const start = async () => {
  await conectarDB();
  app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
};

start();