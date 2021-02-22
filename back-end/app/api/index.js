const { Router } = require('express')
const StreamRouter =require('./streams')
const ManifestRouter=require('./manifests')
const ImageRouter =require('./images')
const router = new Router()

router.get('/status', (req, res) => res.status(200).json('ok'))
router.use('/manifests',ManifestRouter)
router.use('/streams',StreamRouter)
router.use('/images',ImageRouter)
module.exports = router
