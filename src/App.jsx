import React from 'react'
import TopScreen from './TopScreen'
import BottomScreen from './BottomScreen'
import Splash from './components/Splash'
import SignupPage from './containers/signup page/SignupPage'
import Verification from './containers/verificationPage/Verification'
import ProfileCreation from './containers/profileCreationPage/ProfileCreation'
import Genre from './containers/genrePage/Genre'
import Authors from './containers/authors/Authors'
import Friends from './containers/friend-suggestion/Friends'




const App = () => {
  return (
    <>
      <TopScreen/>
      <Friends/>
      <BottomScreen/>
    </>
  )
}
export default App 