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
    const navigate = useNavigate()
    const show = (id)=>{
       var x = document.getElementById(id);
       x.className = 'show';
       setTimeout(()=>{ x.className = x.className.replace("show", "hidden"); }, 3000);
       

    }

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
    
    async function handlechange(event)
    {
        event.preventDefault()
        if(username && password && confirmPassword)
        {
            if(password.length <8)
            {
                alert("Password should be a minimum of 8 characters")
                show('min_8');
                return
            }
            if(password != confirmPassword)
            {
                alert("Passwords dont match")
                show('dm');
                return
            }
            if(isChecked === false)
            {
                alert("Please agree to the terms and conditions")
                show('t&c');
                return
            }

            const response=await fetch("http://localhost:8000/user/signup",{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({name:username,password:password})
            })
            const data = await response.text()
            console.log(data)

            if(data === "true")
            {
                navigate('../');
            }
            else
            {
                alert("This email is already registered.")
                show('email');
            }
            

            
        }

      //navigate('../');
    }
    return(
        <div className='signUp-box'>
            <h2> Sign Up</h2>
            <form className='signUp-form' onSubmit={handlechange}>
                <table>
                    <tbody>
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
                    </tbody>
                </table>
                <input type = "checkbox" className='TC' onChange={handlecheck} value ={isChecked}/>I agree to the terms and Conditions <br/>

                <input type = "submit" value = "Sign Up" /> <br/>
                <div className='hidden' id='min_8'>Password should be a minimum of 8 characters</div>
                <div className='hidden' id='dm'>Passwords dont match</div>
                <div className='hidden' id='t&c'>Please agree to the terms and conditions</div>
                <div className='hidden'id='email'>This email is already registered</div>
            </form>
           
        </div>

        
    );
}