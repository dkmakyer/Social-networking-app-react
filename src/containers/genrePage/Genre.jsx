import React from 'react'
import "./genre.css"
import ProfilePage from '../../components/profile-page/ProfilePage'
import LeftArrow from '../../components/left-arrow/LeftArrow'

const Genre = () => {
  return (
    <div>
        <ProfilePage/>
        <LeftArrow/>
        <div className="genre">
            <div className="genre-text">
                <p>what genre do you love reading the most?</p>
            </div>
            <form action="">
                <input type="text" placeholder='Search for favourite genres' className="first-input" />
                <div className="buttons">
                    <button>Religion</button>
                    <button>Art</button>
                    <button>Romance</button>
                    <button>Fiction</button>
                    <button>Action</button>
                    <button>Comedy</button>
                </div>
                <button className='continue-button'>Continue</button>
            </form>
        </div>
    </div>
  )
}

export default Genre
