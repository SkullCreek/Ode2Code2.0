import React from 'react'
import LandingPage from './components/Landing/LandingPage'
import "./styles/global.css"
import { AuthProvider} from './components/context/AuthContext'
import { BrowserRouter as  Router, Routes, Route} from 'react-router-dom'
import Dashboard from './components/Home/Dashboard'
import PrivateRoute from './components/private/PrivateRoute'

const App = () => {
  return (
    <>
      
        <Router>
          <AuthProvider>
            <Routes>
              <Route exact path="/" element={<PrivateRoute/>}>
                <Route exact path='/' element={<Dashboard/>}/>
              </Route>
              <Route path='/LandingPage' element={<LandingPage />} />
            </Routes>
          </AuthProvider>
        </Router>
        {/* <LandingPage /> */}
     
    </>
  )
}

export default App
