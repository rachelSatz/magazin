const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    headLine:{
        type:String
    },
    image:{
        type:Image
    },
    descreption:{
        type:String
    },
    idMagazin:{
         type:mongoose.Types.ObjectId,ref="magazin"
    }
})

module.exports = mongoose.model('Post', PostSchema);