import React from 'react'
import ProfilePage from '../../components/profile-page/ProfilePage'
import "./profileCreation.css"

const ProfileCreation = () => {
  return (
    <div>
        <ProfilePage/>
        <div className="profile-screen">
            <h2>Complete your profile</h2>
            <form className="profile-form" action="">
                <label htmlFor="email">Email:</label><br/>
                <input type="email" id='email' /><br/>
                <label htmlFor="gender">Gender:</label><br/>
                <input type="text" id='gender' /><br/>
                <label htmlFor="date">Date of birth:</label><br/>
                <input type="date" id='date' /><br/>
                <label htmlFor="bio">Bio</label><br/>
                <textarea name="bio" id="bio" placeholder='Enter a bio' cols="37" rows="7"></textarea><br/>
                <button>Continue</button>
            </form>
        </div>
    </div>
  )
}

export default ProfileCreation
