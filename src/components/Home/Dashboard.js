import React from 'react'
import Header from '../Dashboard/Header'
import Navbar from '../Dashboard/Navbar'
import Content from '../Dashboard/Content'
import "../../styles/pages/profile/dashboard.css"

const Dashboard = () => {
  return (
    <>
      <div className="app-container">
        <Header/>
        <div className="app-content">
          <Navbar/>
          <Content/>
        </div>
      </div>
    </>
  )
}

export default Dashboard