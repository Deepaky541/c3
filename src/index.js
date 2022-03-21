const express= require("express")
const connect=require("./config/db")
const app=express();
app.use(express.json());
const userController=require('./controller/user.controller')
const bookController=require("./controller/book.controller")
const commentController=require("./controller/comment.controller")
app.user("/user",userController)
app.use("/book",bookController)
app.use("/comment",commentController)
app.listen(6000,async () => {
    try{
        await connect()
        console.log("listening to 6000");
    }
    catch(err){
        console.log(err);
    }
})