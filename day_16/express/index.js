import express from "express";
const app= express();
const port=3000

app.get("/", (req,res)=>{
    res.send("<h1>Hello,world</h1>");
})
app.get("/about", (req,res)=>{
    res.send("<h1>My first sever</h1>");
})
app.get("/contact", (req,res)=>{
    res.send("<h1>9966004455</h1>");
})

app.listen(port, () =>{
    console.log(`Server running on ${port}.`);
})