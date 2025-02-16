import express from 'express';
import  {PORT,connectDb}  from './config/db.js';
import { toDoRouter } from './router/route.js';
const app = express();
const port = PORT
const db = connectDb
db()

app.use(express.json())
app.use("/todo",toDoRouter)
app.listen(port, () => console.log(`Server running on port: http://localhost:${port}`));