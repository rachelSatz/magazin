const User = require('../model/user');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

// rachel
// function register user
const register = async (req, res) => {
    const newUser = new User(req.body)
    try {
        const user = await newUser.save()
        res.json({ status: 200, user: user })
        console.log('succes');
    } catch (err) {
        console.log(err)
        res.status(400).send(err.message)
    }
}

module.exports = { register }
