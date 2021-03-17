import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

// Application Modules
import routes from './routes';
import cors from 'cors';
import google from './auth/google';

const app = express();
dotenv.config();

mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cookieParser(process.env.SECRET));
app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true
}));

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(google);

app.listen(3000);