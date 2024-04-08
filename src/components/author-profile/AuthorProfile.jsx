import React from 'react'
import profilePic from "./profile-pic.svg"
import "./author-profile.css"

const AuthorProfile = () => {
  return (
    <div>
        <div className="author-component">
            <img src={profilePic} alt="image not found" />
            <div className="author-component-text">
                <p className='author-name'>Dr. David</p>
                <p className='followers'>12l followers</p>
                <p className='books'>147 books</p>
                <button>follow</button>
            </div>
        </div>
    </div>
  )
}

export default AuthorProfile
   