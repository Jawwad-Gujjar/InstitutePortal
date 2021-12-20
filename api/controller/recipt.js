import express from 'express';
 import recipt from '../models/recipt.js';
import feeGenrate from '../models/feeGen.js'

export const studentFindForRecipt =(req, res) =>{
    console.log(req.body)
    feeGenrate.find(req.body, function(err, abc){
         if(err){
             console.log(err)
         }
         else{
             console.log("Reach Here",abc)
 
             res.json(abc)
         }
     }) 
    
    }
    export const recipts =(req, res) =>{
        const fee = recipt.create(req.body)
       console.log(fee)
       res.json({id:1,msg:"message record"})
       
        }
