import React from 'react';
import  './Login.css';

import TitleBar from './TitleBar';
import LoginForm from './LoginForm';

export default function LogIn (props)
{
    return (
        <div>
            <TitleBar></TitleBar>
            <LoginForm></LoginForm>
        </div>
        
    )
}