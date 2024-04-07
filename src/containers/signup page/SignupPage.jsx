import React from 'react'
import facebook from "./facebook.png"
import google from "./google.png"
import iphone from "./iphone.png"
import "./signupPage.css"

const SignupPage = () => {
  return (
    <div>
        <div className='page'>
            <h1>Sign in via:</h1>
            <form className='signup-form' action="">
                <label htmlFor="email">Email:</label><br/>
                <input type="email" id='email' placeholder='email@gmail.com' />
                <button className='signupButton'>Get magic code</button>
            </form>
            <div className="divider">
                <h2 className='line1'></h2>
                <h2>OR</h2>
                <h2 className='line2'></h2>
            </div>
            <div className="buttons">
                <button><img src={google} alt="image not found" />Sign-in with Google</button>
                <button><img src={facebook} alt="image not found" />Sign-in with Facebook</button>
                <button><img src={iphone} alt="image not found" />Sign-in with Apple</button>
            </div>
        </div>
    </div>
    )
}

export default SignupPage
