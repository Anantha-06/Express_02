import { toDoModel } from "../model/toDoModel.js";

export const toDoCreate = async(req,res)=>{
    try {
        const{task} = req.body
        if (!task){
            return res.status(400).json({message:"Task is required"})
        }
        const newTask = new toDoModel({
            task
        })
        const saveTask = await newTask.save()
        res.status(201).json({message:"name added successfully",saveTask})
    } catch (error) {
        res.status(500).json({message:"internal Server error",error:error.message})
    }
}

export const toDoGetTask = async (req,res)=>{
try {
    const {id} = req.params
const getTask = await toDoModel.findById(id)
res.status(200).json({message:"your assingned task are",getTask})
} catch (error) {
    res.status(500).json({message:"internal Server error",error:error.message})
}
}

export const toDoUpdateTask = async(req,res)=>{
    try {
        const{id}=req.params
        const{task,completed}=req.body
        const updateToDo = await toDoModel.findByIdAndUpdate(id,{task,completed},{new:true})
        res.status(200).json({message:"your task have been updated",updateToDo})
    } catch (error) {
        res.status(500).json({message:"internal Server error",error:error.message})
    }
}

export const toDoTaskDelete = async(req,res)=>{
    try {
        const{id}=req.params
        const taskDelete = await toDoModel.findByIdAndDelete(id)
        res.status(200).json({message:"your task have been deleted"})
    } catch (error) {
        res.status(500).json({message:"internal Server error",error:error.message})
    }
}