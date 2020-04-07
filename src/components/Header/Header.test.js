import React from "react";
import Ezyme, { shallow, mount } from "enzyme";
import { SearchBar } from '../SearchBar/SearchBar';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Header component", () => {
    test("renders", () => {
        const wrapper = shallow( <SearchBar/> );
        expect(wrapper.exist()).toBe(true);
    });
});