import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App component", () => {
  it("render with crashing", () => {
    const app = shallow(<App />);
    console.log(app);
    expect(app.find(".App-header").length).toBe(1);
  })
})
