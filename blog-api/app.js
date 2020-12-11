const express = require('express');    //Import express, a light-weigth framework
const app = express()                  //Init express, and save it in "app" variable
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser');
const cors = require('cors');


//Middleware
app.use(cors());
app.use(bodyParser.json());


const postRouter = require('./routes/posts');
app.use('/posts', postRouter);

//Routes
//app.get('/', (req, res) => {
//    res.send('Home Page');
//});


//Connte to DB
//mongodb+srv://blog_user:<password>@cluster0.vkqdy.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect(
    'mongodb+srv://blog_user:cvetok17@cluster0.vkqdy.mongodb.net/Cluster0?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log('DB connected');
    }
)


//Listen to server
app.listen(3000); //Listen through port 3000