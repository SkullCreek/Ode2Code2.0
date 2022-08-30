import React from 'react'
import LandingPage from './components/Landing/LandingPage'
import "./styles/global.css"
import { AuthProvider} from './components/context/AuthContext'

const App = () => {
  return (
    <>
      <AuthProvider>
        <LandingPage />
      </AuthProvider>
    </>
  )
}

export default App
