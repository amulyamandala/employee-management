import exp from 'express'
import {connect} from 'mongoose'
import { employeeAPP } from './APIs/EmployeeAPI.js'
import cors from 'cors'
import {config} from 'dotenv'
config();
const app=exp()
app.use(cors({
    origin:['http://localhost:5173', 'http://localhost:3000']
}))

//add body parser why
//You add the body parser so 
// that the server can read the data sent by the client in the request body.
app.use(exp.json())



app.use("/employee-api",employeeAPP)

//connect to db server

async function connectdb(){
    try{
    //await connect("mongodb://localhost:27017/dbname")
    await connect(process.env.DB_URL)///dbname to create or check whether its there or not 
    console.log("db connected succesfully")
    //start server after the db is connected 
    app.listen(4000,()=>console.log("server on 4000..."))
    }
    catch(err){
        console.log("error in db connection",err)
    }
}
connectdb()
//error handling middleware it has 4 arguments instead of 3 executes only when error occurs
//this will give a json format of error instead of html file 
//this error handling will catc error at any point in any file of backend 
//always place at the end of the file 
app.use((err,req,res,next)=>{
    //res.json({message:"error has occured",error:err.message}) this is very basic 
    console.log(err.name)
    console.log(err.message)
    
    //validation error
    if(err.name==='ValidationError'){
        const errors = Object.values(err.errors).map(e => e.message)
        return res.status(400).json({message:"validation failed", errors: errors})
    }
     //casterror
      if(err.name==='CastError'){
        return res.status(400).json({message:"invalid data format", error: err.message})
    }
    //send server side errors
    res.status(500).json({message:"this is from server side"})
})
//error=>{name,message,callstack} contains these 