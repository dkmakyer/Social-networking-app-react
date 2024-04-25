import React from 'react'
import TopScreen from './TopScreen'
import Splash from './components/Splash'
import SignupPage from './containers/signup page/SignupPage'
import Verification from './containers/verificationPage/Verification'
import ProfileCreation from './containers/profileCreationPage/ProfileCreation'
import Genre from './containers/genrePage/Genre'
import Authors from './containers/authors/Authors'
import Friends from './containers/friend-suggestion/Friends'
import Home from './containers/home page/Home'
import Search from './containers/book-search/Search'
import LibraryPage from './containers/library-page/LibraryPage'
import OpenPage from './containers/open-page/OpenPage'
import NextPage from './containers/next-page/NextPage'
import { BrowserRouter, Routes, Route } from "react-router-dom"



const App = () => {
  return (
    <BrowserRouter>
      <TopScreen />
      <Routes>
      <Route path="/" element={<Splash />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/profile-creation" element={<ProfileCreation />} />
        <Route path="/genre" element={<Genre />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/open-page" element={<OpenPage />} />
        <Route path="/next-page" element={<NextPage />} />
      </Routes>
    </BrowserRouter>

  )
}
export default App 