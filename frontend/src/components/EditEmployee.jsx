import { useForm } from "react-hook-form"
import { useNavigate,useLocation } from "react-router"
import { useEffect, useState } from "react"
import axios from "axios"




function EditEmployee() {
  
  const navigate=useNavigate()
  const{register,handleSubmit,formState:{errors},setValue}=useForm()
 const [loading,setLoading]=useState(false)
    const [error,setError]=useState(null)
  const{state}=useLocation()
   useEffect(()=>{
    setValue("name",state.name)
    setValue("email",state.email)
    setValue("mobile",state.mobile)
    setValue("designation",state.designation)
      setValue("companyName",state.companyName)
   },[])
//to edit the emp 
   const savemodifiedEmp=async(modifiedEmp)=>{
    try{
      setLoading(true)
    const res=await axios.put(`http://localhost:4000/employee-api/employee/${state._id}`,modifiedEmp)
    console.log(res);
    if(res.status===200){
        navigate("/list")
    }else{setError(data)}
  }catch(err){

console.error("Fetch error:", err);
  }
    finally{
        setLoading(false)
    }
    }
    if(loading){
        return <p>loading....</p>
    }
    if(error){
        return <div style={{color: 'red', padding: '20px', textAlign: 'center'}}>Error: {error.error || error.message || 'Failed to create employee'}</div>
    }

  


  return (
    
    <div>
      <form className="bg-green-50 w-155 mx-auto h-100 py-5 rounded-4xl border-2 border-blue-950 shadow-2xl " onSubmit={handleSubmit(savemodifiedEmp)}>
        <h1 className='text-center text-3xl text-gray-900 font-extrabold'>Edit employee details</h1>
        <input type="text" placeholder='Enter the employee name' {...register("name", {required: "Name is required"})} id="name" className='bg-white block mx-auto  my-6 rounded-1xl border-2 w-60' />
        
         <input type="text" placeholder='Enter the employee email' {...register("email", {required: "Email is required"})} id="email" className='bg-white block mx-auto  my-6 rounded-1xl border-2 w-60' disabled />
        
          <input type="number" placeholder='Enter the employee mobile' {...register("mobile", {required: "Mobile is required", valueAsNumber: true})} id="mobile" className='bg-white block mx-auto  my-6 rounded-1xl border-2 w-60' />
        
           <input type="text" placeholder='Enter the employee designation' {...register("designation", {required: "Designation is required"})} id="designation" className='bg-white block mx-auto   rounded-1xl border-2 w-60' />
       
            <input type="text" placeholder='Enter the employee company' {...register("companyName", {required: "Company name is required"})} id="companyName" className='bg-white block mx-auto  my-6 rounded-1xl border-2 w-60' />
        
           <button type="submit" className='bg-indigo-950 text-white block mx-auto w-50 px-3 py-3 border-black border-2 rounded-2xl'>edit employee</button>
</form>


    </div>
    


  )
}

export default EditEmployee