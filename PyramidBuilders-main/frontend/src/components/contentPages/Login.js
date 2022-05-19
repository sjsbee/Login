import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { Form,FormGroup } from "react-bootstrap";


const backdropVariants = {
    expanded: {
        width: '233%',
        height: '1050px',
        borderRadius: '20%',
        transform: 'rotate(60deg)',
    },
    collapsed: {
        width: '160%',
        height: '550px',
        borderRadius: '50%',
        transform: 'rotate(60deg)',
    }
}

const Login = () => {

    return (  
        <div className="App">
        <div className="Box">
            <div className="HeaderContainer">
            <div className="HeaderText">
            Welcome!
                        </div>
                        <div className="small">
                            Please sign-in to continue!
                        </div>
                    </div>    
            <div className="Backdrop">
                <div className="Top">
                </div>
            </div>
            <div className="Form Form FormClass">
                    <input type="email" name="email" className="Input email" placeholder="Enter Your Email" required/>
            <input type="password" name="psw" className="Input password" placeholder="Enter Your Password" required/>
            </div>
            <div className="MutedText">Forgot Your Password?</div>
                <button type="submit" name="btn" className="SubmitButton">Log In</button>
            <Link to="/register" className="MutedText">Don't have an account? </Link>
         
        </div>
    </div>
    )
}

export default Login