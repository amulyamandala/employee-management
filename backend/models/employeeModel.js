   import {Schema,model} from 'mongoose'

     const employeeSchema=new Schema({
        
        name:{
            type:String,
            required:[true,"Name is required"]
        },
        mobile:{
            type:Number,
            min:[1000,"mobile must be at least 4 digits"],
        },
        designation:{
            type:String,
            required:[true,"designation is required"]
        },
        companyName:{
            type:String,
            required:[true,"company name  is required"]
        },
        email:{
            unique:[true,"the email already exists"],
            type:String,
            required:[true,"email must be provided "]
        }
     })
     export const employeeModel=model("employee",employeeSchema)