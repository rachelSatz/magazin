const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    password: {
        type: Number
    },
    email: {
        type: String
    },
   
    Magazins: [
        { type: mongoose.Types.ObjectId, ref: 'Magazin' }
    ]
})

module.exports = mongoose.model('User', UserSchema);