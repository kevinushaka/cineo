const { Router } = require('express')
const StreamRouter =require('./streams')
const router = new Router()
router.get('/status', (req, res) => res.status(200).json('ok'))
router.use('/streams',StreamRouter)
module.exports = router
