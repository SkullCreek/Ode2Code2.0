import React from 'react'

const Navitems = ({navData}) => {
  return (
    <>
        {
            navData.map((curElem) => {
                return (
                    <a href={curElem.href} onClick={(e)=>{e.preventDefault()}} className="app-sidebar-link" key={curElem.icon}>
                        <span className="material-symbols-outlined">{curElem.icon}</span>
                    </a>
                )
            })
        }
        
    </>
  )
}

export default Navitems