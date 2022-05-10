import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Footer extends Component {
  render() {
    return(
      <Nav className="footer-nav">
        <NavItem>
          <NavLink to="/" className="nav-link">
            &copy; 2022 Amanda and Natalia
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/vampindex" className="nav-link">
            Vampires
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/vampnew" className="nav-link">
            Add a Vampire
          </NavLink>
        </NavItem>
      </Nav>
    )
  }
}
export default Footer