const {Router} =require('express')
const {Stream } = require('../../models')
const router = new Router()

router.get('/', (req,res)=>{
    try {
        res.status(200).json({})
      } catch (err) {
        console.log(err)
      }
    
})
router.get('/:streamId', (req,res)=>{
    try {
        console.log(req.params)
        const stream = Stream.getById(req.params.streamId)
        res.status(200).json(stream)
      } catch (err) {
        console.log(err)
      }
    
})
module.exports = router