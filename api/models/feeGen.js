import mongoose from 'mongoose'
const Schema = mongoose.Schema;

let feeGenrate = new Schema({
feeDate :{
 type:Date
},
  studentId:{
        type: Number,
        required: [true, "Please Enter Student Number"],
    },
    studentName:{
         type: String,
           required: [true, "Please Enter Student Number"],
    },
    fatherName:{
      type: String,
      required: [true, "Please Enter Student Number"],
    },
    courses:{
     type : String
    },
    mobile:{
      type: Number,
      required: [true, "Please Enter Student Number"],
    },
    fee:{
      type: Number,
      required: [true, "Please Enter Student Number"],
    },
    courseFee:{
      type: Number,
      required: [true, "Please Enter Student Number"],
    },
    feeDate:{
        type: Date
    },
    feeStatus:{
      type:String,
      default:"Unpaid"
    }
    
}
,{
    collection: 'feeGenrate'
})

//module.exports = mongoose.model('Us er', users)
export default feeGenrate = mongoose.model('feeGenrate', feeGenrate)