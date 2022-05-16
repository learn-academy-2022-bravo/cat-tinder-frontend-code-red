import React, { Component } from 'react'
import './App.css'
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
      vamps: []
    }
  }

  componentDidMount(){
    this.readVampire()
  }
  
  readVampire = () => {
    fetch("http://localhost:3000/vampires")
    .then(response => response.json())
    .then(vampiresArray => this.setState({vamps: vampiresArray}))
    .catch(errors => console.log("Vampire read errors:", errors))
  }

  createVamp = (newlyCreatedVamp) => {
    console.log(newlyCreatedVamp)
    fetch("http://localhost:3000/vampires", {
      body: JSON.stringify(newlyCreatedVamp),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then(() => this.readVampire())
    .catch(errors => console.log("Vampire create errors:", errors))
  }

  updateVamp = (vamp, id) => {
    fetch(`http://localhost:3000/vampires/${id}`, {
      body: JSON.stringify(vamp),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => response.json())
    .then(() => this.readVampire())
    .catch(errors => console.log("Vampire update errors:", errors))
  }

  deleteVamp = (id) => {
    fetch(`http://localhost:3000/vampires/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => response.json())
    .then(() => this.readVampire())
    .catch(errors => console.log("delete errors:", errors))
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
          let id = props.match.params.id
          let vamp = this.state.vamps.find(vampObject => vampObject.id === +id)
          return <VampShow vamp={vamp} deleteVamp={this.deleteVamp}/>
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
