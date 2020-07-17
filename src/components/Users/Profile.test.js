import React from 'react'
import {create} from 'react-test-renderer'
import ProfileStatus from "./ProfileStatus";

describe("Profile status component checking", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="hello world"/>)
        const instance =  component.getInstance();
        expect(instance.state.status).toBe("hello world")

    })
})

