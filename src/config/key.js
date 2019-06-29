import dotenv from "dotenv";
dotenv.config();
const Key = {
    mongoURI:process.env.MONGOURI || 'mongodb://localhost:27017/planit-dev',
    secretOrKey:'secret'
}
export default Key