const {Router} =require('express')
const router = new Router()
const {verifyToken }= require('./../../middleware')
const SignUpRouter=  require('./signup')
const LogInRouter = require('./login')

router.use('/signup', SignUpRouter)
router.use('/login',LogInRouter)

router.get('/v',(req,res)=>{
    verifyToken(req,res);
})
module.exports = router