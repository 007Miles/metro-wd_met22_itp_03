import { deleteDrops } from '../repository/Schedules.js'

export const cancelDrop = async (id, rsn) => {
  return deleteDrops(id, rsn)
}
