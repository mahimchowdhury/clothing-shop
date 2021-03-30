import React from 'react';

import './signin-signup.style.scss';

import SignIn from '../../components/signin/signin.component'
import SignUp from '../../components/signup/signup.components'


const SigninSignup = () =>(
    <div className ="signinsignup">
        <SignIn />
        <SignUp />
    </div>
    
)

export default SigninSignup;