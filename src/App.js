import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shoppage/shop.components';
import Header from './components/header/header.component';
import SigninSignup from './pages/signin-signup/signin-signup.component';
import  {setCurrentUser} from "./redux/user/user.action";
import { auth , createUserProfileDocument, firestore } from "../src/firebase/firebase.utils";

class App extends React.Component{
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render(){
    return (
      <div >
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/shop' component={ShopPage} />
          <Route  path='/signin' component={SigninSignup} />
        </Switch>
        
      </div>
    ); 
  } 
}
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
