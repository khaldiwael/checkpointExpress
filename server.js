const express = require("express")
const permetion = require("./midlewar/check-date")

const app = express()

const port =4000

//set it as the default template engine for your app. You don't need to 'require' it. Add the following code to your index.js file.
// app.set('view engine', 'pug')
// app.set('views','./views')

app.use(permetion)


app.use(express.static('views'))




// app.get('/home', function(req, res){
//     // res.render('home')
//     res.sendFile(__dirname+'/views/home.html')
// })
// app.get('/contact-us', function(req, res){
//     // res.render('home')
//     res.sendFile(__dirname+'/views/contact-us.html')
// })
// app.get('/our-services', function(req, res){
//     // res.render('our-services')
//     res.sendFile(__dirname+'/views/our-services.html')
// })

// let d= new Date()
// console.log('d:'+d.getDay());

// console.log('d:'+ weekday);


app.listen(port,(error)=>{
    error?console.log('error: '+error):console.log(`server is running ${port}`)}
    )