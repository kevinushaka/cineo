const { Router } = require('express')
const StreamRouter =require('./streams')
const ManifestRouter=require('./manifests')
const router = new Router()

router.get('/status', (req, res) => res.status(200).json('ok'))
router.use('/manifests',ManifestRouter)
router.use('/streams',StreamRouter)
module.exports = router
