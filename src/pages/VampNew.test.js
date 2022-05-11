import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import VampNew from './VampNew'

Enzyme.configure({adapter: new Adapter()})

describe("When the VampNew renders", () => {
    let vampNew
    beforeEach(()=>{
    vampNew = shallow(<VampNew/>)
    })

    it("displays a heading", () => {
        const vampNewHeadingText = vampNew.find("h2").text()
        expect(vampNewHeadingText).toEqual("Vamp New")
    })
    it("displays a form", () => {
        const formGroup = vampNew.find("FormGroup")
        expect(formGroup.length).toEqual(4)
        const formLabel = vampNew.find("Label")
        expect(formLabel.length).toEqual(4)
        const input = vampNew.find("Input")
        expect(input.length).toEqual(4)
      })
})