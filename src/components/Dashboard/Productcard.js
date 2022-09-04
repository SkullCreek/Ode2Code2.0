import React from 'react'

const Productcard = ({props}) => {
    console.log(props[0].name)
  return (
    <>
    {
        props.map((curElem)=>{
            return (
                <div key={curElem.number}>
                    <h1>{curElem.name}</h1>
                </div>
            )
        })
    }
    </>
  )
}

export default Productcard