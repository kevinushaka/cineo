const {Router} =require('express')
const {signup } = require('../../../middleware')
const router = new Router()

router.post('/', (req,res)=>{
  signup(req,res); 
})

module.exports = router