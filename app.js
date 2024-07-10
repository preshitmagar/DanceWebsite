const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 800;


//for serving static files
app.use('/public', express.static('public'))
app.use(express.urlencoded())

//Pug specific code
app.set('view engine', 'pug')
app.set('views', path.join( __dirname, 'views'));

//Endpoints
app.get('/', (req, res)=> {
    const con = "Best Content on the internet"
    const params = {'title': 'Pug is the best', "content": con}
    res.status(200).render('home.pug', params);
})
app.get('/contact', (req, res)=> {
    const params ={}
    res.status(200).render('contact.pug', params);
})
//Start the server
app.listen(port, ()=>{
    console.log(`Application started successfully on port ${port}`)
})