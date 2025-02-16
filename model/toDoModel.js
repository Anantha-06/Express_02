import mongoose from "mongoose";

const { Schema } = mongoose;

const toDoSchema = new Schema({
  task: {type:String,required:true,maxlength: 100},
  completed: {type:Boolean,default:false}
});

export const toDoModel = mongoose.model('Todo',toDoSchema)
