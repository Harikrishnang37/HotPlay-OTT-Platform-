import {React,useState} from 'react';
import  './L1.css';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


export default function LoginForm (props)
{   
    const navigate = useNavigate()
    const [username,setUser]=useState("")
    const [password,setPassword]=useState("")
    
     async function handleSubmit(event)
    {   
        event.preventDefault()
        if(username && password)
        {   
             const user_data={name:username,password:password}
            const response=await fetch("http://localhost:8000/user/login",{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({name:username,password:password})
            })
            const data = await response.json()
            console.log(data)
            if(data===null)
                alert("User not found!")
            if(data.name==username && data.password==password)
            {
                setUser("")
                setPassword("")
                navigate('/App',{state:data})
            }
        }
    }

    function handleUser(event)
    {
        setUser(event.target.value)
       // console.log(event.target.value)
    }

    function handlePassword(event)
    {
        setPassword(event.target.value)
        // console.log(event.target.value)
    }

    function handlechange()
    {
        navigate('Signup');
    }

    return(
        <div className='Login-box'>
            <h2> Login</h2>
            <form className='Login-form' onSubmit={handleSubmit}>
                <div className='email-and-password'>
                <table>
                <tbody>
                <tr>
                <td>Email:</td>
                <td><input type = "email" placeholder='email'style={{width:300}} value={username} onChange={handleUser}/> <br/></td></tr>
                <tr>
                <td>Password:</td>
                <td><input type = "password" style={{width:300}} value={password} onChange={handlePassword}/></td>
                <td><div className='forgot-password'><Link to = "forgot-password">forgot password?</Link></div></td>
                </tr>
                </tbody>
                </table>
                </div>
                <div className='LoginBtn'>
                <input className='login_btn' type = "submit" value = "Log In" /> <br/>
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