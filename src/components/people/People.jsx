import React from 'react'
import "./people.css"
import peopleImage from "./profile-pic.svg"

const People = () => {
  return (
    <div>
        <div className="people-component">
            <img src={peopleImage} alt="image not found" />
            <p>Chris Designer</p>
            <button>+</button>
        </div>
    </div>
  )
}

export default People
