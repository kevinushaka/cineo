const { Router } = require('express')
const AuthRouter =require('./auth')
const StreamRouter =require('./streams')
const router = new Router()

router.get('/status', (req, res) => res.status(200).json('200'))
router.use('/auth',AuthRouter)
router.use('/streams',StreamRouter)
module.exports = router
