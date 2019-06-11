import React from 'react';
import {NavLink} from 'react-router-dom'; 

import classes from './NavigationItem.module.css';

const navigationItem =(props) => (
<ul className={classes.NavigationItems}>
    <li className={classes.NavigationItem}>
        <NavLink to={props.link}
        exact
        activeClassName={classes.active}>{props.children}</NavLink>
    </li>
</ul>
);

export default navigationItem;