import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";

import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shoppage/shop.components';
import Header from './components/header/header.component';
import SigninSignup from './pages/signin-signup/signin-signup.component'

import { auth } from "../src/firebase/firebase.utils";

class App extends React.Component{
  constructor(){
    super()
    this.state ={
      currentUser :null
    }
  }
  unSubscribeFromAuth = null;
  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged( user =>{
      this.setState({currentUser:user});

      console.log(user);
    })
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render(){
    return (
      <div >
        <Header currentUser = {this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/shop' component={ShopPage} />
          <Route  path='/signin' component={SigninSignup} />
        </Switch>
        
      </div>
    ); 
  } 
}

export default App;
