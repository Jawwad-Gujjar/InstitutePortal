import mongoose from 'mongoose'
const Schema = mongoose.Schema;

let users = new Schema({
    userID:{
        type: String
    },
    password:{
         type: String
    }
}
,{
    collection: 'user'
})

//module.exports = mongoose.model('Us er', users)
export default users = mongoose.model('user', users)