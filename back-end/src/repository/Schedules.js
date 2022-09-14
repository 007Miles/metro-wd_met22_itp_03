import dropSchedule from '../models/Schedules.js'
import mongoose from 'mongoose'

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
      time: data.time,
    })
    await scheduleDrop.save()
    return { msg: 'new schedule added' }
  } catch (error) {
    return { msg: 'schedule not added' }
  }
}
