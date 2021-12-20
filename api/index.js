//const express = require('express');
import express from 'express'
import cors from 'cors'
const app = express();
//const bodyParser = require('body-parser');
const PORT = 2021;
//const cors = require('cors');
import user from './route/user.js'
import router from './route/admission.js'
import courseRouter from './route/course.js'
import mongoose from 'mongoose'
import config from './controller/DB.js'
import  feeRouter from './route/feeGen.js'
import reciptRouter from './route/recipt.js'

mongoose.Promise = global.Promise;
mongoose.connect(config.DB,{useNewUrlParser:true}).then(
  ()=>{console.log('Database is Connected')},
  err => {console.log('cen Not connect to the database'+err)}
);


app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/login',user)
app.use('/admission',router)
app.use('/studentlist',router)
app.use('/course',courseRouter)
app.use('/feeGen',feeRouter)
app.use('/feeRecipt',reciptRouter)
app.use('/recipt',reciptRouter)


app.listen(PORT, function(){
    console.log('Server is running on Port:',PORT);
  }); 