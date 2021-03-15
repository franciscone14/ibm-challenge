import { Router } from 'express';
import Config from './config/config';

import passportGoogle from './auth/google';

const routes = Router();

routes.get('/', (req, res) => { return res.send("Test");})

// GOOGLE AUTH
routes.get("/auth/google", passportGoogle.authenticate("google", {
    scope: ["profile", "email"]
}));
routes.get(Config.google.callbackURL, passportGoogle.authenticate('google'), (req, res) => {
    res.send(req.session);
});

export default routes;