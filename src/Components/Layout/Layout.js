import React from 'react';
import Aux from '../../hoc/Auxiliary.js';

import Toolbar from '../Toolbar/Toolbar';


const layout =(props) => (
    <Aux>
 <Toolbar/>
 <main>
     {props.children}
 </main>
 </Aux>
);

export default layout;