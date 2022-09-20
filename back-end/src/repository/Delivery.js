import Delivery from '../models/delivery.js'
import mongoose from 'mongoose'

export const insertDelivery = async (delivery) => {
  const deliveryToSave = new Delivery(delivery)
  await deliveryToSave.save()
}

export const readDelivery = async (id) => {
  const delivery = await Delivery.findById(mongoose.Types.ObjectId(id))
  return delivery
}