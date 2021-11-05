import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import React from "react";
import './App.css';
import Home from "./pages";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import Business from "./pages/Business";
import Course from "./pages/course";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/course' component={Course} />
        <Route path='/text' component={Blogs} />
        <Route path='/business' component={Business} />
        <Route path='/about-us' component={About} />
      </Switch>
    </Router>
  );
}
  
export default App;