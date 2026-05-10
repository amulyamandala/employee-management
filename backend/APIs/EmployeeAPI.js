import exp from 'express'
export const employeeAPP=exp.Router()
import { employeeModel } from '../models/employeeModel.js'
import { after } from 'node:test'

// creation of employee
employeeAPP.post("/employee",async(req,res)=>{
    try{
        const newEmp=req.body
        const newemployeeDoc=employeeModel(newEmp)
        await newemployeeDoc.save()
        res.status(201).json({message:"the employee has been created"})
    }
    catch(err){
        console.log("Error creating employee:",err.message)
        res.status(400).json({message:"Failed to create employee", error:err.message})
    }
})

//read all the employees 
employeeAPP.get("/employees",async(req,res)=>{
    let empList=await employeeModel.find()
    res.status(200).json({message:"the employees are:", payload:empList})
})

//edit employee
employeeAPP.put("/employee/:_id",async(req,res)=>{
    const modifiedemp=req.body;
    const id=req.params._id
    const updateemp= await employeeModel.findOneAndUpdate({_id: id},{$set:{...modifiedemp}},{returnDocument:after,runValidators:true})
    res.status(200).json({message:"the updated employee details are",payload:updateemp})


})

//delete employee
employeeAPP.delete("/employee/:_id",async(req,res)=>{
    const id=req.params._id
    const emplist=await employeeModel.findOneAndDelete({_id:id})
    if(!emplist){
        return res.status(404).json({message:"the email doesnt exist"})
    }
    res.status(200).json({message:"the employee has been deleted"})
})