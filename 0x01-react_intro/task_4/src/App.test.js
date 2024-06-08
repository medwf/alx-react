// src/App.test.js
import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("<App />", () => {
  it("renders a div with the class App-header", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App-header").length).toBe(1);
  });
});
