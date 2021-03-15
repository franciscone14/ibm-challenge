import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import session from 'express-session';
import routes from './routes';
import Cookie from 'cookie-session';
import Config from './config/config';

const app = express();

mongoose.connect('mongodb+srv://ibm-challenge-db-user:UGq94jsZBMHCPlAf@cluster0.pancd.mongodb.net/ibmChallenge?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// app.use(session({
//     secret: 'keyboard cat',
//     resave: true,
//     saveUninitialized: true
// }));

app.use(Cookie({
    // milliseconds of a day
    maxAge: 24*60*60*1000,
    keys:[Config.session.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(routes);

app.listen(3000);