import { cancelDrop } from '../services/Supply_cancel.js'

export const cancelSchedule = async (req, res) => {
  await cancelDrop(req.params.id, req.body.reason)
  res.send({ msg: 'cancel shedule recoded' })
}
