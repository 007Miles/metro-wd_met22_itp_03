import {useState} from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import {useNavigate} from "react-router-dom";

export default function WarehouseRegistrationForm(){    
  const navigate = useNavigate(); 

  const Register= () => {
    axios.post('http://localhost:3000/api/warehouse/addWarehouse', {
      wareId : wareId, 
      address:address,
      phone:phone,
      storageCond : storageCond, 
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
    const [wareId, setWarehouseId] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setNumber] = useState("");
    const [storageCond, setstorageCond] = useState("");


    return (      
      <div className = "container bg-green-200 rounded-xl shadow border p-8 m-10">
        <h1 className = "text-3xl">WAREHOUSE Registration Form</h1>
        <div className = "mt-6 space-y-6">
          <div className = "-space-y-px rounded-md shadow-sm">
            
            <div>
                <label  className="sr-only">WareHouse ID</label>
                <input id="wareId" name="warehouseID" type="text" required className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Warehouse ID" onChange={(e)=>{setWarehouseId(e.target.value)}}/>
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
                <label  className="sr-only">Storage Condition</label>
                <input id="storageCond" name="StorageCondition" type="text" required className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="StorageCondition" onChange={(e)=>{setstorageCond(e.target.value)}}/>
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

                  
                  
               