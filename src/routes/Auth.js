import express from 'express'
import gravatar from 'gravatar'
import bcrypt from 'bcryptjs'
import pasport from 'passport'
import jwt from 'jsonwebtoken'
import Key from '../config/key'
import Auth from '../model/Auth'

const router = express.Router()
// Load Input Validation
// const validateRegisterInput = require('../../validation/register');
// const validateLoginInput = require('../../validation/login');
// // @route GET api/auth/test
// @desc TESTS AUTH ROUTE
// @access Public
router.get('/test', (req, res) => {
    res.json({
        msg: "Auth Works"
    })
});

// // @route GET api/auth/register
// // @desc Register User
// // @access Public
// router.post('/register', (req, res) => {
//     const {
//         errors,
//         isValid
//     } = validateRegisterInput(req.body);

//     //check Validation
//     if(!isValid){
//         return res.status(400).json(errors);
//     }
//     Auth.findOne({
//             email: req.body.email
//         })
//         .then(user => {
//             if (user) {
//                 errors.email = 'Email already exists'
//                 return res.status(400).json({
//                     errors
//                 })
//             } else {
//                 const avatar = gravatar.url(req.body.email, {
//                     s: '200', // size
//                     r: 'pg', // rating
//                     d: 'mm', // Default
//                 });

//                 const newUser = new Auth({
//                     name: req.body.name,
//                     email: req.body.email,
//                     avatar,
//                     password: req.body.password
//                 });

//                 bcrypt.genSalt(10, (err, salt) => {
//                     bcrypt.hash(newUser.password, salt, (err, hash) => {
//                         if (err) throw err;
//                         newUser.password = hash;
//                         newUser
//                             .save()
//                             .then(user => res.json(user))
//                             .catch(err => console.log(err));
//                     })
//                 })
//             }
//         })
// });

// // @route GET api/auth/login
// // @desc Login User / Returning JWT Token
// // @access Public

// router.post('/login', (req, res) => {
//     const {
//         errors,
//         isValid
//     } = validateLoginInput(req.body);

//     //check Validation
//     if (!isValid) {
//         return res.status(400).json(errors);
//     }

//     const email = req.body.email;
//     const password = req.body.password;

//     //find user email
//     Auth.findOne({
//             email
//         })
//         .then(user => {
//             //check for User
//             if (!user) {
//                 errors.email = 'User not Found'
//                 return res.status(404).json(errors);
//             }

//             //check Password
//             bcrypt.compare(password, user.password)
//                 .then(isMatch => {
//                     if (isMatch) {
//                         //User Matched
//                         const payload = {
//                             // Creates JWT Payload
//                             id: user.id,
//                             name: user.name,
//                             avatar: user.avatar
//                         }
//                         // Sign Token
//                         jwt.sign(payload, keys.secretOrKey, {
//                             expiresIn: 3600
//                         }, (err, token) => {
//                             res.json({
//                                 success: true,
//                                 token: `Bearer ${token}`
//                             })
//                         });
//                     } else {
//                         errors.password = 'Password incorrect'
//                         return res.status(400).json(errors);
//                     }
//                 })


//         })
// })

// // @route GET api/auth/current
// // @desc Current User
// // @access Private
// router.get('/current', passport.authenticate('jwt', {session: false}), (req,res) => {
//     res.json({
//         id: req.user.id,
//         name: req.user.name,
//         email: req.user.email
//     })
// });

module.exports = router;