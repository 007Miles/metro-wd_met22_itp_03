import { insertDelivery, readDelivery } from "../repository/Delivery.js";

export const addDelivery = async (delivery) => {
    await insertDelivery(delivery)
}

export const getDelivery = async (id) => {
    return await readDelivery(id)
}