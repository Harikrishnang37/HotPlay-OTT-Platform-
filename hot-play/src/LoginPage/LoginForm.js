import React from 'react';

export default function LoginForm (props)
{
    return(
        <div className='Login-box'>
            <h2> Login</h2>
            <form className='Login-form'>
                <div className='email-and-password'>

                Email:
                <input type = "email" placeholder='email'/> <br/>
                Password:
                <input type = "password"/>
                <button className='forgot-password'>Forgot Password</button>

                </div>

                <div className='other-signIn-options'>
                    <button className='google-button'><p>Sign In</p><p> With Google</p></button>
                    <button className='facebook-button'><p>Sign In</p><p> With Facebook</p></button>
                </div>

                <input type = "submit" value = "Log In"/> <br/>
                <div className = "signUp-From-signIn">
                    <p>Don't have an Account?</p>
                    <button className='signUp-button-From-signIn'> Sign Up </button>
                </div>
            </form>
        </div>
    )
}