// routes/insignias.js

const express = require('express');
const router = express.Router();
const Insignias = require('../models/insignias');

// Rota para buscar todas as insignias
router.get('/', async (req, res) => {
  try {
    const insignias = await Insignias.findAll();
    res.json(insignias);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

// Rota para buscar uma insignia específica pelo ID
router.get('/:id', async (req, res) => {
  try {
    const insignia = await Insignias.findByPk(req.params.id);
    if (insignia) {
      res.json(insignia);
    } else {
      res.status(404).json({ message: 'Insignia não encontrada' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

// Rota para criar uma nova insignia
router.post('/', async (req, res) => {
  try {
    const insignia = await Insignias.create(req.body);
    res.json(insignia);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

// Rota para atualizar uma insignia existente pelo ID
router.put('/:id', async (req, res) => {
  try {
    const insignia = await Insignias.findByPk(req.params.id);
    if (insignia) {
      await insignia.update(req.body);
      res.json(insignia);
    } else {
      res.status(404).json({ message: 'Insignia não encontrada' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

// Rota para excluir uma insignia pelo ID
router.delete('/:id', async (req, res) => {
  try {
    const insignia = await Insignias.findByPk(req.params.id);
    if (insignia) {
      await insignia.destroy();
      res.json({ message: 'Insignia excluída com sucesso' });
    } else {
      res.status(404).json({ message: 'Insignia não encontrada' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

module.exports = router;
