const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

// const router = require('./routes/api');
// hi miri

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

mongoose.connect(process.env.DB_CONECCT, connectionParams)
    .then(() => {
        console.log('Connected to database ')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. ${err}`);
    });

app.use(bodyParser.json());

// app.use('/', function (req, res, next) {
//     if (!req.path.startsWith('/login') && req.path !== '/loginUser' && req.path !== '/registerUser' && req.path !== '/registerAdmin') {
//         try {
//             jwt.verify(req.headers['authorization'], process.env.SECRET)
//             next()
//         }
//         catch (err) {
//             console.log(err);
//             res.send('not login!');
//         }
//     }
//     else
//         next()
// })

// app.use('/', router)

app.listen(5000, () => {
    console.log('listen');
});