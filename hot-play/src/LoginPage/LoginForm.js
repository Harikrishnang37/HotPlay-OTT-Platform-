import React from 'react';
import  './Login.css';
export default function LoginForm (props)
{
    return(
        <div className='Login-box'>
            <h2> Login</h2>
            <form className='Login-form'>
                <div className='email-and-password'>
                <table>
                <tr>
                <td>Email:</td>
                <td><input type = "email" placeholder='email'/> <br/></td></tr>
                <tr>
                <td>Password:</td>
                <td><input type = "password"/></td>
                <a className='forgot-password' href='www.google.com'>forgot password !?</a>
                
                </tr>
                </table>
                </div>
                <div className='LoginBtn'>
                <input type = "submit" value = "Log In"/> <br/>
                </div>

                <div className='other-signIn-options'>
                    <button className='login-with-google-btn'>Sign In With  Google</button>
                    <button className=' loginBtn loginBtn--facebook'>Sign In With  Facebook</button>
                </div> 
            
                <div className = "signUp-From-signIn">
                <p>Don't have an Account?</p>
                    <button className='signUp-button-From-signIn'> Sign Up </button>
                </div>

                
                
                
            </form>
        </div>
    )
}