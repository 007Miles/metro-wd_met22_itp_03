import { body } from 'express-validator'

const Validate = [
  body('businessName').exists().withMessage('Enter Busisness name is required'),
  body('email')
    .exists()
    .withMessage('Enter email is required.')
    .isEmail()
    .withMessage('Valid email required'),
  body('phone')
    .exists()
    .withMessage('Enter working phone number')
    .isNumeric()
    .withMessage('you only can use numeric value for the phone number')
    .isLength({ min: 10, max: 10 })
    .withMessage('You have to Enter 10 numbers phone number'),
  body('address').exists().withMessage('Enter valid address'),
  body('city').exists().withMessage('Enter your city'),
]

export default Validate
