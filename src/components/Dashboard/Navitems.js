import React from 'react'
import { Link } from 'react-router-dom'


const Navitems = ({navData}) => {
  return (
    <>
        {
            navData.map((curElem) => {
                return (
                    <Link to={curElem.href} id={curElem.icon} className="app-sidebar-link" key={curElem.icon}>
                        <span className="material-symbols-outlined">{curElem.icon}</span>
                    </Link>
                )
            })
        }
        
    </>
  )
}

export default Navitems