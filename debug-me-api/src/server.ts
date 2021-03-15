import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import routes from './routes';
import Cookie from 'cookie-session';
import Config from './config/config';
// import { config } from 'dotenv-safe';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import google from './auth/google';

// config();
const app = express();

mongoose.connect('mongodb+srv://ibm-challenge-db-user:UGq94jsZBMHCPlAf@cluster0.pancd.mongodb.net/ibmChallenge?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// app.use(session({
//     cookie: {
//       path    : '/',
//       httpOnly: false,
//       maxAge  : 24*60*60*1000
//     },
//     secret: '1234567890QWERT',
//     resave: true
// }));
app.use(cookieParser('MY_SECRET'));

app.use(session({
    secret: 'MY_SECRET',
    resave: true,
    saveUninitialized: true
}));

// app.use(Cookie({
//     // milliseconds of a day
//     maxAge: 24*60*60*1000,
//     keys:[Config.session.cookieKey]
// }));

// app.use(session);
// app.use(cookie());

app.use(cors());
// app.use(passport.initialize());
// app.use(passport.session());

app.use(express.json());
app.use(routes);
app.use(google);

app.listen(3000);