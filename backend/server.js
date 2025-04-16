// backend/server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config(); // Para cargar variables de entorno

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // Para parsear el body de las solicitudes

// Conectar a la base de datos (asegúrate de tener tu URL de MongoDB en .env)
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Rutas básicas de ejemplo
app.get('/', (req, res) => {
  res.send('Bienvenido a la intranet');
});

// Iniciar el servidor
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
