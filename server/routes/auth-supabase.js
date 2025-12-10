const express = require('express');
const router = express.Router();
const supabase = require('../config/supabase');

router.post('/signup', async (req, res) => {
  try {
    const { email, password, nombre, telefono } = req.body;
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { nombre, telefono }
      }
    });
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

module.exports = router;
