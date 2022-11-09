import { useState } from 'react'

import Layout from '../components/layout'
import { login, ping } from '../requests/auth'
import { Button1 } from '../components/common/buttons'

const Login = () => {
  const [s, sets] = useState([])

  const handleSubmit = async (event) => {
    event.preventDefault()

    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    const res = await login({ username, password })

    localStorage.setItem("accessToken", res.data.access_token)
    localStorage.setItem("credentialId", res.data.cred._id)
    localStorage.setItem("username", res.data.cred.username)
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
