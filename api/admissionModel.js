const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for admission
let admission = new Schema({
  Sno :{
    type: String
  },
  AdmDate: {
    type: String
  },
  Name: {
    type: String
  },
  Fname: {
    type: String
  },
  Dob: {
    type: String
  },
  Gender: {
    type: String
  },
  Cellno: {
    type: String
  },
  Email: {
    type: String
  },
  Fee: {
    type: String
  },
  Feetot: {
    type: String
  },
  
  
}
,{ strict: false }
,{
    collection: 'Admission'
});

module.exports = mongoose.model('Admission', admission);