import React from 'react'
import LeftArrow from '../../components/left-arrow/LeftArrow'
import ProfilePage from '../../components/profile-page/ProfilePage'
import AuthorProfile from '../../components/author-profile/AuthorProfile'
import "./friends.css"

const Friends = () => {
  return (
    <div>
        <ProfilePage/>
        <LeftArrow/>
        <div className="friends-page">
            <p className='friend-text'>Here are a few friend suggestions for you</p>
            <div className="friend-profiles">
                <AuthorProfile/>
                <AuthorProfile/>
                <AuthorProfile/>
                <AuthorProfile/>
                <AuthorProfile/>
                <AuthorProfile/>
            </div>
            <button className='friend-button'>Continue</button>
            <button className='skip'>Do this later</button>
        </div>
    </div>
  )
}

export default Friends
