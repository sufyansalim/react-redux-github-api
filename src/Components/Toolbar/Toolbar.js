import React from 'react';

import classes from './Toolbar.module.css';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';

import Logo from '../Logo/Logo';

const toolbar =(props) =>(
    <header className={classes.Toolbar}>
        <Logo/>
        <nav>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar