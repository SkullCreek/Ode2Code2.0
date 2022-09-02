import React from 'react'
import LandingPage from './components/Landing/LandingPage'
import "./styles/global.css"
import { AuthProvider} from './components/context/AuthContext'
import { BrowserRouter as  Router, Routes, Route} from 'react-router-dom'
import Dashboard from './components/Home/Dashboard'
import PrivateRoute from './components/private/PrivateRoute'
import Redeem from './components/Dashboard/Redeem'
import Shopping from './components/Dashboard/Shopping'
import Addtocart from './components/Dashboard/Addtocart'
import Reports from './components/Dashboard/Reports'
import Recommend from './components/Dashboard/Recommend'

const App = () => {
  return (
    <>
      
        <Router>
          <AuthProvider>
            <Routes>
              <Route exact path="/" element={<PrivateRoute/>}>
                <Route exact path='/' element={<Dashboard/>}>
                  <Route path='/Redeem' element={<Redeem />} />
                  <Route path='/Shopping' element={<Shopping />} />
                  <Route path='/Addtocart' element={<Addtocart />} />
                  <Route path='/Recommend' element={<Recommend />} />
                  <Route path='/Report' element={<Reports />} />
                </Route>
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
