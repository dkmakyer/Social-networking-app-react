import React from 'react'
import "./verification.css"
import deleteIcon from "./delete.png"
import { Link } from "react-router-dom"

const Verification = () => {
  return (
    <div>
      <div className='verificationScreen'>
        <h1>Enter verification code</h1>
        <h2>Enter 4 digit code sent to your mail</h2>
        <div className="input">
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
        </div>
        <div className="verification-text">
          <p>Didnt receive a code?</p>
          <p className='secondP'>Resend in 00:59</p>
        </div>
        <Link to="/profile-creation">
          <button className='verification-button'>Verify account</button>
        </Link>
        <form className='verification-form' action="">
          <button>1</button>
          <button>2<p>ABC</p></button>
          <button>3<p>DEF</p></button>
          <button>4<p>GHI</p></button>
          <button>5<p>JKL</p></button>
          <button>6<p>MNO</p></button>
          <button>7<p>PORS</p></button>
          <button>8<p>TUV</p></button>
          <button>9<p>WXYZ</p></button>
          <button className='symbol'>+*#</button>
          <button>0</button>
          <button className='symbol'><img src={deleteIcon} alt="image not found" /></button>
        </form>
      </div>
    </div>
  )
}

export default Verification
