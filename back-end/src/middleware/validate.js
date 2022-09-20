/*
import express from 'express-validator'

const app = express()


app.post(
  '/products',
  body('markupPrice')
    .isCurrency()
    .NumberFormat(`en-Us`, {
      currency: 'Rs',
      style: 'currency',
    })
    .NumberFormat(markupPrice)
)

export const validateProduuct = (req, res, next) => {
  app.post(
    '/api/products',
    body('description').isLength({
      max: 5,
    }),
    (req, res) => {
      const errors = validateREsult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          message: 'characters overloaded for the description',
        })
      } else {
        res.status(200).json({
          success: true,
        }),
          next()
      }
    }
  )
}

export const validateProduct = (req, res, body) => {
  if (req.body('description').isLength() > 10)
    ({
      success: false,
      message: "don't add longer descriptions",
    })
  else {
    success: true, next()
  }
}
//correct
import express from 'express'
import { body } from 'express-validator'

const app = express()

const productValid = [
  body('description')
    .isLength({
      max: 5,
    })
    .withMessage('Description too long'),
]

export default productValid











//CREATE single product
export const singleProductCreate = asyncHandler(async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  const product = await createProductSrc(req.body)

  res.status(200).json(product)
})
*/
