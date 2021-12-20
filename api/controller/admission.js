import express from 'express'
import admission from '../models/admission.js'
// let admission = require('../models/admission')

//let CLS = new admission()

export const saveData =(req, res) =>{
  
 // let CLS = new admission(req.body)  
//   admission.post(req.body, function(err, abc){
//     if(err){
//         console.log(err)
//     }..
//     else{
//         console.log("Reach Here",abc)

//         res.json(abc)
//     }
// })    
//   CLS.save()
console.log(req.body)
const adm = admission.create(req.body)
console.log(adm)
res.json({id:1,msg:"message record"},adm)
}

export const studentFind =(req, res) =>{
    console.log(req.body)
     admission.find(req.body, function(err, abc){
         if(err){
             console.log(err)
         }
         else{
             console.log("Reach Here",abc)
 
             res.json(abc)
         }
     }) 

    }