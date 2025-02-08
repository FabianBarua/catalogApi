"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_1 = require("../controllers/todos");
// Old node way
// const express = require('express');
// const Router = express.Router;
const router = (0, express_1.Router)();
router.post('/', todos_1.createTodos);
router.get('/', todos_1.getTodos);
router.patch('/:id', todos_1.updateTodos);
router.delete('/:id', todos_1.deleteTodos);
exports.default = router;
