import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes,Route  }  from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import LogIn from '../LoginPage/LoginPage';

export default function SignUpForm (props)
{    const navigate = useNavigate()
    function handlechange()
    {
      navigate('../');
    }
    return(
        <div className='signUp-box'>
            <h2> Sign Up</h2>
            <form className='signUp-form'>
                <table>
                <tr>
                <td><label>Email:</label></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><input type = "email" placeholder='email'/> <br/></td>
                </tr>
                <tr>
                <td><label>Password:</label></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><input type = "password" placeholder='password'/> <br/></td>
                </tr>
                <tr>
                <td><label>Password:</label></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><input type = "password" placeholder='confirm password'/> <br/></td>
                </tr>
                </table>
                <input type = "checkbox" className='TC'/>I agree to the terms and Conditions <br/>

                <input type = "submit" value = "Sign Up" onClick={handlechange}/> <br/>
            </form>
           
        </div>

        
    );
}