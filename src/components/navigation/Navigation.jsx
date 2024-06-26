import React from 'react'
import "./navigation.css"
import emptyDiscovery from "./empty-discovery.svg"
import filledDiscovery from "./filled-discovery.svg"
import emptyHome from "./empty-home.svg"
import filledHome from "./filled-home.svg"
import emptyLibrary from "./empty-library.svg"
import filledLibrary from "./filled-library.svg"
import emptyProfile from "./empty-profile.svg"
import filledProfile from "./filled-profile.svg"
import { Link } from 'react-router-dom'



const Navigation = () => {
  return (
    <div>
      <nav className='navigation-page'>
        <Link to="/home">
          <div className='home'><img src={emptyHome} alt="image not found" /><p>Home </p></div>
        </Link>
        <Link to="/search">
          <div className='discover'><img src={emptyDiscovery} alt="image not found" /><p>Discovery </p></div>
        </Link>
        <Link to="/library">
          <div className='my-library'><img src={emptyLibrary} alt="image not found" /><p>My Library </p></div>
        </Link>
        <Link to="">
          <div className='profile'><img src={emptyProfile} alt="image not found" /><p>Profile </p></div>
        </Link>
      </nav>
    </div>
  )
}

export default Navigation
