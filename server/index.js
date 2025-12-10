const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth-supabase'));
app.use('/api/reservas', require('./routes/reservas'));
app.use('/api/torneos', require('./routes/torneos'));
app.use('/api/productos', require('./routes/productos'));
app.use('/api/nfc', require('./routes/nfc'));
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/config', require('./routes/config'));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
