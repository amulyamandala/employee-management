import { useEffect,useState } from "react"
//initiall rendering is done already so we can api call whenever we want so use use state
//api and intitial rendering is done together useeffecthook is used 
import axios from "axios"
import { useNavigate } from "react-router"
function ListOfEmp() {
  const [loading,setLoading]=useState(false)
    const [error,setError]=useState(null)
  const [emps,setEmps]=useState([])
  const navigate=useNavigate()

//view button navigate along with employee obj which contains the specific emp data
const gotToEmployee=(empObj)=>{
  navigate("/employee",{state:empObj})
}

// to edit the employee details
const goToEditEmployee=(empObj)=>{
  navigate("/edit-employee",{state:empObj})
}

const deleteEmpBYID=async(id)=>{
 
  let res =await axios.delete(`http://localhost:4000/employee-api/employee/${id}`,id)
  if(res.status===200){
    getEmps();
  }
}
async function getEmps(){
      let res=await fetch('http://localhost:4000/employee-api/employees') //axios.get()
      if(res.status===200){
        let data=await res.json()  //let resObj =res.data
        setEmps(data.payload)   //setEmps(res.obj.payload)
      }
    }

    //get all emps
  useEffect(()=>{
    getEmps()
  },[])
  return (
    <div>
      <h1 className="text-4xl text-center">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-6 ">
        {emps.map((empObj) => (
          <div key={empObj._id} className=" bg-white p-5 shadow-2xl rounded-2xl text-center">
            
            <p>{empObj.name}</p>
            <p className="my-2.5">{empObj.email}</p>
            {/**the 3 buttons */}
            <div className="flex justify-around">
              <button className="bg-green-400 p-2 rounded-2xl text-white border-2 border-black" onClick={()=>gotToEmployee(empObj)}>View</button>
               <button className="bg-yellow-400 p-2 rounded-2xl text-white border-2 border-black" onClick={()=>goToEditEmployee(empObj)}>Edit</button>
                <button className="bg-red-400 p-2 rounded-2xl text-white border-2 border-black" onClick={()=>deleteEmpBYID(empObj._id)}>Delete</button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmp