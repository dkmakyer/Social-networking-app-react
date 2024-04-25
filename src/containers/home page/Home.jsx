import React from 'react'
import "./home.css"
import bookImage from "./book.svg"
import Navigation from '../../components/navigation/Navigation'
import People from '../../components/people/People'
import profilePicture from "./profile-pic.svg"
import BottomScreen from '../../BottomScreen'
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <div className="home-page">
                <div className="home-page-top">
                    <div>
                        <h1>Hello Chris,</h1>
                        <p>Here are a few publications you might love!</p>
                    </div>
                    <img src={profilePicture} alt="image not found" />
                </div>
                <div className="current-read">
                    <h4>Little Pigeon</h4>
                    <p>Author</p>
                    <h1></h1>
                    <h2 className='bottom-line'></h2>
                </div>
                <h3>Recently Added</h3>
                <Link to="/open-page">
                    <div className="recently-added">
                        <img src={bookImage} alt="image not found" />
                        <img src={bookImage} alt="image not found" />
                        <img src={bookImage} alt="image not found" />
                    </div>
                </Link>
                <h3>People you can follow</h3>
                <div className="follow-people">
                    <People />
                    <People />
                    <People />
                    <People />
                </div>
                <Navigation />
            </div>
            <BottomScreen />
        </div>
    )
}

export default Home
