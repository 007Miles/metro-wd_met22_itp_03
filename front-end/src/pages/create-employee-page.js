import {useState} from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import {useNavigate} from "react-router-dom";

export default function EmployeeRegistrationForm(){    
  const navigate = useNavigate(); 

  const Register= () => {
    axios.post('http://localhost:3000/api/employee/addEmployee', {
      empName:empName,
      cred_id : cred_id, 
      address:address,
      phone:phone,
      dob : dob, 
      nic : nic, 
      gender : gender, 
      wareId : wareId,
      role : role,
      email : email,
    }).then((response) => {
        if(response.data.success){
            Swal.fire({
                title: 'Success!',
                text: response.data.message,
                icon: 'success',
                timer: 1000,
                timerProgressBar: true,
            }).then(() => {
                navigate('/edit');
            })
            }
    })
  }
    const [empName,setName]=useState("");    
    const [cred_id, setCredId] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setNumber] = useState("");
    const [dob, setDob] = useState("");
    const [nic, setNic] = useState("");
    const [gender, setGender] = useState("");
    const [wareId, setWareId] = useState("");
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");

    return (      
      <div className = "container bg-gray-200 rounded-xl shadow border p-8 m-10">
        <h1 className = "text-3xl">EMPLOYEE Registration Form</h1>
        <div className = "mt-6 space-y-6">
          <div className = "-space-y-px rounded-md shadow-sm">
            <div>
                <label  className="sr-only">Employee Name</label>
                <input id="empName" name="empName" type="text" required className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" 
                placeholder="Employee Name" onChange={(e)=>{setName(e.target.value)}}/>
            </div>
            <div>
                <label  className="sr-only">Employee ID</label>
                <input id="empId" name="employeeID" type="text" required className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Employee ID" onChange={(e)=>{setCredId(e.target.value)}}/>
            </div>
            <div>
                <label  className="sr-only">Address</label>
                <input id="address" name="address" type="text" required className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" 
                placeholder="Address" onChange={(e)=>{setAddress(e.target.value)}}/>
            </div>
            <div>
                <label  className="sr-only">Phone</label>
                <input id="phone" name="phone" type="text" required className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Phone" onChange={(e)=>{setNumber(e.target.value)}}/>
            </div>

            <div>
                <label  className="sr-only">Date Of Birth</label>
                <input id="dob" name="dob" type="date" required className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Dob" onChange={(e)=>{setDob(e.target.value)}}/>
            </div>
            <div>
                <label  className="sr-only">NIC</label>
                <input id="nic" name="nic" type="text" required className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Nic" onChange={(e)=>{setNic(e.target.value)}}/>
            </div>

            <div>
                <label  className="sr-only">Gender</label>
                <input id="gender" name="gender" type="text" required className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Gender" onChange={(e)=>{setGender(e.target.value)}}/>
            </div>

            <div>
                <label  className="sr-only">WareHouse ID</label>
                <input id="wareId" name="wareHouseID" type="text" required className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="WareHouse ID" onChange={(e)=>{setWareId(e.target.value)}}/>
            </div>

            <div>
                <label  className="sr-only">Role</label>
                <input id="role" name="role" type="text" required className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Role" onChange={(e)=>{setRole(e.target.value)}}/>
            </div>

            <div>
                <label  className="sr-only">Email</label>
                <input id="email" name="email" type="text" required className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>

            <br></br>
            <div>
                <button onClick={Register}className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Register</button>
            </div>
          </div>
        </div>
      </div>
    )   
}

                  
                  
               