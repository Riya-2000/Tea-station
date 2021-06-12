import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import Skills from './Skills'
import About from './About'
import Products from './Products'
import Services from './Services'
import Contact from './Contact'
import Footer from './Footer'
import {BrowserRouter as Router, Route} from 'react-router-dom'

ReactDOM.render(
  <>
    <Router>
      <Route path="/">
      <Home/>
      </Route>
      <Route exact path="/">
        <Skills/>
        <About/>
        <Products/>
        <Services/>
        <Contact/>
      </Route>
      <Route path="/skills">
        <Skills/>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/products">
        <Products/>
      </Route>
      <Route path="/services">
        <Services/>
      </Route>
      <Route path="/contact">
        <Contact/>
      </Route>
      <Route path="*">
        <Footer/>
      </Route>
    </Router>
  </>,
  document.getElementById('root')
);

