// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import Header from './Header'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter()})

describe("When Header renders", () => {
    it("displays a heading", () => {
      const header = shallow(<Header />)
      const headerHeading = header.find("NavLink").at(1).text()
      expect(headerHeading).toEqual("Meet the Vampires")
    })
    it("shows 4 NavItems", () => {
        const renderedHeader = shallow(<Header />)
    
        const renderedNavItems = renderedHeader.find("NavItem")
    
        expect(renderedNavItems.length).toEqual(4)
  })
})