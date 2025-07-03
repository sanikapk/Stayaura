const mongoose = require('mongoose');
const initData=require('./data.js');
const Listing = require('../models/listing.js');
const MONGO_URL='mongodb://127.0.0.1:27017/stayaura';
main().then(()=>{
    console.log("Connected to DB");
}).catch(err=>{
    console.log("Error connecting to DB",err);
});
async function main(){
    await mongoose.connect(MONGO_URL);
}
const initDB=async()=>{
   await Listing.deleteMany({});//first clean the data
   initData.data=initData.data.map((obj)=>({...obj,owner:"6843df2043a3875efa1127fb"}));
   await Listing.insertMany(initData.data);//then insert the data
console.log("Data inserted successfully");
};
initDB();