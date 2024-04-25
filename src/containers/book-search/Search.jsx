import React from 'react'
import "./search.css"
import Navigation from '../../components/navigation/Navigation'
import searchBottom from "./bar.png"
import searchBook from "./book.svg"
import magnifyingGlass from "./search.png"
import settingLines from "./setting-lines.png"
import BottomScreen from '../../BottomScreen'
import { Link } from "react-router-dom"


const Search = () => {
    return (
        <div>
            <div className="search-page">
                <h1>Discover Books</h1>
                <div className="search-input">
                    <input type="text" placeholder='Search' />
                    <img src={magnifyingGlass} alt="image not found" />
                </div>
                <div className="topic">
                    <img src={settingLines} alt="image not found" />
                    <button className='current-topic'>All</button>
                    <button>Genre</button>
                    <button>Author</button>
                </div>
                <Link to="/open-page">
                    <div className="new-release">
                        <h3>New Releases</h3>
                        <button>View more</button>
                    </div>
                    <div className="new-release-images">
                        <img src={searchBook} alt="image not found" />
                        <img src={searchBook} alt="image not found" />
                        <img src={searchBook} alt="image not found" />
                    </div>
                </Link>
                <Link to="/open-page">
                    <div className="trending-books">
                        <h3>Trending books</h3>
                        <button>View more</button>
                    </div>
                    <div className="trending-books-images">
                        <img src={searchBook} alt="image not found" />
                        <img src={searchBook} alt="image not found" />
                        <img src={searchBook} alt="image not found" />
                    </div>
                </Link>
                <div className="search-bottom">
                    <img src={searchBottom} alt="image not found" />
                </div>
                <Navigation />
            </div>
        </div>
    )
}

export default Search
