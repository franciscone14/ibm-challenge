import passport from 'passport'
import { Strategy } from 'passport-google-oauth20';
import Config from '../config/config';
import { User } from '../models/User';
import init from './init';
import { Router } from 'express';
import { GoogleAuth, OAuth2Client } from 'google-auth-library'
const client = new OAuth2Client(Config.google.clientID);

const google = Router();

google.post("/auth/google", async (req, res) => {
    const { token }  = req.body
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: Config.google.clientID
    });
    const payload = ticket.getPayload();    
    User.findOne({email: payload!.email}).then((currentUser) => {
        if(currentUser){
            res.json({
                token: init(currentUser._id)
            });
        } else{
            new User({
                name: payload!.name,
                email: payload!.email,
            }).save().then((newUser) => {
                res.status(201)
                res.json({
                    token: init(newUser._id)
                });
            });
        } 
    })
});

export default google;

// passport.use(new Strategy(
//     {
//         clientID: Config.google.clientID,
//         clientSecret: Config.google.clientSecret,
//         callbackURL: Config.google.callbackURL
//     },
//     (accessToken, refreshToken, profile, done) => {
//         // console.log(accessToken, refreshToken);
//         // passport callback function
//         //check if user already exists in our db with the given profile ID
//         User.findOne({googleId: profile.id}).then((currentUser)=>{
//             if(currentUser){
//                 //if we already have a record with the given profile ID
//                 done(null, currentUser);
//             } else{
//                 //if not, create a new user 
//                 new User({
//                     name: profile.displayName,
//                     googleId: profile.id,
//                 }).save().then((newUser) =>{
//                     done(null, newUser);
//                 });
//             } 
//         })
//       })
// );

// init();

// export default passport;

