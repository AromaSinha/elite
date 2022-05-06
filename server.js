const express=require('express');
const app=express();
const dotenv=require('dotenv');
const morgan=require('morgan');
const bodyparser=require("body-parser");
const stripe=require("stripe")(process.env.SECRET_KEY)
const session=require("express-session")
const passport=require("passport")
const connectDB=require('./server/database/connection');
const axios=require('axios')
const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID='501722663182-5vri64pov32h0ft317sf05as1v0ljge4.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.use(session({
    secret:'shhh',
    resave:false,
    saveUninitialized:true
}))
dotenv.config({path:'config.env'})
const PORT=process.env.PORT||8084

app.use(morgan('tiny'));

connectDB();
app.use(bodyparser.urlencoded({extended:true}))

app.set("view engine","ejs")

app.use(express.static('assets'));


//registering routes
app.use('/',require('./server/routes/route'))
app.use('/',require('./server/routes/services'))
//app.use('/',require('./server/routes/users'))




app.listen(PORT,()=>{console.log(`server is running http://localhost:${PORT}`)})