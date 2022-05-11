import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class VampIndex extends Component {
  render() {
    return(
      <>
        <h2>Vamp Index</h2>
        {this.props.vamps && this.props.vamps.map(vamp => {
          return <NavLink to={`/vampshow/${vamp.id}`} key={vamp.id}>{vamp.name}</NavLink>
        })}
      </>
    )
  }
}
export default VampIndex