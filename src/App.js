import React, { Component } from 'react';
import Home from './Containers/Home';

import About from './Containers/About';
import './App.css';
import Layout from './Components/Layout/Layout';
import {Route,Switch} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Layout>
        <header className="App-header">
                  <Switch>

                       
                        <Route path="/about" exact component={About}/>
                        <Route path="/" exact component={Home}/>
                        

                  </Switch>
        </header>
        </Layout>
      </div>
    );
  }
}

export default App;
