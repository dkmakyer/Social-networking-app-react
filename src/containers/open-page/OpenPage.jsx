import React from 'react'
import "./open-page.css"
import Navigation from '../../components/navigation/Navigation'
import LeftArrow from '../../components/left-arrow/LeftArrow'
import bookCover from "./book.svg"
import authorPic from "./profile-pic.svg"
import pageArrow from "./left-arrow.png"

const OpenPage = () => {
  return (
    <div>
        <div className="open-page">
            <div className="arrow-head">
                <img src={pageArrow} alt="image not found" className="back-arrow" />
            </div>
            <img src={bookCover} alt="image not found" className='cover-image'/>
            <h1>Le Pigeon</h1>
            <div className="rating">
                <h3>Regional & Ethnic</h3>
                <h3 className='rating-right'>4.5 Rating</h3>
            </div>
            <div className="author-intro">
                <h3>Gabriel Rucker</h3>
                <img src={authorPic} alt="image not found" />
            </div>
            <div className="main-content">
                <h3>Lorem ipsum dborum ebcaecati reprehenderit eaque natus! Eveniet architecto possimus inventore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quia ducimus laborum est, velit officiis minima? Quasi, rerum quisquam. Dolor soluta tempore obcaecati reprehenderit eaque natus! Eveniet architecto possimus inventore!</h3>
            </div>
            <button className="open-page-button">Read</button>
            <Navigation/>
        </div>
       
    </div>
  )
}
export default OpenPage
