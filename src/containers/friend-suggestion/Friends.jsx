import React from 'react'
import LeftArrow from '../../components/left-arrow/LeftArrow'
import ProfilePage from '../../components/profile-page/ProfilePage'
import AuthorProfile from '../../components/author-profile/AuthorProfile'
import "./friends.css"
import BottomScreen from '../../BottomScreen'
import { Link } from "react-router-dom"

const Friends = () => {
  return (
    <div>
      <ProfilePage />
      <Link to="/authors">
        <LeftArrow />
      </Link>
      <div className="friends-page">
        <p className='friend-text'>Here are a few friend suggestions for you</p>
        <div className="friend-profiles">
          <AuthorProfile />
          <AuthorProfile />
          <AuthorProfile />
          <AuthorProfile />
          <AuthorProfile />
          <AuthorProfile />
        </div>
        <Link to="/home">
          <button className='friend-button'>Continue</button>
          <button className='friend-skip-button'>Do this later</button>
        </Link>
      </div>

    </div>
  )
}

export default Friends
