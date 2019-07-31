const express = require('express');
const mongoose = require('mongoose');
const requireDir = require("require-dir");
const cors = require('cors');
const dotenv = require('dotenv');

const myEnv = dotenv.config();

// Iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect(
    process.env.MONGO_URL, 
    { useNewUrlParser: true }
);

requireDir('./src/models');

// Rotas
app.use('/api', require("./src/routes"));

app.listen(3001);