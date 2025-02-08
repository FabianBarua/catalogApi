import { Router } from 'express';
import { createTodos, getTodos, updateTodos, deleteTodos } from '../controllers/todos';

// Old node way
// const express = require('express');
// const Router = express.Router;

const router = Router();


router.post('/', createTodos);

router.get('/', getTodos);

router.patch('/:id', updateTodos);

router.delete('/:id', deleteTodos);

export default router;