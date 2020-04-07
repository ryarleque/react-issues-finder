import React from "react";
import Ezyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Search component", () => {
    test("renders", () => {
        const wrapper = shallow( <div className="search"/>);
        expect(wrapper.exist()).toBe(true);
    });
});

describe("Validate initial value of isListVisible state", () => {
    test("renders", () => {
        const wrapper = shallow( <div className="list"/> );
        expect(wrapper.state().isListVisible).toEqual(false);
    });
});


