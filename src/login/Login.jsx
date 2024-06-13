import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

function Login() {

  const handleSignIn = (e) => {
    e.preventDefault();
     // TODO firebase stuff here
  }

  const handleRegister = (e) => {
    e.preventDefault();
    // TODO firebase stuff here
  }


  return (
    <div className='login'>
        <Link className='login__brand' to={"/"}>SPaICTHub</Link>
          <div className="login__form__wrapper">
        <h1>Sign-in</h1>
        
        <form>
            <h5>E-mail</h5>
            <input type="email" placeholder='Email' />
            
            <h5>Password</h5>
            <input type="password" placeholder='password' />
            
            <button onClick={handleSignIn} className='signInButton'>Sign In</button>
        </form>

        <p>By Signing-in, you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>

        <button onClick={handleRegister} className='registerButton'>Create your Amazon Account</button>
    
      </div>
    </div>
  )
}

export default Login
