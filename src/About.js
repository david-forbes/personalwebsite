

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
            <div className='content aboutPage'>

                <h1>
                    About Me
                </h1>
                <p>
                Hi, my name is David Forbes. I am currently studying mathematics in UCD, as well as learning 
                programming. I have experience with both front and back end web development, creating android apps with java, 
                as well as with both python and c. You can get in touch with me at davidforbescontact@gmail.com.

                </p>
            </div>
        );

    }

}
export default About;