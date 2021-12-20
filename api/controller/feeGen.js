import express from 'express'
import feeGenrate from '../models/feeGen.js'
import admission from '../models/admission.js'

export const createDues = (req, res) => {

   // const query =  admission.find({status:'Present'},{"studentId"})//.select("studentId","studentName")
   // query.exec(function(err,data){
   //    console.log(data)
   // })
   // console.log(std)

   // admission.find({status:'Present'}, function(error,data){
   //  console.log(data)
   //  //feeGenrate.insertMany(data)
   //  res.json('Fired',)
   //  })
   var query = admission.find({ status: 'Present' }).select({ "_id": 0, "studentId": 1, "studentName": 1 ,"fatherName":1,"courses":1,"mobile":1,"fee":1,"courseFee":1}).lean();
  
   var newsoneValue
   var  newsoneValue2

   query.exec(function (err, someValue) {
      newsoneValue = someValue
      console.log(req.body)
      // setTimeout(() => {
         //console.log('line33',newsoneValue)
         newsoneValue2 = newsoneValue.map(v =>Object.assign(v,req.body))
         feeGenrate.insertMany(newsoneValue2)
         res.json('reach')
         //console.log('line35',newsoneValue2)
         ////res.json(newsoneValue2)   
      // }, 10000);
     // console.log(newsoneValue2)
      // feeGenrate.insertMany(newsoneValue2)
    //  res.json('run')
      // res.json(newsoneValue2)
      //   if (err) return next(err);
      //   res.send(someValue);
   });

   // setTimeout(() => {
   //    console.log('line45',newsoneValue2)
   //    res.json('running')
   // }, 15000);
   // setTimeout(() => {
   //    //console.log('After Exec',newsoneValue)
   //    for (var i = 0; i < newsoneValue.length; i++) {
   //       console.log('reach here', newsoneValue[i])
   //       newsoneValue[i]['myKey'] = 'append'
   //       console.log(newsoneValue)

   //    }
   //    res.json(newsoneValue)
   // }, 2000);


   // const newArr = [
   //    {name: 'eve'},
   //    {name: 'john'},
   //    {name: 'jane'}
   //  ].map(v => ({...v, isActive: true}))
   //   console.log(newArr)
   // const newArr2 = newArr.map(v =>Object.assign(v, {DActive: true}))
   // console.log(newArr2)
}
