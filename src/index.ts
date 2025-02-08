import express, {Request, Response, NextFunction} from 'express';
import todoRoutes from './routes/todos';
import { json } from 'body-parser';

const app = express();
app.use(json());  // registering this middleware for accepting json requests

app.use('/todos', todoRoutes); // All route must precees with this path

// default error handling middleware
app.use((err: Error, req: Request, res:Response, next: NextFunction) => {
    res.status(500).json({message: err.message});
});

app.listen(3000);

export default app;