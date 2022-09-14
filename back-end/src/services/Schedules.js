import { createSchedule } from '../repository/Schedules.js'

export const addSchedules = async ({
  supplierID,
  supplier_name,
  product,
  quantity,
  price,
  warehouse,
  weekly,
  monthly,
  yearly,
  date,
  dayOfTheWeek,
  time,
}) => {
  const data = {
    supplierID,
    supplier_name,
    product,
    quantity,
    price: Number(price),
    warehouse,
    weekly: Boolean(weekly),
    monthly: Boolean(monthly),
    yearly: Boolean(yearly),
    date: Date(date),
    dayOfTheWeek,
    time: Date(time),
  }
  const x = await createSchedule(data)
  //console.log('Service test', x)
  return x.msg
}
