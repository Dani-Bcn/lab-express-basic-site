const { response } = require('express')
const { request } = require('express')
const express =require('express')
const res = require('express/lib/response')

const app = express()

app.use(express.static('public'))

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/views/index.html")
})

app.get("/about", (req, res)=>{
    res.sendFile(__dirname + "/views/about.html")
})
app.get("/work", (req, res)=>{
    res.sendFile(__dirname + "/views/work.html")
})
app.get("/images", (req, res)=>{
    res.sendFile(__dirname + "/views/images.html")
})

app.listen(3000 ,()=> console.log("Connetec: 3000"))