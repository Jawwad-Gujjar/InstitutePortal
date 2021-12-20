import mongoose from 'mongoose'
const Schema = mongoose.Schema;

let recipt = new Schema({
    studentId:{
        type: Number,
        // required: [true, "Please Enter Student Number"],
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
       fee:{
        type: Number,
        required: [true, "Please Enter Student Number"],
      },
      feeMonthDate :{
        type:Date,
        default:Date.now
       },
    }
    ,{
        collection: 'recipt'
    })
    export default recipt = mongoose.model('recipt', recipt)