import React from 'react';
import ReactDOM from 'react-dom/client';

export default function SignUpForm (props)
{
    return(
        <div className='signUp-box'>
            <h2> Sign Up</h2>
            <form className='signUp-form'>
                <label>Email:</label> 
                <input type = "email" placeholder='email'/> <br/>
                <label>Password:</label> 
                <input type = "password" placeholder='password'/> <br/>
                <label>Password:</label>
                <input type = "password" placeholder='confirm password'/> <br/>

                <input type = "checkbox" className='TC'/>I agree to the terms and Conditions <br/>

                <input type = "submit" value = "Sign Up"/> <br/>
            </form>
        </div>
    )
}