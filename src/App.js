import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'


import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import Classes from './components/Classes'
import Blog from './components/Blog'
import HomeHeader from './components/HomeHeader'
import './App.scss';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/classes" component={Classes} />
          <Route path="/blog" component={Blog} />
        </div>
      </BrowserRouter>
    );
  }
}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("logo").style.padding = "20px 10px";
    document.getElementsByTagName("nav")[0].style.height = "40";

  } else {
    document.getElementById("logo").style.padding = "80px 10px";
    document.getElementsByTagName("nav")[0].style.height = "30";
  }
}


export default App;



