const express = require("express")

const app = express()

const PORT = process.env.PORT || 4000

app.use('/',(req,res)=>{
    res.send("hello bitch")
})

app.listen(PORT, () =>{
    console.log(`app on port ${PORT}`)
})