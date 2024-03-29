import React from "react";
import "./SignupForm.css";
import Form from "bootstrap";
import { Link } from "react-router-dom";

const SignupForm = () => {
    return (  
        <div className="App">
        <div className="Box">
            <div className="HeaderContainer">
            <div className="HeaderText">
            Welcome! <br />
                        </div>
                        <div className="small">
                            Please sign up to continue!
                        </div>
                    </div>    
            <div className="Backdrop">
                <div className="Top">
                </div>
            </div>
            <div className="Form form-container">
                    <input type="email" name="email" className="email Input" placeholder="Please enter your email" required/>
                    <input type="text" name="username" className="Input Username" placeholder="Please enter your username" required/>
                    <input type="password" name="psw" className="Input password" placeholder="Please enter your password" required/>
                    <input type="password" name="psw2" className="Input" placeholder="Please confirm your password" required/>
                </div>    
            <div className="MutedText">Forgot Your Password</div>
                <button type="submit" name="btn" className="SubmitButton">Sign Up</button>
                <Link to="/Login" className="MutedText">Already have an account? </Link>
        </div>
    </div>
    )
}
export default SignupForm;