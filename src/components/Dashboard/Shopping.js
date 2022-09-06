import React, {useState,useEffect} from 'react'
import axios from "axios";
import Productcard from './Productcard';

const Shopping = () => {
    const [error, setError] = useState('');
    let [pro, setPro] = useState();
    useEffect(() => {
        const getProduct = () => {
            axios.post('http://localhost/Ode2Code2.0/billingsystem/PHP/database/showproducts.php')
            .then(function (response) {
                setPro(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
        }
        getProduct();
    },[]);
    const addProduct = (e) => {
        e.preventDefault();
        const number = document.getElementById("itemno");
        const name = document.getElementById("itemname");
        const qty = document.getElementById("itemqty");
        const price = document.getElementById("itemprice");
        const itemimg = document.getElementById("itemimg");
        const params = new URLSearchParams();
        params.append('number', number.value);
        params.append('name', name.value);
        params.append('qty', qty.value);
        params.append('price', price.value);
        params.append('image', itemimg.value);
        axios.post('http://localhost/Ode2Code2.0/billingsystem/PHP/database/storeproducts.php', params)
        .then(function (response1) {
            axios.post('http://localhost/Ode2Code2.0/billingsystem/PHP/database/showproducts.php')
            .then(function (response) {
                setError(response1.data)
                setPro(response.data)
                number.value = "";
                name.value = "";
                qty.value = "";
                price.value = "";
                itemimg.value = "";
                setTimeout(() => {
                    setError('')
                }, 5000);
            })
            .catch(function (error) {
                console.log(error);
            });
            
        })
        .catch(function (error) {
            setError(error)
            setTimeout(() => {
                setError('')
            }, 10000);
        });
    }
return (
<>
    <div className="projects-section">
        <div className="projects-section-header">
            <p>Products</p>
        </div>
        <div className="shopping-container" >
        {
            pro ? <Productcard props={pro}/>:<h1>waiting</h1>
        }
        </div>
    </div>
    <div className="messages-section">
        <button className="messages-close">
            <span className="material-symbols-outlined">menu</span>
        </button>
        <div className="projects-section-header" style={{display: "flex",flexDirection: "column"}}>
          <p id="storage-heading">Add New Products</p>
          <section className="storage">
            <form action="" className='add-items'>
                <input type="number" id='itemno' placeholder='Item Number'/>
                <input type="name" id='itemname' placeholder='Item Name'/>
                <input type="number" id='itemprice' placeholder='Item Price'/>
                <input type="text" id='itemqty' placeholder='Item Description'/>
                <input type="text" id='itemimg' placeholder='Image Link'/>
                <button id='submit' onClick={addProduct}>Submit</button>
                <p>{error}</p>
            </form>
          </section>
        </div>
      </div>
</>
)
}

export default Shopping