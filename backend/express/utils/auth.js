const jwt = require('jsonwebtoken');

// generate a token
const generateToken = function (user) {
    return jwt.sign(user, process.env.TOKEN_SECRET, {
        expiresIn: 86400 // 24 hours
    });
}