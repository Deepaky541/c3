const mongoose=require("mongoose");

const connect =()=>{
    return mongoose.connect("mongodb://localhost:27017/c3",
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
}
module.exports=connect;
