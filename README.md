# Billing Webapp with Recommandation System, Payment System, Vendors Ease.
<h3>ODE2CODE2.0</h3>
<hr>
<h2>The Challenge</h2>
To create a billing app integrated across all devices (mobiles and PCs) and outlets to be used by the vendor/operator at the Point of Sale (POS) 
<h2>Ideation 👩‍💻</h2>
My idea is to build a web billing application which can be divided into 3 main categories that are Payment, product, Vendor which will ease customer buy (Note: The features uder 3 major categories are explained properly in “Features that are good to have” part). We can trigger and add features in these areas. In the payment part we can give them point redeems/discount coupons based on their purchase, So that customer is satisfied. Second is product Part in which we can build a recommandation system through which the vendor can recommand the customer based on their selection and we can store the data and can make many more features out of it. In the vendor part we can make easy for the vendor to manage there purches by daily, monthly, yearly report and sales graph. Some additional featues that we be added are Product List, Return product and Authentication.
<h2>Getting Started</h2>
<h3>Pre-requisities</h3>
<ul>
  <li>XAMPP SERVER</li>
  <li>NODEJS</li>
  <li>VS CODE</li>
</ul>
<h3>TECHNOLOGIES USED</h3>
<ul>
  <li>REACTJS</li>
  <li>PHP</li>
  <li>MYSQL</li>
  <li>FIREBASE</li>
  <li>PYTHON</li>
</ul>
<h3>Installation steps</h3>
<p>Firstly clone all the files from github to local system</p>
<p>1. Open VS Code Terminal and install all the dependencies using npm, use "npm i" to do so.</p>
<p>2. Install Xampp server and open localhost/phpmyadmin and setup the the database by importing the billing.sql file.</p>
<p>3. Start the ReactJS Server by writing "npm start" in terminal.</p>
<p>4. Add the .env.local file provided by the developer in parent directory.</p>
<h3>Feature</h3>
<br>
<p>Authentication is divided into three parts</p>
<p>-manager (can see reports)</p>
<p>-seller (can create invoice and satisfy the user</p>
<p>-customer (can only access reedem coupons)</p>
<br>
<h5>Manager and seller can directly add the product to database with a perticular id so that it can be accessed in the add to cart section.</h5>
<img src="https://user-images.githubusercontent.com/92776555/190911076-ee3a37c7-29b3-40c7-a504-0fec1d53a300.png">
<h5>In the Add to Cart section seller can add products by its id mentioned in add product section</h5>
<img src="https://user-images.githubusercontent.com/92776555/190911452-c34558c3-8dd7-4e8b-b804-3aa161e1d3f3.png">
<h5>Manager can check Daily, Monthly and Yearly Report.</h5>
<img src="https://user-images.githubusercontent.com/92776555/190911569-f42b68ea-7a7f-4487-926b-bd5d10af68cb.png">
<h5>After every transcation Customer can get coupons from 0 to 50 percent.</h5>
<img src="https://user-images.githubusercontent.com/92776555/190911693-2cd521bc-9969-480d-9048-e00bbb3de6e6.png">
<h5>Run the Python file for recommandation system. It does sentimental analysis to get the recommanded products from the .csv file.</h5>
<h2>Problem</h2>
<p>As this is a web app this needs to get hosted in hosting platform, This is not a installable application. Which makes this application hard and expensive to use.</p>
<h2>Solution</h2>
<p>As this is a react app which is a single page application we can convert this installable application by using ReactNative or CORDOVA. Then We just have to setup our server</p>
<h2>FUTURE SCOPE: 🤖</h2>
<p>We can use Flask to connect our React app to Python which will make our Recommendation engine GUI ready.</p>
<p>We can make this web app an installable app by using CORDOVA or ReactNative.</p>
<p>We can make it fully responsive.</p>
<p>We can also add more features to it like searchbar, QRscan, etc.</p>
