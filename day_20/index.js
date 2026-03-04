import express from "express";
import {dirname} from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app=express()
const port=3000

var userAuth=false
app.use(bodyParser.urlencoded({ extended: true }));

function auth(req,res,next){
    const password= req.body["password"]
    if (password==="iLoveCoding"){
        userAuth=true
    }
    next()
}

app.use(auth)

app.get("/",(req,res)=>{
    res.sendFile(__dirname+  "/public/index.html")
})

app.post("/check",(req,res)=>{
    if (userAuth){
        res.sendFile(__dirname+"/public/secret.html")
    }
    else{
        res.sendFile(__dirname+ "/public/index.html")
    }    
    
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})


