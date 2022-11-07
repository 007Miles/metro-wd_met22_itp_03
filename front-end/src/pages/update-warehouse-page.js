import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function WarehouseUpdateForm() {

    const [wareId, setWareId] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setNumber] = useState("");
    const [storageCond, setStorageCondition] = useState("");

    const { id } = useParams();

    const Update = async (e) => {
        e.preventDefault();

        const warehouse = {
            wareId,            
            address,
            phone,
            storageCond,
        };
        console.log(warehouse);
        const response = await fetch(
            "http://localhost:3000/api/warehouse/updateWarehouse/" + id,
            {
                method: "PUT",
                body: JSON.stringify(warehouse),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const json = await response.json();

        if (!response.ok) {
            // setError(json.error);
            console.log(json);
        }
    };

    useEffect(() => {
        axios.get('http://localhost:3000/api/warehouse/viewWarehouse/' + id)
            .then((response) => {
                let json = response.data.data
                setWareId(json.wareId)
                setAddress(json.address)
                setNumber(json.phone)
                setStorageCondition(json.storageCond)
            });
    }, [id]);

    return (
        <div className="container bg-gray-200 rounded-xl shadow border p-8 m-10">
            <h1 className="text-3xl">Update WareHouse Details</h1>
            <div className="mt-6 space-y-6">
                <div className="-space-y-px rounded-md shadow-sm">

                    <div>
                        <label className="sr-only">Employee ID</label>
                        <input id="warehouseId" name="warehouseid" type="text" required className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            placeholder="Warehouse ID" onChange={(e) => { setWareId(e.target.value) }} value={wareId} />
                    </div>
                    <div>
                        <label className="sr-only">Address</label>
                        <input id="address" name="address" type="text" required className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            placeholder="Address" onChange={(e) => { setAddress(e.target.value) }} value={address} />
                    </div>
                    <div>
                        <label className="sr-only">Phone Number</label>
                        <input id="phone" name="phone" type="text" required className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            placeholder="Phone" onChange={(e) => { setNumber(e.target.value) }} value={phone} />
                    </div>

                    <div>
                        <label className="sr-only">Storage Condition</label>
                        <input id="storageCondition" name="storagecondition" type="text" required className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            placeholder="StorageCondition" onChange={(e) => { setStorageCondition(e.target.value) }} value={storageCond} />
                    </div>
                    
                    <br></br>
                    <div>
                        <button onClick={Update} className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}