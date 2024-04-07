import React from 'react'
import TopScreen from './TopScreen'
import BottomScreen from './BottomScreen'
import Splash from './components/Splash'
import SignupPage from './containers/signup page/SignupPage'
import Verification from './containers/verificationPage/Verification'
import ProfileCreation from './containers/profileCreationPage/ProfileCreation'




const App = () => {
  return (
    <>
      <TopScreen/>
      <ProfileCreation/>
      <BottomScreen/>
    </>
  )
}
export default App 