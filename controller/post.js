const Post=require('../model/post')
const Magazin=require('../model/magazin')
const express=require('express')
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const addPost=async(req,res)=>{
    const newPost=new Post(req.body);
    try {
        const post = await newPost.save();
        console.log(post);
        await Magazin.findByIdAndUpdate({ _id: req.body.idMagazin }, { $push: { 'Post': post._id } })
        res.status(200).send(post)
    } catch (err) {
        console.log(err)
        res.status(400).send("לא הצליח ליצור"+err.message)
    }
}
const updatePost=async(req,res)=>{
    try{
    await Post.findByIdAndUpdate({ _id: req.params.id },req.body);
    console.log("מצאתי");
     res.status(200).send("השתנה בהצלחה")}
     catch{
        console.log(err)
        res.status(400).send("לא הצליח לעדכן"+err.message)
     }
     
}
const deletePost=async(req,res)=>{

}
module.exports={addPost,updatePost}