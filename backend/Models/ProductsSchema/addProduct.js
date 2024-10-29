import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name:String,
  description:String,
  category:String,
  rate:String,
  imageUrl:String,
  students:String,
  instructor:String,
  language:String,
  price:String,
  duration:String,
},{timestamps:true});


export const Product=mongoose.model("product",productSchema);






// firstName: String,
//   lastName: String,
//   email: String,
//   password:String,
//   mobileNumber: String,
//   age: String,
//   country: String,
//   gender: String,