import React from 'react'
import "../../styles/pages/profile/redeem.css"
import Coupons from './Coupons'

const Redeem = () => {
return (
<>
    <div className="projects-section">
        <div className="projects-section-header">
            <p>Redeem Coupons</p>
        </div>
        <div className="projects-section-line">
            <Coupons/>
            <Coupons/>
        </div>
    </div>
</>
)
}

export default Redeem