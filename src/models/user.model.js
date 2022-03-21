const mongoose=require("mongoose");

const userSchema= new mongoose.Schema({
    firstName:{type:String,required:true,minlength:3,maxlength:30},
    lastName:{type:String,required:false,minlength:3,maxlength:30},
    age:{type:Number,min:1,max:150},
    email:{type:String,required:true,unique:true},
    profileStamps:{work:mongoose.SchemaType.Url,profile:mongoose.SchemaType.Url}
},
    {
        versionKey:false,
        timestamps:true
    
})
const User=mongoose.model("user",userSchema)
module.exports=user