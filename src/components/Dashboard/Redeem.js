import React,{useEffect,useState} from 'react'
import "../../styles/pages/profile/redeem.css"
import Coupons from './Coupons'
import axios from "axios";
import { useAuth } from '../context/AuthContext';

const Redeem = () => {
    const { currentUser } = useAuth()
    const [redeemcoupons, setRedeemcoupons] = useState([]);
    useEffect(() => {
        const get_coupons = () => {
            const params = new URLSearchParams();
            params.append('email', currentUser.email);
            axios.post('http://localhost/Ode2Code2.0/billingsystem/PHP/database/getcoupons.php', params)
            .then(function (response) {
                setRedeemcoupons(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
        }
        get_coupons();
    },[currentUser.email]);
return (
<>
    <div className="projects-section">
        <div className="projects-section-header">
            <p>Redeem Coupons</p>
        </div>
        <div className="projects-section-line">
            <Coupons props={redeemcoupons}/>
        </div>
    </div>
</>
)
}

export default Redeem