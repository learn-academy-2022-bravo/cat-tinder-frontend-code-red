import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class VampNew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newVamp: {
        name: "",
        age: "",
        enjoys: "",
        image: "",
      },
      submitted: false
    }
  }

  handleInput = (a) => {
    const { newVamp } = this.state
    newVamp[a.target.name] = a.target.value
    this.setState({ newVamp: newVamp })

  }
  handleSubmit = () => {
    this.props.createVamp(this.state.newVamp)
    this.setState({submitted: true})
  }

  render() {
    return(
      <>
        <h2>Vamp New</h2>
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
              type="text"
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
       <Button onClick={this.handleSubmit} name= "submit">
         Submit Vampire
       </Button>
       { this.state.submitted && <Redirect to="/vampindex"/> }
      </>
    )
  }
}
export default VampNew