const express = require('express');

// const auth = require('./route/auth')

const app = express()

// app.use(express.json())

// app.use('/auth', auth)

app.get('/',(req,res)=>{

    res.send('this is express server')

})


app.listen(8000, ()=>{

    console.log("applicaton is running")

})