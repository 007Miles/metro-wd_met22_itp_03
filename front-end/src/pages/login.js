import { useState } from 'react'

import Layout from '../components/layout'
import { Button1 } from '../components/common/buttons'

const Login = () => {
  const handleSubmit = async (event) => {
    event.preventDefault()

    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    console.log(username + " " + password)
  }

  return (
    <Layout>
      <div className="">
        <form onSubmit={handleSubmit}>

          <label htmlFor="username">Username</label>
          <input type="text" id="username" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
          
          <button>submit</button>
        </form>
      </div>
    </Layout>
  )
}

export default Login
