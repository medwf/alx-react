import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe("Test component <CourseListRow />", () => {
  const courseListRow = shallow(<CourseListRow textfirstCell="test_1" />);

  it("render correctly", () => {
    expect(courseListRow.exists()).toBe(true);
  });
});
