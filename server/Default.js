//import newSchema from './Schema.js'
//import {data} from './constants/data.js'
const mongoose = require('mongoose');
const newSchema = require('./Schema')
const {data} = require('./constants/data')
const Default= async()=>{
    try{
      //  console.log(data);
       const deleted= await newSchema.deleteMany({});
       const inserted= await newSchema.insertMany(data);
       if(inserted){
          // console.log(data);
           console.log("Data inserted successfully");

       }
       else{
           console.log("Error in default data insertion")
       }
    }catch(error){
        
        console.log(error);
    }
} 
console.log("happy ishita ");
module.exports= Default;
// export default Default;


// import News from './Schema.js'
// import {data} from './constants/data.js'

// const DefaultData = async () => {
//     try {
//         await News.deleteMany({});
//         await News.insertMany(data);

//         console.log('Data imported Successfully');
        
//     } catch (error) {
//         console.log('Error: ', error.message);
//     }
// }

// export default DefaultData;