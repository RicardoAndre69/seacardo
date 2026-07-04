const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));

app.use(express.json());

app.get('/health', (req, res) => {
  return res.json({ ok: true });
});

app.use('/auth', authRoutes);

module.exports = app;