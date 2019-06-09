const express = require("express")
const path = require("path")

const app = express()

const port = 3500

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname+"/view/index.html"))
})

app.listen(port,function(){
    console.log(`listening on port ${port}`)
})