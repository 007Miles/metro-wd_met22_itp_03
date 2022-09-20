import Delivery from '../models/Delivery.js'

export const insertDelivery = async (delivery) => {
  const deliveryToSave = new Delivery(delivery)
  await deliveryToSave.save()
}
