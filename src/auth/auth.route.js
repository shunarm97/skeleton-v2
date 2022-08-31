const router =  require('express').Router()

const authServices = require('./auth.http')

// router.route('./login')
//         .post()

router.post('/login', authServices.login)


exports.router = router