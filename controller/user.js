const User = require('../model/user');
const Magazin = require('../model/magazin');
const Post = require('../model/post');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

// test two
// function register user
const register = async (req, res) => {
    const newUser = new User(req.body)
    try {
        const user = await newUser.save();
        console.log(user);
        const magazin = await new Magazin({
            name: "new magazin",
            userId: user._id,
            images: "https://pixabay.com/get/g7e4a7875b2362e7c3e7a246c59d98925d1cd3add29362bdbc3965ddb09b8fc077c87b221ef86f296d11b7bbcb52fb448_1920.jpg",
        }).save();
        await User.findByIdAndUpdate({ _id: user._id }, { $push: { 'magazins': magazin._id } });
        const post1 = await new Post({
            headLine: "title example 1",
            image: "https://pixabay.com/get/g0fb58abe01f83ec4e7b1be235aef5a7fadd7624f466f149606075dade129d9be43a1f4ce1d0f863fa2f060d2a065fee3_1920.jpg",
            descreption: "body example 1",
            idMagazin: magazin._id
        }).save();
        const post2 = await new Post({
            headLine: "title example 1",
            image: "https://pixabay.com/get/g2f73d13c3817a9c2a37f695cdd17a76f446d7e355a3e857e130093a4eacce5610d415f5c8c1166b7d271affccadb9e94_1920.jpg",
            descreption: "body example 1",
            idMagazin: magazin._id
        }).save();
        await Magazin.findByIdAndUpdate({ _id: magazin._id }, { $push: { 'posts': [post1._id, post2._id] } });
        res.json({ status: 200, user: user, magazin: magazin, post1: post1, post2: post2 })
        console.log('succes create new user');

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
