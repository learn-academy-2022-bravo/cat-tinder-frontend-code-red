import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'

class VampShow extends Component {
  render () {
    let { vamp } = this.props
    return(
      <>
        <h2>Vamp Show</h2>
        { vamp && 
          <div>
            <p>{vamp.name}</p>
            <p>{vamp.age}</p>
            <p>{vamp.enjoys}</p>
            <img src={vamp.image} width="200px"/>
          </div>
          }
          <NavLink to={`/vampedit/${this.props.vamp.id}`}>
            <Button>Edit Vampire Profile</Button>
          </NavLink>
          <NavLink to="/vampindex">
            <Button onClick={this.props.deleteVamp} name= "submit">
              Delete Vampire Profile
            </Button>
          </NavLink>
      </>
    )
  }
}
export default VampShow