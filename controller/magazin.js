const Magazin = require('../model/magazin')
const User = require('../model/user');
const Post = require('../model/post')


const createMagazin = async (req, res) => {//create magazin
    try {

        const newMagazin = new Magazin(req.body)

        const magazin = await newMagazin.save()

        await User.findByIdAndUpdate(magazin.userId, { $push: { magazins: magazin._id } })

        res.json({ status: 200, magazin: magazin })
    }
    catch (err) {
        console.log(err)
        res.status(400).send(err.message)
    }
}

// const deleteMagazin = async (req, res) => {
//     try {

//         // await Post.deleteMany({ idMagazin: { $eq: req.params.id } })

//         const magazinfind=Magazin.findById({_id:req.params.id})
//     console.log(magazinfind);

//         // await User.findByIdAndUpdate(magazin.userId, { $pull: { magazins: magazin._id } }, { new: true })
//         // await Magazin.findByIdAndDelete(req.params.id)
//         res.json({ stats: 200,magazin:magazin })
//     } catch (err) {
//         res.status(400).send(err.message)
//     }
// }
const deleteMagazin = async (req, res) => {
    try {
        await Post.deleteMany({ idMagazin: { $eq: req.params.id } })
        const magazin = await Magazin.findById(req.params.id)
        await User.findByIdAndUpdate(magazin.userId, { $pull: { magazins: magazin._id } })
        await Magazin.findByIdAndDelete(req.params.id)
        res.send({ status: 200 })
    }
    catch (err) {
        res.status(400).send(err.message)
    }
}




const updateMagazin = async (req, res) => {
    try {
        const magazin = await Magazin.findByIdAndUpdate({_id:req.params.id},{$set:req.body},{new:true})
        res.json({ status: 200, magazin: magazin })
        console.log(magazin.name);
        
        
    }
    catch{
        res.status(400).send(err.message)
    }
}





const deletePostsByMagazin = (req, res) => {
    Magazin.findById(req.body.magazinId)///magazinid???
        .then(magazin => {
            Post.deleteMany({ _id: { $in: magazin.posts } })
                .then(e => {
                    res.json({ status: 200, saccses: "saccses" })
                }
                )
                .catch(err => {
                    res.status(400).send(err.message)
                })

        })
}







module.exports = { createMagazin, deletePostsByMagazin, updateMagazin, deleteMagazin }
