import React from 'react'

const Coupons = () => {
return (
<>
    <div className="store-offer-item shadow-box">
        <div className="store-thumb-link">
            <div className="offer-image">
                <a href="/">
                    <span className="offer-text">75% OFF</span></a>
            </div>
        </div>
        <div className="latest-coupon">
            <h3 className="coupon-title"><a href="/">Up To 40% - 70% Off January Savings Event</a></h3>
        </div>
        <div className="coupon-detail coupon-button-type">
            <a href="/" className="coupon-button coupon-code" data-aff-url="https://google.com">
                <span className="code-text">EMIAXHGF</span>
            </a>
        </div>
    </div>
</>
)
}

export default Coupons