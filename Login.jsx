import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'  // Add the CSS file here

const Login = () => {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (user === 'admin' && pass === '1234') {
      localStorage.setItem('isLoggedIn', 'true')
      alert('Logged in successfully')
      navigate('/home')
    } else {
      alert('Invalid username or password')
    }
  }

  return (
    <section className="form-container">
      <div className="form-box">
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="input-field"
          />
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Login
