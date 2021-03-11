const {Router} =require('express')
const router = new Router()
const {login} =require('../../../middleware')

router.post('/', (req,res)=>{
  login(req,res);  
})

module.exports = router