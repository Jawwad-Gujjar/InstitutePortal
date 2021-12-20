const express = require('express');
const adRoute = express.Router();

let admission = require('./admissionModel')
adRoute.route('/admission').post(function (req, res) {
  
  let CLS = new admission(req.body);
  console.log(CLS)
  
  CLS.save()
    .then(jk => {
      res.status(200).json({'Contact': 'Contact added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});