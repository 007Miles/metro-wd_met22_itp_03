import asyncHandler from '../middleware/async.js'
import { add } from '../services/sample.js'

export const sampleAdd = asyncHandler((req, res) => {
  const ans = add(req.body)

  res.status(200).json({ answer: ans })
})

export const func1 = asyncHandler( ()=>{} )

export const func2 = () => {
}
