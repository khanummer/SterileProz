import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import './App.css';
import Home from './Home/Home';
import AboutUs from './AboutUs/AboutUs';
import ContactUs from './ContactUs/ContactUs';
import NavBar from './NavBar/NavBar';

class App extends Component {

  render(){
    return(
      <div>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={() => <Home/>}/>
          <Route exact path="/contact" component={() => <ContactUs/>}/>
          <Route exact path="/aboutus" component={() => <AboutUs/>}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);