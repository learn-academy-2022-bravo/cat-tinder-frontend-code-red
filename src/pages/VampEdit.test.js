import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import VampEdit from './VampEdit'

Enzyme.configure({adapter: new Adapter()})

describe("When the VampEdit renders", () => {
    let vampEdit
    beforeEach(()=>{
    vampEdit = shallow(<VampEdit/>)
    })

    it("displays a heading", () => {
        const vampEditHeadingText = vampEdit.find("h2").text()
        expect(vampEditHeadingText).toEqual("Vamp Edit")
    })
    it("displays a form", () => {
        const formGroup = vampEdit.find("FormGroup")
        expect(formGroup.length).toEqual(4)
        const formLabel = vampEdit.find("Label")
        expect(formLabel.length).toEqual(4)
        const input = vampEdit.find("Input")
        expect(input.length).toEqual(4)
      })
})