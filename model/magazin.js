const mongoose = require('mongoose');

const MagazinSchema = mongoose.Schema({
    name: {
        type: String
    },
    
    date: {
        type: Date
    },
    images:{},


    posts: [
        { type: mongoose.Types.ObjectId, ref: 'Post' }
    ]
})

module.exports = mongoose.model('Magazin', MagazinSchema);