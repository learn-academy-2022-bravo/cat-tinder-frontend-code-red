import React, { Component } from 'react'

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
      </>
    )
  }
}
export default VampShow