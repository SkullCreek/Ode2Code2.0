import React from 'react'

const Coupons = ({props}) => {
return (
<>
    {
        props.map((curElem) => {
            console.log(curElem)
            return (
                <div className="store-offer-item shadow-box" key={curElem.id}>
                    <div className="store-thumb-link">
                        <div className="offer-image">
                            <a href="/">
                                <span className="offer-text">{curElem.offer}% OFF</span></a>
                        </div>
                    </div>
                    <div className="latest-coupon">
                        <h3 className="coupon-title"><a href="/">{curElem.description}</a></h3>
                    </div>
                    <div className="coupon-detail coupon-button-type">
                        <a href="/" className="coupon-button coupon-code" data-aff-url="https://google.com">
                            <span className="code-text">{curElem.code}</span>
                        </a>
                    </div>
                </div>
            )
        })
    }
    
</>
)
}

export default Coupons