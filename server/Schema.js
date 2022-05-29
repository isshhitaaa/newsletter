const mongoose = require('mongoose');
//import { mongoose } from "mongoose";

const newSchema = new mongoose.Schema({
        //title, //author //description //url // timestamp //link //publisher
        title: {
                type: String,
                required:true
        },
        author:{
                type: String,
                required:true
        },
        description:{
                type: String,
                required:true
        },
        url:{
                type: String,
                required:true
        },
        timestamp:{
                type: String,
                required:true
        },
        link:{
                type: String,
                required:true
        },
        publisher:{
                type: String,
                required:true
        }
})
const News = mongoose.model('news', newSchema);
module.exports=News;
//export default News;