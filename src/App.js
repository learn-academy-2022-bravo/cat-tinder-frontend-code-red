import React, { Component } from 'react'
import './App.css'
import vamps from './mockVamps.js'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Footer from './components/Footer'
import Header from './components/Header'

import VampEdit from './pages/VampEdit'
import VampIndex from './pages/VampIndex'
import VampNew from './pages/VampNew'
import VampShow from './pages/VampShow'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/vampedit" component={VampEdit} />
      <Route path="/vampindex" component={VampIndex} />
      <Route path="/vampnew" component={VampNew} />
      <Route path="/vampshow" component={VampShow} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </Router>
  );
}

export default App;
