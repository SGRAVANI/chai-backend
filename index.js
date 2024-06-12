console.log("chai aur code")
let express=require("express")
let dotenv=require("dotenv")
dotenv.config()
let app=express()
const port=3000
app.get("/",(req,res)=>{
    res.send("hello world")
})
app.get("/twitter",(req,res)=>{
    res.send("<h2>hi from twitter</h2>")
})
app.listen(process.env.PORT,()=>{
    console.log("server is liatening at",process.env.PORT)
})
