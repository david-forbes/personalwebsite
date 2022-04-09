import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import Cookies from 'universal-cookie';
import RouteSwitch from "./RouteSwitch";
import App from './App';
import About from './About';
import styles from './style.css'; 
import { isContentEditable } from '@testing-library/user-event/dist/utils';

const container = document.getElementById('root');
const root = createRoot(container);
class Index extends Component {
  constructor(props) {
    super(props);
  
    
    const container = document.getElementById('root');
    let root =container;
    this.handleChange=this.handleChange.bind(this);
    const cookies = new Cookies();
    console.log(cookies.get("lightMode"));
    if (cookies.get("lightMode")=="true"){
      this.state={
        isChecked:true
      }
      const container = document.getElementById('root');
    let root =container;
    this.lightMode(root);
    console.log("worked");
    }else{
      
    this.state={
      isChecked:false

    }}
    
    
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
    console.log(this.state.isChecked)
    const cookies = new Cookies();
    if(!this.state.isChecked){
      this.lightMode(root)
      
      cookies.set('lightMode', true, {secure: true, sameSite: 'none'});
      
  }
    else{
      this.darkMode(root)
      cookies.set('lightMode', false, {secure: true, sameSite: 'none'});
      
    }
    

  }

  
    render(){
      return(
<header className = "topnav">
        <a href="/"><img className = "img1" src="https://cdn4.iconfinder.com/data/icons/software-line/32/software-line-02-512.png"></img></a>
        <a href="/about">ABOUT</a>
  <a href="/profile">SERVICES</a>
  <a href="#">CLIENTS</a>
  <a href="https://www.github.com/david-forbes">GITHUB</a>
  <label className="switch" id="sw">
  <input type="checkbox" id="checkbox" className='checkbox'
  
  checked={this.state.isChecked}
  onChange={this.handleChange} 
  
  >
  </input>
  
  <span className="slider"></span>
</label>
          </header>
      );
    }
  }
  
    document.title=  "davidforbes.dev"
    


root.render(
  
  
  <div>
    
  <Index/>
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>
  
  </div>
);

