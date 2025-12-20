import React from 'react'
import '../../SCSS/LoginPage/LoginPage.scss'

const LoginPage = () => {
  return (
    <div className="LoginPage">
      <div className="Col-left">

        <div className="logo">
          <img className="img" src="logo1.png" alt="Logo" />
          <div className="title">
            <div className="title1">MPTS</div>
            <div className="title2">Member Performance Tracking System</div>
          </div>
        </div>

        <div>
          <h1 className="login-text">Login to Dashboard</h1>
          <h4 className="fill-text">Fill the below form to login</h4>
        </div>

        <form className="login-form">
          <label className="username">
            Username:<br />
            <input className="input-username" type="text" name="username" id="username" placeholder='Enter Username' />
          </label>
          <br />
          <label className="password">
            Password:<br />
            <input className="input-password" type="password" name="password" id="password" placeholder='Enter Password' />
          </label>
          <h4 className="forget-password">
            Forget Password?
          </h4>
          <br /><br />
          <button className="login-button" type="submit">Login</button>
        </form>
      </div>

      <div className="Col-right">
        <div className="overlay">
          <h1>Member</h1>
          <h1>Performance</h1>
          <h1>Tracking</h1>
          <h1>System</h1>
        </div>
      </div>
    </div>




  )
}

export default LoginPage

