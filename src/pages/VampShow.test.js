import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import VampShow from './VampShow'

Enzyme.configure({adapter: new Adapter()})

describe("When the Show renders", () => {
    it("displays a heading", () => {
        const header = shallow(<VampShow />)
        const headerVampShow = header.find("h2").text()
        expect(headerVampShow).toEqual("Vamp Show")
    })
})