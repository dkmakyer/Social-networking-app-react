import React from 'react'
import "./splash.css"
import logo from "./logo.svg"
import { Link } from "react-router-dom"


const Splash = () => {
  return (
    <div>
      <Link to="/sign-up">
        <div className="splash">
          <img src={logo} alt="image not found" />
        </div>
      </Link>
    </div>
  )
}

export default Splash