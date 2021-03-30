import React from 'react';

import './signin.style.scss';
import FormInput from "../form-input/from-input.component";
import CustomButton from "../custom-buttom/custom-button.component";
import { auth,signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }
    handleSubmit = async e =>{
        e.preventDefault();
        const {email ,password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''});
        }catch(err){
            console.log(err);
        }
        

    }
    handelChange = e =>{
        const {name , value} = e.target;
        this.setState({[name]:value});
    }

    render(){
        return(
            <div className="sign-in">
                <h1>I already have an account</h1>
                <span>Sign In with your email and password</span>
                <form action="" onSubmit ={this.handleSubmit}>
                    <FormInput type="email" label= 'Email' name= "email" value = {this.state.email} handelChange ={this.handelChange} required/>
                    <FormInput type="password" label= 'Password' name= "password" value = {this.state.password} handelChange ={this.handelChange} required/>
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton isGoogleSignIn onClick = {signInWithGoogle}>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn;  