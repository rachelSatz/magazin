const mongoose = require('mongoose');

const MagazinSchema = mongoose.Schema({
    name: {
        type: String
    },

    date: {
        type: Date, default: Date.now
    },
    images: {},
    posts: [
        { type: mongoose.Types.ObjectId, ref: 'Post' }
    ]
})

module.exports = mongoose.model('Magazin', MagazinSchema);