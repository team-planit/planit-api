const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
import mongoose from 'mongoose'
import Key from './key'
const Auth = mongoose.model('auth');



const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = Key.secretOrKey;

module.exports = (passport) => {
	passport.use(
		new JwtStrategy(opts, (jwt_payload, done) => {
            Auth.findById(jwt_payload.id)
            .then(user =>{
                if(user){
                    return done(null, user);
                }
                return done(null, false)
            })
            .catch(err => console.log(err))
		})
	);
};