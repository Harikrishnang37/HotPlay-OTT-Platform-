import {React,useState} from 'react';
import ReactDOM from 'react-dom/client';
import { Routes,Route  }  from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import LogIn from '../LoginPage/LoginPage';

export default function SignUpForm (props)
{   
    const [username,setUser]=useState("")
    const [password,setPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")
    const [isChecked,setIsChecked] = useState(false)
    function handleUser(event)
    {
        setUser(event.target.value)
       // console.log(event.target.value)
    }

    function handlecheck(event)
    {
        setIsChecked(event.target.value)
    }
    function handlePassword(event)
    {
        setPassword(event.target.value)
        // console.log(event.target.value)
    }
    function handle_confirmPassword(event)
    {
        setConfirmPassword(event.target.value)
    }
    
    const navigate = useNavigate()
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
                <td><input type = "email" placeholder='email' onChange={handleUser} value={username}/> <br/></td>
                </tr>
                <tr>
                <td><label>Password:</label></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><input type = "password" placeholder='password' onChange={handlePassword} value={password}/> <br/></td>
                </tr>
                <tr>
                <td><label>Password:</label></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><input type = "password" placeholder='confirm password' onChange={handle_confirmPassword} value={confirmPassword}/> <br/></td>
                </tr>
                </table>
                <input type = "checkbox" className='TC'/>I agree to the terms and Conditions <br/>

                <input type = "submit" value = "Sign Up" onClick={handlechange}/> <br/>
            </form>
           
        </div>

        
    );
}