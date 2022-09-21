import dropSchedule from '../models/Schedules.js'
import mongoose from 'mongoose'
import SupplyCancel from '../models/Supply_cancel.js'

//Add schedules
export const createSchedule = async (data) => {
  try {
    const scheduleDrop = new dropSchedule({
      supplierID: data.supplierID,
      supplier_name: data.supplier_name,
      product: data.product,
      quantity: data.quantity,
      price: data.price,
      warehouse: data.warehouse,
      weekly: data.weekly,
      monthly: data.monthly,
      yearly: data.yearly,
      date: data.date,
      dayOfTheWeek: data.dayOfTheWeek,
      dayOfTheMonth: data.dayOfTheMonth,
      time: { hour: data.hour, minute: data.minute }, //test
    })
    await scheduleDrop.save()
    return { msg: 'New schedule added' }
  } catch (error) {
    return { msg: 'Schedule not added' }
  }
}

//Get schedule details
export const getScheduleDrops = async (id) => {
  return await dropSchedule.findById(mongoose.Types.ObjectId(id))
}

//Update schedules
export const updateScheduleDrops = async (id, ob) => {
  try {
    await dropSchedule.findByIdAndUpdate(id, ob)
    return { msg: 'Schedule updated successfully' }
  } catch (error) {
    return { msg: 'Schedule update failed' }
  }
}

//Delete schedules
export const deleteScheduleDrops = async (id) => {
  try {
    await dropSchedule.findByIdAndDelete(id)
    return { msg: 'Schedule successfully deleted' }
  } catch (error) {
    return { msg: 'Schedule deletion failed' }
  }
}
export const deleteDrops = async (id, resn) => {
  try {
    const d = await dropSchedule.findByIdAndDelete(id)
    const cancelDetails = new SupplyCancel({
      supplierID: d.supplierID,
      cancel_date: d.date,
      reason: resn,
    })
    cancelDetails.save()
  } catch (error) {
    return { msg: 'Schedule deletion failed' }
  }
}
