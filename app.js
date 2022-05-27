const express = require("express")

const app = express()

app.use(express.static('public'))

app.get('/',(resq,resp)=>{

  resp.sendFile(__dirname + '/views/index.html')

})

app.get('/about.html',(resq,resp)=>{

    resp.sendFile(__dirname + "/views/about.html")

})

app.get('/images.html',(resq,resp)=>{

    resp.sendFile(__dirname + "/views/images.html")

})
app.get('/work.html',(resq,resp)=>{

    resp.sendFile(__dirname + "/views/work.html")

})

app.listen(3000, () => { 

    console.log('Port 3000')

})