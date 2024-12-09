import App from "./App";
import { shallow } from "enzyme";

describe("Test <App/>", () => {
  const app = shallow(<App />);

  it("render correctly", () => {
    expect(app.exists()).toBe(true);
  });

  it("test CourseList is not render", () => {
    const coursesList = app.find("CourseList");
    expect(!coursesList.exists()).toBe(true);
  });

  describe("When isLoggedIn is true", () => {
    const app_2 = shallow(<App isLoggedIn={true} />);

    it("render correctly!", () => {
      expect(app_2.exists()).toBe(true);
    });

    it("check CourseList is render", () => {
      const coursesList_2 = app_2.find("CourseList");
      expect(coursesList_2.exists()).toBe(true);
    });
    it("check Login is not render", () => {
      const login = app_2.find("Login");
      expect(login.exists()).toBe(false);
    });
  });
});
