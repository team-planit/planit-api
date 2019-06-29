    
import express from 'express'
const router = express.Router()


router.use("/auth", require("./Auth"));

export default router;