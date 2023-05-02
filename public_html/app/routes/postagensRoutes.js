const express = require('express');
const router = express.Router();
const postagemController = require('../controllers/postagemController');

// Retorna todas as postagens
router.get('/', postagemController.getPostagens);

// Retorna uma postagem pelo id
router.get('/:id', postagemController.getPostagemById);

// Cria uma nova postagem
router.post('/', postagemController.createPostagem);

// Atualiza uma postagem pelo id
router.put('/:id', postagemController.updatePostagem);

// Deleta uma postagem pelo id
router.delete('/:id', postagemController.deletePostagem);

module.exports = router;
