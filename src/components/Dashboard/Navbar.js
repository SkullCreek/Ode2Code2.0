import React, {useEffect,useState} from 'react';
import Navitems from './Navitems';
import axios from "axios";
import { useAuth } from '../context/AuthContext';
import Manager from "../API/Manager";
import Customer from '../API/Customer';
import Seller from '../API/Seller';

const Navbar = () => {
    const { currentUser } = useAuth()
    const [props, setProps] = useState(Customer);
    
    useEffect(() => {
        const checking_user = () => {
            const params = new URLSearchParams();
            params.append('email', currentUser.email);
            axios.post('http://localhost/Ode2Code2.0/billingsystem/PHP/database/check_user_title.php', params)
            .then(function (response) {
                if(response.data.trim() === "manager" ){
                    setProps(Manager);
                }
                else if(response.data.trim() === "seller"){
                    setProps(Seller);
                }
                else{
                    setProps(Customer);
                }
                    
            })
            .catch(function (error) {
                console.log(error);
            });
        }
        checking_user();
    },[currentUser.email]);
    
return (
<>
    <div className="app-sidebar">
        <Navitems navData={props}/>
    </div>
</>
)
}

export default Navbar