import { User } from '../models/User';
import init from './init';
import { Router } from 'express';
import { OAuth2Client } from 'google-auth-library'
const client = new OAuth2Client(process.env.CLIENT_ID);

const google = Router();

google.post("/auth/google", async (req, res) => {
    const { token }  = req.body
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID
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