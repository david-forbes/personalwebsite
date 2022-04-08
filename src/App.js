

import render from '@testing-library/react';
import Overview from "./components/Overview";
import React, { Component } from "react";
import uniqid from "uniqid";
import styles from './style.css'; 
import ReactDOM from 'react';
import { useState } from 'react';
import Cookies from 'universal-cookie';


class App extends Component {
  constructor(props) {
    super(props);
  /*
    const cookies=new Cookies();
    const container = document.getElementById('root');
    let root =container;
    this.handleChange=this.handleChange.bind(this);
    this.state={
      isChecked:"false"
    }
    
  }
  lightMode(cookies, root){
    
    
   
      root.style.setProperty("--main-color","white");
      root.style.setProperty("--highlight","black");
      root.style.setProperty("--if-black","0%");
      root.style.setProperty("--if-white","100%");
  }
  darkMode(cookies,root){
    
      
      root.style.setProperty("--main-color","black");
      root.style.setProperty("--highlight","white");
      root.style.setProperty("--if-black","100%");
      root.style.setProperty("--if-white","0%");

  }
 
  handleChange(){
    const cookies=new Cookies();
    this.setState({isChecked:!this.state.isChecked});
    
    const container = document.getElementById('root');
    let root =container;
    
    if(this.state.isChecked){
      this.lightMode(cookies, root)
      
      
  }
    else{
      this.darkMode(cookies, root)
      
    }
*/    

  }
  

  render() {
    

  

    return (

      


        /*
        <header className = "topnav">
        <a href="#"><img className = "img1" src="https://cdn4.iconfinder.com/data/icons/software-line/32/software-line-02-512.png"></img></a>
        <a href="#">ABOUT</a>
  <a href="/profile">SERVICES</a>
  <a href="#">CLIENTS</a>
  <a href="#">CONTACT</a>
  <label className="switch" id="sw">
  <input type="checkbox" 
  
  checked={this.isChecked}
  onChange={this.handleChange} 
    ></input>
  
  <span className="slider"></span>
</label>
          </header>*/

<main className="form">
   
<div className="imageal"><img className = "img2"  src="https://expertphotography.b-cdn.net/wp-content/uploads/2017/07/stribes_gone_wild.jpg"></img>
<div className="message">
<h1 className="text">DAVID FORBES</h1>
<div className="prg">
<h2 className="h25">PROGRAMMING</h2>
</div>
<div className = "jav">
  <h2 className="h21">JAVA</h2>
</div>
<div className ="pyt">
  <h2 className="h22">PYTHON</h2>
</div>
<div className="hcj">
  <h2 className="h23">HTML/CSS/JS</h2>
</div>
<div className ="prg2">
<h2 className="h26">PROGRAMMING</h2>
</div>
<div className ="ccc"><h2 className="h24">C</h2>
</div>
</div>
</div>
<div className="cont">
<div className = "flex">
  <div className ="boxo">

      <p className='howd'>WEATHER SCRAPER EMAIL LIST</p>
  </div>
  <div className ="boxo">

  <p className='howd'> PAPER SCRAPER</p>
  

  </div>
  <div className ="boxo">

  <h2
  className='howd'>weather </h2>
  </div>
  <div className ="boxo">

  <h2 className='howd' >scraper</h2>
  </div>

  


</div>
<div className = "flex other" id="ha">
<div className ="boxo">


  </div>
  <div className ="boxo">

  </div>
  <div className ="boxo">

  </div>
  <div className ="boxo">

  </div>
  
</div>
</div>
      
</main>

    );
  }

}

export default App;
  