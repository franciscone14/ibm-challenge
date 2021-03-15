import passport from 'passport'
import { Strategy } from 'passport-google-oauth20';
import Config from '../config/config';
import { User } from '../models/User';
import init from './init';

passport.use(new Strategy(
    {
        clientID: Config.google.clientID,
        clientSecret: Config.google.clientSecret,
        callbackURL: Config.google.callbackURL
    },
    (accessToken, refreshToken, profile, done) => {
        // console.log(accessToken, refreshToken);
        // passport callback function
        //check if user already exists in our db with the given profile ID
        User.findOne({googleId: profile.id}).then((currentUser)=>{
            if(currentUser){
                //if we already have a record with the given profile ID
                done(null, currentUser);
            } else{
                //if not, create a new user 
                new User({
                    name: profile.displayName,
                    googleId: profile.id,
                }).save().then((newUser) =>{
                    done(null, newUser);
                });
            } 
        })
      })
);

init();

export default passport;

