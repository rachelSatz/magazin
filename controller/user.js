const User = require('../model/user');
const Magazin = require('../model/magazin');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

// test
// function register user
const register = async (req, res) => {
    const newUser = new User(req.body)
    try {
        const user = await newUser.save()
        const magazin = await new Magazin({ name: "new magazin" })
        res.json({ status: 200, user: user, magazin: magazin })
        console.log('succes');

    } catch (err) {
        console.log(err)
        res.status(400).send(err.message)
    }
}

const login = async (req, res) => {
    try {
        let cheackSign = await User.findOne(
            { email: req.body.email, password: req.body.password }
        );
        if (cheackSign == null) {
            res.status(200).send("this user is not found , try again");
        } else {
            const token = jwt.sign(
                { email: req.body.email, password: req.body.password },
                process.env.SECRET
            );
            res.status(200).json({ token: token, user: cheackSign.email });
            console.log('token succses');

        }
    }
    catch (err) { res.status(400).send(err.message) }
}

module.exports = { register, login }
