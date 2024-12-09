import Header from "./Header";
import logo from "./holberton_logo.jpg";
import { shallow } from "enzyme";

describe("<Header />", () => {
  const header = shallow(<Header />);

  it("renders correctly", () => {
    expect(header.exists()).toBe(true);
  });

  it("element header has correct class: App-header", () => {
    expect(header.find("header").hasClass("App-header")).toBe(true);
  });

  it("element img has correct class: App-logo and prop: src, alt", () => {
    expect(header.find("img").hasClass("App-logo")).toBe(true);

    const img = header.find("img");
    expect(img.prop("src")).toBe(logo);
    expect(img.prop("alt")).toBe("logo");
  });

  it("element h1 has correct text", () => {
    expect(header.find("h1").text()).toBe("School dashboard");
  });
});
