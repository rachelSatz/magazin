const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    headLine:{
        type:String
    },
    image:{
        type:Image
    },
    body:{
        type:String
    }
})

module.exports = mongoose.model('Post', PostSchema);