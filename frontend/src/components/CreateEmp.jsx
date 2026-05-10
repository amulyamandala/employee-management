import {useState} from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
function CreateEmp() {
    const navigate = useNavigate()
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(null)

    const{register,handleSubmit,formState:{errors}}=useForm()
//cors cross origin resourse sharing as backend and frontend are in different servers automatically blocked for security reasons

    const onFormSubmit=async(newEmpObj)=>{
     console.log("Form data:", newEmpObj);
     try{
     setError(null)
     setLoading(true)
     let res=await fetch("http://localhost:4000/employee-api/employee",{
     method:"POST",
     headers:{ "Content-type":"application/json" },
    body:JSON.stringify(newEmpObj)});
    let data=await res.json()
    console.log("Response:", res.status, data);
    if(res.ok){
        //navigate to employees component programatically
        navigate("/list")
    }
    else{
        setError(data)
    }
      }
    catch(err){
        console.error("Fetch error:", err);
        setError({message: err.message || "Failed to fetch - Check if backend is running on http://localhost:4000"})
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
        <form className="bg-yellow-50 w-155 mx-auto h-100 py-5 rounded-4xl border-2 border-blue-950 shadow-2xl" onSubmit={handleSubmit(onFormSubmit)}>
        <h1 className='text-center text-3xl text-gray-900 font-extrabold'>Enter new employee details</h1>
        <input type="text" placeholder='Enter the employee name' {...register("name", {required: "Name is required"})} id="name" className='bg-white block mx-auto  my-6 rounded-1xl border-2 w-60'/>
        {errors.name && <p style={{color: 'red', textAlign: 'center'}}>{errors.name.message}</p>}
         <input type="text" placeholder='Enter the employee email' {...register("email", {required: "Email is required"})} id="email" className='bg-white block mx-auto  my-6 rounded-1xl border-2 w-60' />
        {errors.email && <p style={{color: 'red', textAlign: 'center'}}>{errors.email.message}</p>}
          <input type="number" placeholder='Enter the employee mobile' {...register("mobile", {required: "Mobile is required", valueAsNumber: true})} id="mobile" className='bg-white block mx-auto  my-6 rounded-1xl border-2 w-60'/>
        {errors.mobile && <p style={{color: 'red', textAlign: 'center'}}>{errors.mobile.message}</p>}
           <input type="text" placeholder='Enter the employee designation' {...register("designation", {required: "Designation is required"})} id="designation" className='bg-white block mx-auto   rounded-1xl border-2 w-60'/>
        {errors.designation && <p style={{color: 'red', textAlign: 'center'}}>{errors.designation.message}</p>}
            <input type="text" placeholder='Enter the employee company' {...register("companyName", {required: "Company name is required"})} id="companyName" className='bg-white block mx-auto  my-6 rounded-1xl border-2 w-60'/>
        {errors.companyName && <p style={{color: 'red', textAlign: 'center'}}>{errors.companyName.message}</p>}
           <button type="submit" className='bg-indigo-950 text-white block mx-auto w-50 px-3 py-3 border-black border-2 rounded-2xl'>Add the employee</button>
</form>
    </div>
  )
}

export default CreateEmp