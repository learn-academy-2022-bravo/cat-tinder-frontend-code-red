import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import VampIndex from './VampIndex'

Enzyme.configure({adapter: new Adapter()})

describe("When the Index renders", () => {
    it("displays a heading", () => {
        const header = shallow(<VampIndex />)
        const headerVampIndex = header.find("h2").text()
        expect(headerVampIndex).toEqual("Vamp Index")
    })
})