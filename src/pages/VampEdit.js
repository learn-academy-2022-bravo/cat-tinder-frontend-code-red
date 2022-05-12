import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class VampEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newVamp: {
        name: "",
        age: "",
        enjoys: "",
        image: ""
      },
      submitted: false
    }
  } 
  handleInput = (e) => {
    let { newVamp } = this.state
    newVamp[e.target.name] = e.target.value
    this.setState({newVamp: newVamp})
    console.log(this.state.newVamp)
  }
  handleSubmit = () => {
    this.props.updateVamp(this.state.newVamp, this.props.vamp.id)
    this.setState({submitted: true})
    console.log(this.state.updateVamp)
  }

  render() {
    return(
      <>
        <h2>Vamp Edit</h2>

        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              onChange={this.handleInput}
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">Age</Label>
            <Input
              type="number"
              name="age"
              onChange={this.handleInput}
            />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">Enjoys</Label>
            <Input
              type="text"
              name="enjoys"
              onChange={this.handleInput}
            />
          </FormGroup>
          <FormGroup>
            <Label for="image">Image URL</Label>
            <Input
              type="text"
              name="image"
              onChange={this.handleInput}
            />
          </FormGroup>
        </Form>
        <Button
          name="submit"
          onClick={this.handleSubmit}
        >
          Edit Vampire Profile
        </Button>
        {this.state.submitted && <Redirect to={`/vampshow/${this.props.vamp.id}`} />}
      </>
    )
  }
}
export default VampEdit