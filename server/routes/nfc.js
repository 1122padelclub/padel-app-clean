const express = require('express');
const router = express.Router();
const supabase = require('../config/supabase');

router.get('/user/:uid', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('nfc_uid', req.params.uid)
      .single();
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.post('/add-points', async (req, res) => {
  try {
    const { nfc_uid, puntos, descripcion } = req.body;
    const { data: user } = await supabase
      .from('users')
      .select('*')
      .eq('nfc_uid', nfc_uid)
      .single();
    
    if (!user) throw new Error('Usuario no encontrado');
    
    const nuevosPuntos = (user.puntos || 0) + puntos;
    const { data, error } = await supabase
      .from('users')
      .update({ puntos: nuevosPuntos })
      .eq('id', user.id)
      .select()
      .single();
    
    if (error) throw error;
    
    // Registrar transacción
    await supabase.from('punto_transacciones').insert({
      usuario_id: user.id,
      puntos: puntos,
      descripcion: descripcion || 'Puntos agregados',
      tipo: 'acreditacion'
    });
    
    res.json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
