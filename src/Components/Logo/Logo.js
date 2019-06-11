import React from 'react';
import gitLogo from '../../assets/gitLogo.png';
import classes from './Logo.module.css'

const logo =(props) =>(
    <div className={classes.Logo}>
        <img src={gitLogo} alt="Git"/>
    </div>
);

export default logo;