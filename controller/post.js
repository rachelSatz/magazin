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
        res.status(400).send("ghhg"+err.message)
    }
}
const updatePost=async(req,res)=>{
    const newPost=new Post(req.body);
    try {
        const post = await newPost.save();
        await Magazin.findByIdAndUpdate({ _id: req.body.idMagazin }, { $push: { 'Post': post._id } })
    } catch (err) {
        console.log(err)
        res.status(400).send(err.message)
    }
}
const deletePost=async(req,res)=>{

}
module.exports={addPost}