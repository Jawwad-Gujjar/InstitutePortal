import express from 'express'
import course from '../models/course.js'

export const courseSaveData =(req, res) =>{

    
 const cou = course.create(req.body)
console.log(cou)
res.json({id:1,msg:"message record"})

 }
export const courseFind =(req, res) =>{
   console.log(req.body)
    course.find(req.body, function(err, abc){
        if(err){
            console.log(err)
        }
        else{
            console.log("Reach Here",abc)

            res.json(abc)
        }
    }) 
   
   }
   