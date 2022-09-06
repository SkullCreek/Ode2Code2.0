import React from 'react'
import "../../styles/pages/profile/products.css"

const Productcard = ({props}) => {
  return (
    <>
    {
        props.map((curElem)=>{
            return (
                <div className="product-card" key={curElem.number}>
                    <div className="badge">Hot</div>
                    <div className="product-tumb" style={{
                        backgroundImage: `url(${curElem.image})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                    }}>
                        
                    </div>
                    <div className="product-details">
                        <span className="product-catagory">{curElem.name}</span>
                        <h4><a href="/">ID - {curElem.number}</a></h4>
                        <p>{curElem.quantity}</p>
                        <div className="product-bottom-details">
                            <div className="product-price">{curElem.price} Rs.</div>
                            <div className="product-links">
                                <a href="/"><i className="fa fa-heart"></i></a>
                                <a href="/"><i className="fa fa-shopping-cart"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }
    </>
  )
}

export default Productcard