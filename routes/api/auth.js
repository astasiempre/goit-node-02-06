const express = require('express');

const ctrl = require('../../controllers/auth');

const { validateBody, authenticate, upload} = require('../../middlewares');

const { schemas } = require('../../models/user');

const router = express.Router();



// sign up
router.post('/users/register', validateBody(schemas.registerSchema), ctrl.register)
router.get('/users/verify/:verificationToken', ctrl.verifyEmail)
router.post('/users/verify', validateBody(schemas.emailSchema), ctrl.resendVerifyEmail)
// sign in
router.post('/users/login', validateBody(schemas.loginSchema), ctrl.login)

router.get('/users/current', authenticate, ctrl.getCurrent)

router.post('/users/logout', authenticate, ctrl.logout)

router.patch('/users/avatars', authenticate, upload.single('avatar'), ctrl.updateAvatar)



module.exports = router;