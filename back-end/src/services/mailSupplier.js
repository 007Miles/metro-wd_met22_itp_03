import nodemailer from 'nodemailer'

export const mailSupplier = async ({
  business_name,
  address,
  email,
  phone,
  registered_products,
  username,
  password,
}) => {
  const details = {
    business_name,
    address,
    email,
    phone,
    registered_products,
    username,
    password,
  }
  const output = `
    <p>You have been accepted as a Supplier for perera distribuors</p>
    <h3>Supplier Details</h3>
    <ul>  
      <li>Business name: ${details.business_name}</li>
      <li>Address: ${details.address}</li>
      <li>Email: ${details.email}</li>
      <li>Phone: ${details.phone}</li>
      <li>Registered products: ${details.registered_products}</li>
    </ul>
    <h3>Login Credentials</h3>
    <p>Your Username : ${details.username}</p></br>
    <p>Your Password : ${details.password}</p>
  `

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.USER, // generated ethereal user
      pass: process.env.PASS, // generated ethereal password
    },
    // tls: {
    //   rejectUnauthorized: false,
    // },
  })

  // setup email data with unicode symbols
  let mailOptions = {
    from: 'dinuka15v@gmail.com', // sender address
    to: 'dinukav15@gmail.com', // list of receivers
    subject: 'Node Contact Request', // Subject line
    // text: 'Hello world?', // plain text body
    html: output, // html body
  }

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    }
    console.log('Message sent: %s', info.messageId)
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))

    return { msg: 'Email has been sent' }
  })
}
