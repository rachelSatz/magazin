const mongoose = require('mongoose');

const MagazinSchema = mongoose.Schema({
    name: {
        type: String
    },

    date: {
        type: Date, default: Date.now
    },
    userId:{
        type: mongoose.Types.ObjectId, ref: 'User'
    },
    // images:{type:Image},
    images: {
        type: String
    },
    posts: [
        { type: mongoose.Types.ObjectId, ref: 'Post' }
    ],
    userId: {
        type: mongoose.Types.ObjectId, ref: 'User'
    }
})

module.exports = mongoose.model('Magazin', MagazinSchema);