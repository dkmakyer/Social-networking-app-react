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




const App = () => {
  return (
    <>
      <TopScreen/>
      <SignupPage/>
    </>
  )
}
export default App 