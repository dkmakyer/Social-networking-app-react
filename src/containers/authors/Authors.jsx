import React from 'react'
import LeftArrow from '../../components/left-arrow/LeftArrow'
import ProfilePage from '../../components/profile-page/ProfilePage'
import AuthorProfile from '../../components/author-profile/AuthorProfile'
import "./authors.css"

const Authors = () => {
  return (
    <div>
        <ProfilePage/>
        <LeftArrow/>
        <div className="authors-page">
            <p className='author-text'>Do you have authors whose publications you love?</p>
            <form action="">
                <input type="text" placeholder='Search for favourite author' />
            </form>
            <div className="author-profiles">
                <AuthorProfile/>
                <AuthorProfile/>
                <AuthorProfile/>
                <AuthorProfile/>
                <AuthorProfile/>
                <AuthorProfile/>
            </div>
            <button className='author-button'>Continue</button>
            <button className='skip'>Do this later</button>
        </div>
    </div>
  )
}

export default Authors
