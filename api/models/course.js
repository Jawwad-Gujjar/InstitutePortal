import mongoose from 'mongoose'
const Schema = mongoose.Schema;

let course = new Schema({
    courseId:{
        type: Number
    },
    courseName:{
         type: String
    },
    courseFee:{
        type: Number
   }
}
,{
    collection: 'course'
})

//module.exports = mongoose.model('Us er', users)
export default course = mongoose.model('course', course)