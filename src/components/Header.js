import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    return(
      <>
            <Nav className="header-nav">
            <NavItem>
              <NavLink to="/">
              <img src="https://cdn.wallpapersafari.com/52/53/FABsJh.png" className='fangs'/>
              </NavLink>
            </NavItem>
              <NavItem>
                <NavLink to="/vampindex" className="nav-link">Meet the Vampires</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/vampnew" className="nav-link">Add a New Vampire</NavLink>
              </NavItem>
              <NavItem>
                <a target="blank" href="https://www.aspca.org/adopt-pet/adoptable-cats-your-local-shelter" className="nav-link">
                  Adopt a Vampire!
                </a>
              </NavItem>
      </Nav>

      </>
    )
  }
}
export default Header