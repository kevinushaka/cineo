const {Router} =require('express')
const router = new Router()
const{allStreams}=require('./../../middleware')

router.get('/',(req,res)=>{
    allStreams(req,res);
})
module.exports = router