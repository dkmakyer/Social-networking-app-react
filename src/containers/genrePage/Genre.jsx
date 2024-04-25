import React from 'react'
import "./genre.css"
import ProfilePage from '../../components/profile-page/ProfilePage'
import LeftArrow from '../../components/left-arrow/LeftArrow'
import { Link } from "react-router-dom"

const Genre = () => {
    return (
        <div>
            <ProfilePage />
            <Link to="/profile-creation">
                <LeftArrow />
            </Link>
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
                    <Link to="/authors">
                        <button className='continue-button'>Continue</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Genre
