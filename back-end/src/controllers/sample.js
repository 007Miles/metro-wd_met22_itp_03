import asyncHandler from '../middleware/async.js'

export const sample = asyncHandler((req, res) => {
  console.log('inside index.routes')
  res.status(200).json({ status: 'works' })
})
