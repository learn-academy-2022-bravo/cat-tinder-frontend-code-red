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

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vamps: vamps
    }
  }
  createVamp = (newlyCreatedVamp) => {
    console.log(newlyCreatedVamp)
  }
  updateVamp = (vamp, id) => {
    console.log("vamp:", vamp)
    console.log("id:", id)
  }

  render() {
  return (
    <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route 
        path="/vampedit/:id"  
        render={(props) => {
          let id = +props.match.params.id
          let vamp = this.state.vamps.find(vamp => vamp.id === id)
          console.log(vamp)
          return <VampEdit updateVamp={this.updateVamp} vamp={vamp} />
        }}
      />
      <Route 
        path="/vampindex"  
        render={(props) => <VampIndex vamps={this.state.vamps} />} 
      />
      <Route 
        path="/vampnew" 
        render={() => {return <VampNew createVamp={this.createVamp} />
        }}
     />
      <Route path="/vampshow/:id"  
        render={(props) => {
          let id = +props.match.params.id
          let vamp = this.state.vamps.find(vampObject => vampObject.id === id)
          return <VampShow vamp={vamp}/>
        }} 
      />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </Router>
  );
}
}
export default App
