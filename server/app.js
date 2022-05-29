const express = require("express");
const bodyparser= require("body-parser");
//const express= require('express');
const news = require('./Schema')
const route= express.Router();
const cors= require("cors");
const port = 5000;
const app= express();
const mongoose = require("mongoose");
const routeNews = require('./routes/routeNews.js')
app.use(cors());
// app.use(bodyparser.urlencoded({extended:true}));
// app.use(bodyparser.json({extended:true}));
//import defaultData from './default.js'
const defaultData = require("./default.js")
app.use(express.json())

//app.use()
const url = `mongodb+srv://ishita:ishita@cluster0.ygzi7.mongodb.net/mernstack?retryWrites=true&w=majority`;
mongoose.connect(url).then(()=>{
    console.log("Mongo connection successfull")
}).catch((err)=>{
    console.log(err)
})
app.get('/',(req,res)=>{
    res.send("Hello from the server");
})
app.get('/news', async (req,res)=>{
    
    try{
        const data = await news.find({});

        res.status(200).json(data);
    }catch(err){
        console.log("error is here");
        res.json("error here");
       res.status(500).json(err);
    }
   
})

app.listen(port,()=>{
    console.log("Server is running at " + port);
})
defaultData();