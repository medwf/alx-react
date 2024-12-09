import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe("Test component <NotificationItem />", () => {
  const notificationItems = shallow(<NotificationItem />);
  it("renders correctly", () => {
    expect(notificationItems.exists()).toBe(true);
  });

  describe("render With value=test type=default", () => {
    const notificationItemWithProps = shallow(
      <NotificationItem type="default" value="test" />
    );

    it("render correctly", () => {
      expect(notificationItemWithProps.exists()).toBe(true);
    });

    it("render with correct Props", () => {
      expect(notificationItemWithProps.prop("data-notification-type")).toBe(
        "default"
      );

      expect(notificationItemWithProps.text()).toBe("test");
    });
  });

  describe("render With html Prop", () => {
    const html = { __html: <u>test</u> };
    const notificationItemWithHtml = shallow(<NotificationItem html={html} />);

    it("render correctly", () => {
      expect(notificationItemWithHtml.exists()).toBe(true);
    });
    it("render with correct Prop", () => {
      expect(notificationItemWithHtml.prop("dangerouslySetInnerHTML")).toBe(
        html
      );
    });
  });
});
