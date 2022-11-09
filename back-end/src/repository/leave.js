import mongoose from "mongoose"
import Leavesubmission from "../models/Leave.js"

export const createleavesheet = async(details)=>{  // crating a arrow funtion to add leave to the data base
    try{
        const addleave = new Leavesubmission({
            empId:details.empId,
            leaveId:details.leaveId,
            start_date:details.start_date,
            num_days:details.num_days,
            approval:details.approval,
            reason:details.reason
        })
console.log("this is repo file and this object",addleave);
        await addleave.save() 
        return {msg: 'leave has been submmited'}
    }catch(error){
        return {msg: 'leave has not been submmited'}
    }
}

  // get all leaves
  export const getleaves = async () => {
    try{
      const a = await Leavesubmission.find().sort({ createdAt: -1 })
      console.log(a)
      return a
    } catch (error){
      return{msg: 'No Leave forms to display'}
    }
  }

export const getleave = async (id) => {
    return await Leavesubmission.findById(mongoose.Types.ObjectId(id))
}

export const updateleaveusingId = async (id, ob) => {
    try {
      const res = await Leavesubmission.findById(id)
      Object.assign(res, ob)
      await res.save()
      return { msg: 'update successfull' }
    } catch (error) {
      return { msg: 'updation not successfull' }
    }
  }
  
  export const deleteleaveusingId = async (id) => {
    try {
      await Leavesubmission.findByIdAndDelete(id)
      return { msg: 'deletion successfull' }
    } catch (error) {
      return { msg: 'deletion not successfull' }
    }
  }

