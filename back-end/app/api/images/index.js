const {Router} =require('express')
const router = new Router()
var path = require('path');


router.get('/:imageId', (req,res)=>{
    try {
        res.sendFile(path.join(__dirname, '../../ressources/images', req.params.manifestId+'.png'))
      } catch (err) {
        console.log(err)
      }
    
})
module.exports = router