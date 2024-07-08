const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

const mockUser = {
    username: 'authguy',
    password: 'mypassword',
    profile: {
        firstName: 'Chris',
        lastName: 'Wolstenholme',
        age: 43
    }
};
const JWT_SECRET="my_super_secure_secret"

router.post('/login', (req, res) => {
    const payload = { username : mockUser.username}
    const token = jwt.sign(payload, JWT_SECRET)

    res.json({token})
});

router.get('/profile', (req, res) => {
});


module.exports = router;
