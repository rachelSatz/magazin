const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    headLine:{
<<<<<<< HEAD
        type:String
    },
    image:{
        type:String
    },
    descreption:{
        type:String
    },
    idMagazin:
        { type: mongoose.Types.ObjectId, ref: 'Magazin' }
=======
          type:String
    },
    image: {
        type:Image
    },
    body: {
        type:String
    }
>>>>>>> rachellsatz
})

module.exports = mongoose.model('Post', PostSchema);