import mongoose from 'mongoose'
const Schema = mongoose.Schema;

let admission = new Schema({
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
    dob:{
      type: Date,
      required: [true, "Please Enter Student Number"],
    },
    email:{
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
    address:{
      type: String,
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
    status:{
      type:String,
      default: "Present"
    },
    admissionDate :{
     type:Date,
     default:Date.now
    },
    leftDate:{
      type:Date,
      default:null,
    },
    gender:{
      type: String,
      required: [true, "Please Enter Student Number"],
    },
}
,{
    collection: 'admission'
})

//module.exports = mongoose.model('Us er', users)
export default admission = mongoose.model('admission', admission)