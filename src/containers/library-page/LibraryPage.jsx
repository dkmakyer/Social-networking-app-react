import React from 'react'
import "./library-page.css"
import Navigation from '../../components/navigation/Navigation'
import bookmarkedBook from "./book.svg"
import moreContent from "./more.png"

const LibraryPage = () => {
  return (
    <div>
        <div className="library-page">
            <h1>My Library</h1>
            <h2>Continue reading</h2>
            <div className="book-progress">
                <img src={bookmarkedBook} alt="image not found" />
                <div className="progress-right">
                    <div className="book-title">
                        <h3>Book title</h3>
                        <img src={moreContent} alt="image not found" />
                    </div>
                    <h3 className="progress-text">Genre</h3>
                    <div className="progress-bar">
                        <h1></h1>
                        <h2 className='progress-bottom-line'></h2>
                        <h3 className="percentage">42% complete</h3>
                    </div>
                </div>
            </div>
            <div className="book-progress">
                <img src={bookmarkedBook} alt="image not found" />
                <div className="progress-right">
                    <div className="book-title">
                        <h3>Book title</h3>
                        <img src={moreContent} alt="image not found" />
                    </div>
                    <h3 className="progress-text">Genre</h3>
                    <div className="progress-bar">
                        <h1></h1>
                        <h2 className='progress-bottom-line'></h2>
                        <h3 className="percentage">42% complete</h3>
                    </div>
                </div>
            </div>
            <div className="bookmarked">
                <h3>Bookmarked</h3>
                <button>View more</button>
            </div>
            <div className="bookmarked-images">
                <img src={bookmarkedBook} alt="image not found" />
                <img src={bookmarkedBook} alt="image not found" />
                <img src={bookmarkedBook} alt="image not found" />
            </div>
            <h3 className="last-words">Recent reads</h3>
            <div className="book-progress">
                <img src={bookmarkedBook} alt="image not found" />
                <div className="progress-right">
                    <div className="book-title">
                        <h3>Book title</h3>
                        <img src={moreContent} alt="image not found" />
                    </div>
                    <h3 className="progress-text">Genre</h3>
                    <div className="progress-bar">
                        <h1></h1>
                        <h2 className='progress-bottom-line'></h2>
                        <h3 className="percentage">42% complete</h3>
                    </div>
                </div>
            </div>
            <Navigation/>
        </div>
    </div>
  )
}

export default LibraryPage
