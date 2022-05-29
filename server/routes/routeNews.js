const express= require('express');
const news = require('../Schema')
const route= express.Router();
console.log("say hi")
route.get('/',()=>{
    console.log("hello from server")
})
route.get('/news', async (req,res)=>{
    console.log("error is here");
        res.json("error here");
    try{
        const data = await news.find({});
        console.log(data);
        console.log("error is here");
        res.json("error here");
        res.status(200).json(data);
    }catch(err){
        console.log("error is here");
        res.json("error here");
       res.status(500).json(err);
    }
   
})
console.log("route lll");
module.exports= route;