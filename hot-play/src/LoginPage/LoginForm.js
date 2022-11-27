import React from 'react';
import  './L1.css';
import { useNavigate } from "react-router-dom";


export default function LoginForm (props)
{   const navigate = useNavigate()
    function handlechange()
{
  navigate('Signup');
}
    return(
        <div className='Login-box'>
            <h2> Login</h2>
            <form className='Login-form'>
                <div className='email-and-password'>
                <table>
                <tr>
                <td>Email:</td>
                <td><input type = "email" placeholder='email'style={{width:300}}/> <br/></td></tr>
                <tr>
                <td>Password:</td>
                <td><input type = "password" style={{width:300}}/></td>
                <td><a className='forgot-password' href='www.google.com'>forgot password?</a></td>
                </tr>
                </table>
                </div>
                <div className='LoginBtn'>
                <input type = "submit" value = "Log In" /> <br/>
                </div>

                <div className='other-signIn-options'>
                    <button className='login-with-google-btn'>Sign In With  Google</button>
                    <button className=' loginBtn loginBtn--facebook' style={{width:"max-content"}}>Sign In With  Facebook</button>
                </div> 
            
                <div className = "signUp-From-signIn">
                <p>Don't have an Account?</p>
                    <button className='signUp-button-From-signIn' onClick={handlechange}> Sign Up </button>
                  
                </div>
            </form>
                
        </div>
    )
}