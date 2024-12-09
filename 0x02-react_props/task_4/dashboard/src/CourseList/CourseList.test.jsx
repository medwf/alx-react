import CourseList from "./CourseList";
import { shallow } from "enzyme";

describe("Test <CourseList />", () => {
  const courseList = shallow(<CourseList />);

  it("render correctly", () => {
    expect(courseList.exists()).toBe(true);
  });

  it("render with five CourseListRow", () => {
    const courseListRows = courseList.find("CourseListRow");
    expect(courseListRows.length).toBe(1);
  });
});
