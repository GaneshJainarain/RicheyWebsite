import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Photos from './components/pages/Photos';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/About' exact component={About}/>
        <Route path='/Photos' exact component={Photos}/>
      </Switch>
    
    </Router>
  );
}

export default App;
