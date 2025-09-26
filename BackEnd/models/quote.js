import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    service:{type:String,required:true},
    message:{type:String,required:true},
},{ timestamps: true }
)

export default mongoose.model('Quote', quoteSchema)