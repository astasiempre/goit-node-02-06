
const { register } = require('./auth');
const { login } = require('./auth');

const { getCurrent } = require('./auth');
const { logout } = require('./auth');
const { updateAvatar } = require('./auth');
const { verifyEmail } = require('./auth');
const { resendVerifyEmail } = require('./auth');

module.exports = {
    register,
    verifyEmail,
resendVerifyEmail,
    login,
    getCurrent,
    logout,
updateAvatar,
};
