import React,{ useRef, useState} from 'react'
import "../../styles/pages/landing/landing.css"
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';
import axios from "axios"

const LandingPage = () => {

    const signEmailRef = useRef()
    const signPasswordRef = useRef()
    const logEmailRef = useRef()
    const logPasswordRef = useRef()
    const { signup } = useAuth()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [errorlog, setErrorlog] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    async function loginhandleSubmit(e) {
        e.preventDefault();
        try {
            setError('')
            setLoading(true)
            await login(logEmailRef.current.value, logPasswordRef.current.value)
            .then((userCredential) => {
                navigate('/');
                setErrorlog("Success")
              })
              .catch((error) => {
                const errorCode = error.code.split("/");
                const errorMessage = error.message.split(":");
                const actualerror = errorMessage[1].split(".");
                if(errorCode[1] === "user-not-found"){
                    const login_email = document.getElementById("login_email");
                    login_email.style.border = "2px solid #B10404";
                    document.getElementsByClassName("icon2")[0].style.color = "#B10404";
                    document.getElementById("login_email_error").style.color = "#B10404";
                    document.getElementById("login_email_error").innerHTML = actualerror[0];
                }
                else if( errorCode[1]==="wrong-password"){
                    const login_password = document.getElementById("login_password");
                    document.getElementsByClassName("icon2")[1].style.color = "#B10404";
                    login_password.style.border = "2px solid #B10404";
                    document.getElementById("login_password_error").style.color = "#B10404";
                    document.getElementById("login_password_error").innerHTML = actualerror[0];
                }
            });
        }
        catch {
            setErrorlog('Failed to Signin')
            setTimeout(()=>{
                setErrorlog('')
            },10000)
        }
        setLoading(false)
    }

    async function handleSubmit(e){
        e.preventDefault();
        
        

        try {
            setError('')
            setLoading(true)
            await signup(signEmailRef.current.value, signPasswordRef.current.value)
            .then((userCredential) => {
                // console.log(signEmailRef.current.value)
                // axios.post("", signEmailRef.current.value)
                const params = new URLSearchParams();
                params.append('email', signEmailRef.current.value);
                axios.post('http://localhost/Ode2Code2.0/billingsystem/PHP/database/signup.php', params)
                .then(function (response) {
                        if(response.data.trim() === "success"){
                            setError("Success")
                            navigate('/');
                        }
                        else{
                            alert("Database Not Created");
                        }
                        
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                })
              .catch((error) => {
                const errorCode = error.code.split("/");
                const errorMessage = error.message.split(":");
                const actualerror = errorMessage[1].split(".");
                if(errorCode[1] === "invalid-email"){
                    document.getElementById("email_error").innerHTML = actualerror[0];
                    const email = document.getElementById("sign_email");
                    email.style.border = "2px solid #B10404";
                    document.getElementsByClassName("icon")[0].style.color = "#B10404";
                    document.getElementById("email_error").style.color = "#B10404";
                }
            });
        }
        catch {
            setError('Failed to create an account')
            setTimeout(()=>{
                setError('')
            },10000)
        }
        setLoading(false)
    }
    

    // signup popup
    const signupp = (e) =>{
        e.preventDefault();
        let signup = document.getElementsByClassName("signup");
        let form = document.getElementById("form");
        signup[0].style.display = "grid";
        form.classList.remove("animate__zoomOut");
        form.classList.add("animate__zoomIn");
    }

    // closesignup popup
    const closesignup = (e) => {
        let form = document.getElementById("form");
        let signup = document.getElementsByClassName("signup");
        if(e.target.id === 'signup'){
            form.classList.remove("animate__zoomIn");
            form.classList.add("animate__zoomOut");
            setTimeout(function(){
                signup[0].style.display = 'none';
            },400);     
        }
    } 

    const validemailblur = () => {
        const email = document.getElementById("sign_email");
        if(email.value.length === 0){
            email.style.border = "2px solid #B10404";
            document.getElementsByClassName("icon")[0].style.color = "#B10404";
            document.getElementById("email_error").style.color = "#B10404";
            document.getElementById("email_error").innerHTML = "Username field is empty";
        }
        else{
            email.style.border = "2px solid #006931";
            document.getElementsByClassName("icon")[0].style.color = "#006931";
            document.getElementById("email_error").style.color = "#006931";
            document.getElementById("email_error").innerHTML = "Done";
        }
    }

    const validemailfocus = () => {
        const email = document.getElementById("sign_email");
        email.style.border = "2px solid #7d28c8";
        document.getElementsByClassName("icon")[0].style.color = "#7d28c8"; 
        document.getElementById("email_error").innerHTML = "";
    }

    const validpasswordblur = () => {
        const password = document.getElementById("sign_password");
        if(password.value.length === 0) {
            document.getElementsByClassName("icon")[1].style.color = "#B10404";
            password.style.border = "2px solid #B10404";
            document.getElementById("password_error").style.color = "#B10404";
            document.getElementById("password_error").innerHTML = "Password field is empty";
        }
        else{
            if(password.value.length < 6 && password.value.length > 0) {
                document.getElementsByClassName("icon")[1].style.color = "#B10404";
                password.style.border = "2px solid #B10404";
                document.getElementById("password_error").style.color = "#B10404";
                document.getElementById("password_error").innerHTML = "Minimum 6 characters are required";
            }
            else{
                document.getElementsByClassName("icon")[1].style.color = "#006931";
                password.style.border = "2px solid #006931";
                document.getElementById("password_error").style.color = "#006931";
                document.getElementById("password_error").innerHTML = "Done";
            }
        }
    }
    const validpasswordfocus = () => {
        const password = document.getElementById("sign_password");
        password.style.border = "2px solid #7d28c8";
        document.getElementsByClassName("icon")[1].style.color = "#7d28c8";
        document.getElementById("password_error").innerHTML = "";
    }
    
    

    // login popup
    const loginn = (e) => {
        e.preventDefault();
        // let log_btn = document.getElementById("logbtn");
        let login = document.getElementsByClassName("login");
        let form4 = document.getElementById("form4");
        login[0].style.display = "grid";
        form4.classList.remove("animate__zoomOut");
        form4.classList.add("animate__zoomIn");
    }
    const closelogin = (e) => {
        let login = document.getElementsByClassName("login");
        let form4 = document.getElementById("form4");
        if(e.target.id === 'login'){
            form4.classList.remove("animate__zoomIn");
            form4.classList.add("animate__zoomOut");
            setTimeout(function(){
                login[0].style.display = 'none';
            },400);
        }
    }

    // validate
    const validemaillogblur = () => {
        const login_email = document.getElementById("login_email");
        if(login_email.value.length === 0){
            login_email.style.border = "2px solid #B10404";
            document.getElementsByClassName("icon2")[0].style.color = "#B10404";
            document.getElementById("login_email_error").style.color = "#B10404";
            document.getElementById("login_email_error").innerHTML = "Username field is empty";
        }
        else{
            if(login_email.value.indexOf("@gmail.com") !== -1){
                login_email.style.border = "2px solid #006931";
                document.getElementsByClassName("icon2")[0].style.color = "#006931";
                document.getElementById("login_email_error").style.color = "#006931";
                document.getElementById("login_email_error").innerHTML = "Done";
            }
            else{
                login_email.style.border = "2px solid #B10404";
                document.getElementsByClassName("icon2")[0].style.color = "#B10404";
                document.getElementById("login_email_error").style.color = "#B10404";
                document.getElementById("login_email_error").innerHTML = "Email should have @gmail.com";
            }
            
        }
    }

    const validemaillogfocus = () => {
        const login_email = document.getElementById("login_email");
        login_email.style.border = "2px solid #7d28c8";
        document.getElementsByClassName("icon2")[0].style.color = "#7d28c8";
        document.getElementById("login_email_error").innerHTML = "";
    }

    const validlogpasswordfocus2 = () => {
        const login_password = document.getElementById("login_password");
        login_password.style.border = "2px solid #7d28c8";
        document.getElementsByClassName("icon2")[1].style.color = "#7d28c8";
        document.getElementById("login_password_error").innerHTML = "";
    }

    const validlogpasswordblur = () => {
        const login_password = document.getElementById("login_password");
        if(login_password.value.length === 0) {
            document.getElementsByClassName("icon2")[1].style.color = "#B10404";
            login_password.style.border = "2px solid #B10404";
            document.getElementById("login_password_error").style.color = "#B10404";
            document.getElementById("login_password_error").innerHTML = "Password field is empty";
        }
        else{
            if(login_password.value.length < 6 && login_password.value.length > 0) {
                document.getElementsByClassName("icon2")[1].style.color = "#B10404";
                login_password.style.border = "2px solid #B10404";
                document.getElementById("login_password_error").style.color = "#B10404";
                document.getElementById("login_password_error").innerHTML = "Minimum 6 characters are required";
            }
            else{
                document.getElementsByClassName("icon2")[1].style.color = "#006931";
                login_password.style.border = "2px solid #006931";
                document.getElementById("login_password_error").style.color = "#006931";
                document.getElementById("login_password_error").innerHTML = "Done";
            }
        }
    }
  return (
    
    <>
        <main>
            <header>
                <nav>
                    <ul>
                        <img src="images/logo/billing.svg" alt="Logo" />
                    </ul>
                    <ul>
                        <li id="logbtn" onClick={loginn}><a href="/" style={{color: "#9733EE"}}>Login</a></li>
                        <li id="signbtn" onClick={signupp}><a href="/" style={{color: "white"}} >Signup</a></li>
                    </ul>
                </nav>
                <section className="hero">
                    <div>
                        <h1>A supreme star in <span>billing</span> solutions.</h1>
                        <p>Billing System which Recommendation engine, Discount coupons and Vendors Ease.</p>
                        <button id="signbtn2">Get Started</button>
                    </div>
                    <aside className="component-4"></aside>
                    <aside className="component-5"></aside>
                </section>
            </header>
        </main>
        <section className="signup" id="signup" onClick={closesignup}>
            <form id="form" className="animate__animated animate__faster">
                <h3>Signup for a free<br/>Billing account.</h3>
                {/* <p id="username" ><span id="usericon" className="material-symbols-outlined icon">person</span>Username</p>
                <input type="text" className="input" required="required" id="sign_username" placeholder="Darpan Bahadur"/>
                <pre id="username_error"></pre> */}
                <p id="email"><span id="usericon" style={{fontSize: "2.7rem"}} className="material-symbols-outlined icon">alternate_email</span><i id="loader" className="fa-solid fa-spin fa-spinner"></i>Email Address</p>
                <input type="email" ref={signEmailRef} onBlur={validemailblur} onFocus={validemailfocus} className="input" required="required" id="sign_email" placeholder="darpan.bahadur@example.com"/>
                <pre id="email_error"></pre>
                <p id="password"><span id="usericon" style={{fontSize: "2.7rem"}} className="material-symbols-outlined icon">lock</span>Password</p>
                <input type="password" ref={signPasswordRef} onBlur={validpasswordblur} onFocus={validpasswordfocus} className="input" id="sign_password" required="required" placeholder="Must have minimum 6 characters"/>
                <pre id="password_error"></pre>
                <input type="submit" disabled={loading} onClick={handleSubmit} id="register" value="Register" style={{border: "none", background: "#9733EE", color: "white"}}/>
                <aside id="loading"><div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div></aside>
                <a href="/">{error}</a>
            </form>
        </section>
        <section className="login" id="login" onClick={closelogin}>
            <form id="form4" className="animate__animated animate__faster">
                <h3>Login with<br/>Floppy.</h3>
                <p id="email"><span id="usericon" style={{fontSize: "2.7rem"}} className="material-symbols-outlined icon2">alternate_email</span>Email Address</p>
                <input type="email" ref={logEmailRef} className="input" onBlur={validemaillogblur} onFocus={validemaillogfocus} id="login_email" placeholder="janecooper@gmail.com"/>
                <pre id="login_email_error"></pre>
                <p id="password"><span id="usericon" style={{fontSize: "2.7rem"}} className="material-symbols-outlined icon2">lock</span>Password</p>
                <input type="password" ref={logPasswordRef} onBlur={validlogpasswordblur} onFocus={validlogpasswordfocus2} className="input" id="login_password" placeholder="Must have minimum 6 characters"/>
                <pre id="login_password_error"></pre>
                <input type="submit" onClick={loginhandleSubmit} value="Login" style={{border: "none", background: "#9733EE", color: "white"}} id="loginbtn"/>
                <aside id="loading2"><div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div></aside>
                <a href="/">{errorlog}</a>
            </form>
        </section>
    </>
  )
}

export default LandingPage