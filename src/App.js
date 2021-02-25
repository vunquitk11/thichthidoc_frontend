import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import common component
import Sidebar from './components/common/Sidebar';
import Header from './components/common/Header';

//import component 
import HomePage from './components/homepage/HomePage';
import ContactPage from './components/contact/ContactPage';
import PostPage from './components/post/PostPage';



const App = () => {

  return (
    <Router>
        <div className="main-wrapper">
            <Header/>
            {/* <Sidebar/> */}
            <Switch>
                <Route exact path="/" component={HomePage}></Route>
                <Route exact path="/contact" component={ContactPage}></Route>
                <Route exact path="/post" component={PostPage}></Route>
            </Switch>
            {/* <div className={"container__loading-spinner" + (loading ? ' show' : '')}>
                <div id="loader_div"></div>
            </div> */}
        </div>
    </Router>
  );
}

export default App;
