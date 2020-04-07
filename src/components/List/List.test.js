import React from "react";
import Ezyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("List component", () => {
    test("renders", () => {
        const wrapper = shallow( <div className="list"/> );
        expect(wrapper.exist()).toBe(true);
    });
});


describe("Validate initial value of reactISsuesList props", () => {
    test("renders", () => {
        const wrapper = shallow( <div className="list"/> );
        expect(wrapper.props().reactIssuesList).toEqual([]);
    });
});