import '@babel/polyfill';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import passport from 'passport';
import cors from 'cors';
import Key from './config/key';
import routes from './routes'
import Passport from './config/passport'

const app = express();
dotenv.config();

// Server
const port = process.env.PORT || 8081;
app.use(cors());


//Body Parser
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use(bodyParser.json());

// mongoose
const db = Key.mongoURI;
mongoose
	.connect(db, {
		useNewUrlParser: true
	})
	.then(() => {
		console.log('MonogoDB Connected');
	})
	.catch((err) => {
		console.log(err);
	});
// // Passport
app.use(passport.initialize());
Passport(passport);

//USE ROUTES
app.use('/',routes);
app.get('/', (req, res) => {
	res.send('Hello from Moi Node!!');
});
// Sets what Port the Server is listening on
app.listen(port, () => {
	console.log(`Listening to http://localhost:${port}`);
});
