import { RequestHandler, response } from 'express';
import { Todo } from '../models/todos';

const TODOS: Todo[] = [];

export const createTodos:RequestHandler = (req, res, next) => {

    const text = (req.body as { text:string } ).text; // making it string type
    // const text = req.body.text; //typeScript is not allowing any type
    const id = Math.random().toString();

    const newTodo = new Todo(id, text);
    TODOS.push(newTodo);

    res.json({message: 'Todo created successfully', createdTodo: newTodo});
};

export const getTodos:RequestHandler = (req, res, next) => {
    res.status(200).json({"todos": TODOS});
};

export const updateTodos: RequestHandler<{id: string}> = (req, res, next) => {
    const todoId = req.params.id;
    const updatedText = (req.body as { text:string }).text; 
    const todoIndex = TODOS.findIndex(x => x.id === todoId);
    
    if(todoIndex < 0) {
        throw new Error('Could not find todo!');
    }

    TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText);


    res.status(201).json({message: 'Todo updated successfully', updateTodo:  TODOS[todoIndex]});

};

export const deleteTodos: RequestHandler<{id: string}> = (req, res, next) => {
    const todoId = req.params.id;
    const todoIndex = TODOS.findIndex(x => x.id === todoId);

    if(todoIndex < 0) {
        throw new Error('Could not find todo!');
    }
    console.log( TODOS[todoIndex].text, typeof todoIndex );
   const deletedData = {id: TODOS[todoIndex].id, text: TODOS[todoIndex].text};
    
    TODOS.splice(todoIndex, 1);
    res.status(201).json({message: `${deletedData.id}: ${deletedData.text} deleted successfully`})
       
}


