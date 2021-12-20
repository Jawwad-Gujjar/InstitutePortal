import express from 'express'
import users from '../models/user.js'
//const user = require('../models/user.js')


export const userLogin = (req, res) =>{
    console.log(req.body)
   // let users = new user(req.body)
   // users.userID = req.body.userID
   // users.password = req.body.password
   //users.find()

   users.find(req.body, function(err, abc){
        if(err){
            console.log(err)
        }
        else{
            console.log("Reach Here",abc)

            res.json(abc)
        }
    })    

}

export const userLoginFindOne = (req,res)=>{
console.log(req.body)

users.findOne({userId}).select("+password");
if(!userLoginFindOne) {
   console.log("Invalid userid or password")
}


}

