import { Router } from 'express';
import verifyToken from './middlewares/token';
import StackOverflowController from './controllers/StackOverflowController';
import SearchHistoryController from './controllers/SearchHistoryController';

const routes = Router();

routes.get('/', verifyToken, (req, res) => { return res.send(req.session.userId);})
routes.get('/search/:query', verifyToken, StackOverflowController.query)
routes.get('/searches/:id', verifyToken, SearchHistoryController.search);
routes.get('/searches', verifyToken, SearchHistoryController.index);

// GOOGLE AUTH
// routes.get("/auth/google", passportGoogle.authenticate("google", {
//     scope: ["profile", "email"]
// }), (req, res) => {
//     res.send(req.user);
// });
// routes.get(Config.google.callbackURL, passportGoogle.authenticate('google'), (req, res) => { 
//     res.redirect("/");
// });

routes.get("/auth/logout", (req, res) => {
    req.logout();
    res.send(req.user);
});

export default routes;