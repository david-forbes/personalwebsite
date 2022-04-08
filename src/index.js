import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import RouteSwitch from "./RouteSwitch";
import App from './App';
import styles from './style.css'; 

const container = document.getElementById('root');
const root = createRoot(container);
class Index extends Component {
  constructor(props) {
    super(props);
  
    
    const container = document.getElementById('root');
    let root =container;
    this.handleChange=this.handleChange.bind(this);
    this.state={
      isChecked:"false"
    }
    
  }
  lightMode(root){
    
    
   
      root.style.setProperty("--main-color","white");
      root.style.setProperty("--highlight","black");
      root.style.setProperty("--if-black","0%");
      root.style.setProperty("--if-white","100%");
  }
  darkMode(root){
    
      
      root.style.setProperty("--main-color","black");
      root.style.setProperty("--highlight","white");
      root.style.setProperty("--if-black","100%");
      root.style.setProperty("--if-white","0%");

  }
 
  handleChange(){
    
    this.setState({isChecked:!this.state.isChecked});
    
    const container = document.getElementById('root');
    let root =container;
    
    if(this.state.isChecked){
      this.lightMode(root)
      
      
  }
    else{
      this.darkMode(root)
      
    }
    

  }

  
    render(){
      return(
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
  
  >
  </input>
  
  <span className="slider"></span>
</label>
          </header>
      );
    }
  }


root.render(
  
  <div>
    {/*
        <header className = "topnav">
        <a href="#"><img className = "img1" src="https://cdn4.iconfinder.com/data/icons/software-line/32/software-line-02-512.png"></img></a>
        <a href="#">ABOUT</a>
  <a href="/profile">SERVICES</a>
  <a href="#">CLIENTS</a>
  <a href="#">CONTACT</a>
  <label className="switch" id="sw">
  <input type="checkbox" 
  
  checked={Index.isChecked}
  onChange={Index.handleChange} 
  
  >
  </input>
  
  <span className="slider"></span>
</label>
          </header>
*/    }
  <Index/>
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>
  </div>
);

