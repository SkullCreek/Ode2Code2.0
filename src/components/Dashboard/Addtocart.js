import React from 'react'
import axios from "axios"

const Addtocart = () => {
  function add_item(){
    var product_tbody = document.getElementById("add-invoice-tr");
    var tr = document.createElement("TR");
    var td_item = document.createElement("TD");
    var td_price = document.createElement("TD");
    var td_qty = document.createElement("TD");
    var td_unit = document.createElement("TD");
    var td_amount = document.createElement("TD");
    var td_delete = document.createElement("TD");
    var input_item = document.createElement("INPUT");
    input_item.className = "item";
    input_item.disabled = 'true';
    input_item.type = "text";
    input_item.placeholder = "Item";
    var input_price = document.createElement("INPUT");
    input_price.className = "price";
    input_price.type = "number";
    input_price.disabled = 'true';
    input_price.placeholder = "0.00";
    var input_qty = document.createElement("INPUT");
    input_qty.className = "qty";
    input_qty.type = "number";
    // input_qty.disabled = 'true';
    input_qty.placeholder = "1";
    var input_unit = document.createElement("INPUT");
    input_unit.className = "id";
    input_unit.type = "number";
    input_unit.placeholder = "1234";
    var input_amount = document.createElement("INPUT");
    input_amount.className = "amount";
    input_amount.type = "number";
    input_amount.className = "amount";
    input_amount.disabled = 'true';
    input_amount.placeholder = "0.00";
    var img = document.createElement("IMG");
    img.src = "images/delete2.svg";
    img.style="cursor:pointer";
    product_tbody.append(tr);
    tr.append(td_item);
    tr.append(td_price);
    tr.append(td_qty);
    tr.append(td_unit);
    tr.append(td_amount);
    tr.append(td_delete);
    td_item.append(input_item);
    td_price.append(input_price);
    td_qty.append(input_qty);
    td_unit.append(input_unit);
    td_amount.append(input_amount);
    td_delete.append(img);
    getProductdetails();
    img.onclick = function(){
        let del_icon_td = this.parentElement;
        let remove_element = del_icon_td.parentElement;
        remove_element.remove();
        let amount_input = document.getElementsByClassName("amount");
        let sub_total = document.getElementById("sub-total");
        let i, sum = Number(0);
        for(i=0;i<amount_input.length;i++){
            sum = sum + Number(amount_input[i].value);
        }
        // store_subtotal = sum;
        sub_total.innerHTML = sum;
        getProductdetails();
        
    }
  }
  function getProductdetails(){
    let id = document.getElementsByClassName("id");
    let item = document.getElementsByClassName("item");
    let price = document.getElementsByClassName("price");
    let amt = document.getElementsByClassName("amount");
    let qty= document.getElementsByClassName("qty");
    let total1 = document.getElementById("total");
    for(let i = 0 ; i < id.length ; i++){
      id[i].onchange = () => {
        
        const params = new URLSearchParams();
        params.append('ID', id[i].value);
        axios.post('http://localhost/Ode2Code2.0/billingsystem/PHP/database/get_product_details.php', params)
        .then(function (response) {
            if(response.data === null){
              alert("No Product with this ID");
            }
            else{
              item[i].value = response.data.name;
              price[i].value = response.data.price;
              amt[i].value = response.data.price;
              qty[i].value = "1"
            }
        })
        .catch(function (error) {
            console.log(error);
        });
        setTimeout(()=>{
          let sum = 0;
          for(let j = 0 ; j < qty.length ; j++){
            sum = sum + parseInt(amt[j].value);
          }
          total1.innerHTML = sum
        },500)

        
      }
      
      qty[i].oninput = () => {
        amt[i].value = qty[i].value*price[i].value;
        let sum = 0;
        for(let j = 0 ; j < qty.length ; j++){
          sum = sum + parseInt(amt[j].value);
        }
        total1.innerHTML = sum
      }
    }
    
  }


return (
<>
  <div className="projects-section">
    <div className="projects-section-header">
      <p>Add To Cart</p>
    </div>
    <div className="projects-section-line">
      <section id="add-invoice">
        <div id="printin">
          <h1 id="company-name-print">billing</h1>
          <img id="company-logo-print" src="../images/logo.png" alt='logo'/>
        </div>
        <h3 id="invoice-heading">Invoice number <span id="invoice-number">1</span><span id="invoice-date"></span></h3>
        <div id="cstmr-info">
          <input type="text" id="cstmr-name" placeholder="Customer Name" />
          <input type="number" id="cstmr-num" placeholder="Phone Number" />
          <input type="email" id="cstmr-email" placeholder="Email" />
          <input type="date" id="cstmr-date" placeholder="dd-mm-yyyy" />
        </div>
        <div id="table-scroll">
          <table className="add-invoice-table">
            <thead>
              <tr>
                <th>Des</th>
                <th>Price</th>
                <th>Qty.</th>
                <th>ID</th>
                <th>Amt</th>
                <th>Del</th>
              </tr>
            </thead>
            <tbody id="add-invoice-tr">
              {/* dynamic coding */}
            </tbody>
          </table>
        </div>
        <button id="add-invoice-btn" onClick={add_item}>+</button>
        <div id="calculation">
          <table>
            <tbody>
              <tr>
                <th>Total</th>
                <th style={{width: "10px"}}><span className="material-icons" style={{fontSize: "15px"}}>currency_rupee</span></th>
                <td id="total" style={{textAlign: "right"}}>0.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="invoice-add-button">
          <button id="print">Print</button>
          <button id="save">Reset</button>
        </div>
      </section>
    </div>
  </div>
  <div className="messages-section">
    <button className="messages-close">
      <span className="material-symbols-outlined">menu</span>
    </button>
    <div className="projects-section-header" style={{display: "flex",flexDirection: "column"}}>
      <p id="storage-heading">Customers Information</p>
      <section className="storage">
        <form action="" className='add-items'>
          <textarea name="Address" id="address" cols="58" rows="10" placeholder='Address'></textarea>
          <button id='buynow'>Proceed To Checkout</button>
        </form>
      </section>
    </div>
  </div>
</>
)
}

export default Addtocart