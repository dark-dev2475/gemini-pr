import express from 'express';
import morgan from 'morgan';
import userRoutes from './routes/user.routes.js'; // Importing user routes
import connect from './db/db.js'; // Assuming db.js exports a connect function
import cookieParser from 'cookie-parser';
import cors from 'cors';
const app = express();


connect();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

app.use(express.urlencoded({ extended: true }));

app.use('/users',userRoutes);


app.get('/', (req, res) => {
    res.send('Hello World!');
});

export default app;