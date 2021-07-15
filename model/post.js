const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    headLine: {
        type: String
    },
    image: {
        type: String
    },
    body: {
        type: String
    },
    idMagazin: {
        type: mongoose.Types.ObjectId, ref: 'Magazin'
    }
})

module.exports = mongoose.model('Post', PostSchema);