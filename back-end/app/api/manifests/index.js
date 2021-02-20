const {Router} =require('express')
const {Stream } = require('../../models')
const router = new Router()
var path = require('path');

router.get('/', (req,res)=>{
    try {
      res.sendFile(path.join(__dirname, '../../ressources/takes', 'manifest.mpd'))
      } catch (err) {
        console.log(err)
      }
    
})
router.get('/:manifestId', (req,res)=>{
    try {
        res.sendFile(path.join(__dirname, '../../ressources/takes', req.params.manifestId))
      } catch (err) {
        console.log(err)
      }
    
})
module.exports = router