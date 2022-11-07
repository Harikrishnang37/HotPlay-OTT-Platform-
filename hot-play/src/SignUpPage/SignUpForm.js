import React from 'react';
import ReactDOM from 'react-dom/client';

export default function SignUpForm (props)
{
    return(
        <div className='signUp-box'>
            <h2> Sign Up</h2>
            <form className='signUp-form'>
                <table>
                <tr>
                <td><label>Email:</label></td>
                <td><input type = "email" placeholder='email'/> <br/></td>
                </tr>
                <tr>
                <td><label>Password:</label></td>
                <td><input type = "password" placeholder='password'/> <br/></td>
                </tr>
                <tr>
                <td><label>Password:</label></td>
                <td><input type = "password" placeholder='confirm password'/> <br/></td>
                </tr>
                </table>
                <input type = "checkbox" className='TC'/>I agree to the terms and Conditions <br/>

                <input type = "submit" value = "Sign Up"/> <br/>
            </form>
        </div>
    )
}