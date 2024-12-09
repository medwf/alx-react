import Notification from "./Notifications";
import { shallow } from "enzyme";
import { handleClick } from "../utils";
import imageSrc from "./32178.png";

describe("Test component <Notification />", () => {
  const notification = shallow(<Notification />);

  it("render correctly", () => {
    expect(notification.exists()).toBe(true);
  });

  describe("Render with div", () => {
    const div = notification.find("div");
    it("render correctly", () => {
      expect(div.exists()).toBe(true);
    });

    it("render with correct className", () => {
      expect(div.hasClass("Notification")).toBe(true);
    });

    describe("Render with a button.", () => {
      const button = div.find("button");

      it("render correctly", () => {
        expect(button.exists()).toBe(true);
      });

      it("With correct Props", () => {
        expect(button.prop("aria-label")).toBe("Close");
        expect(button.prop("onClick")).toBe(handleClick);
      });

      describe("Render with <img/>", () => {
        const image = button.find("img");

        it("render correctly", () => {
          expect(image.exists()).toBe(true);
        });

        it("render with correct img", () => {
          expect(image.prop("src")).toBe(imageSrc);
        });

        it("render with correct style", () => {
          expect(image.prop("style")).toStrictEqual({ height: 17, width: 17 });
        });
      });
    });

    describe("Render with correct paragraph", () => {
      const pr = div.find("p");

      it("render correctly", () => {
        expect(pr.exists()).toBe(true);
      });

      it("has correct text", () => {
        expect(pr.text()).toBe("Here is the list of notifications");
      });
    });

    describe("Render with correct unorder list", () => {
      const unOrderList = div.find("ul");

      it("render correctly", () => {
        expect(unOrderList.exists()).toBe(true);
      });

      describe("has a 3 NotificationItems", () => {
        const notificationItems = unOrderList.find("NotificationItem");

        it("render correctly", () => {
          expect(notificationItems.length).toBe(3);
        });

        it("test first NotificationItem", () => {
          const notificationItem = notificationItems.at(0);
          expect(notificationItem.exists()).toBe(true);

          expect(notificationItem.prop("type")).toBe("default");
          expect(notificationItem.prop("value")).toBe("New course available");
        });
      });
    });
  });
});
