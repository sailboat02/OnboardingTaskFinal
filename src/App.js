import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Home from './components/Home';
import ContactPage from './components/ContactPage';
import ContactDetails from './components/ContactDetails';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Nav />
          <Switch>
            <Route path ="/About" component = {About}/>
            <Route path ="/Home" component = {Home}/>
            <Route path ="/ContactPage" exact component = {ContactPage}/>
            <Route path ="/ContactDetails/:id" component = {ContactDetails}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
