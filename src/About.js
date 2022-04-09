

import render from '@testing-library/react';
import Overview from "./components/Overview";
import React, { Component } from "react";
import uniqid from "uniqid";
import styles from './style.css'; 
import ReactDOM from 'react';
import { useState } from 'react';
import Cookies from 'universal-cookie';

class About extends Component{

    render(){
        return(
            <div className='aboutPage'>

                <h1>
                    About Me
                </h1>
                <p>
                Hi, my name is David Forbes. I am currently studying mathematics in UCD, as well as learning 
                programming in my own time. Right now I am focusing on web development, but I also have experience in 
                java making android apps, using python for web scraping, scientific computing and general scripting, 
                as well as a little C experience. You can contact me at davidforbescontact@gmail.com.

                </p>
            </div>
        );

    }

}
export default About;