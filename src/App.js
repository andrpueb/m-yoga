import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render(
  ) {
    return (
      <div className="App">
        <header>
          <div id="logo">
            <h2 className="middle">Moon Yoga</h2>
          </div>
          <nav>
            <ul>
              <li><a className='dropdown-trigger' href='#' data-target='dropdown1'>classes</a></li>
              <ul id='dropdown1' className='dropdown-content'>
                <li><a href="#">This is a test</a></li>
              </ul>
              <li><a href="#">blog</a></li>
              <li><a href="#">contact</a></li>
            </ul>
          </nav>
        </header>
        <div className="wrapper-one s12 m2 z-depth-5">
          <div className="wrapper-two">
            <div className="row center">
              <div className="col s3 card">card one</div>
              <div className="col s3 card">card two</div>
              <div className="col s3 card">card three</div>
            </div>
          </div>
        </div>
      </div>
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



