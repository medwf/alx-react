import Notification from "./Notifications";
import { shallow } from "enzyme";
import { handleClick } from "../utils";
import imageSrc from "./32178.png";

describe("Test <Notification (false|true)/>", () => {
  const notificationFalse = shallow(<Notification />);
  const notificationTrue = shallow(<Notification displayDrawer={true} />);

  it("Render both correctly", () => {
    expect(notificationFalse.exists()).toBe(true);
    expect(notificationTrue.exists()).toBe(true);
  });

  describe("Render with div.menuItem", () => {
    const divMenuFs = notificationFalse.find(".menuItem");
    const divMenuTr = notificationTrue.find(".menuItem");

    it("render correctly by defaut with displayDrawer=false", () => {
      expect(divMenuFs.exists()).toBe(true);
    });

    it("render correctly by defaut with displayDrawer=true", () => {
      expect(divMenuTr.exists()).toBe(true);
    });

    const parMenuFs = divMenuFs.find("p");
    const parMenuTr = divMenuTr.find("p");
    it("has a paragraph for both", () => {
      expect(parMenuFs.exists()).toBe(true);
      expect(parMenuTr.exists()).toBe(true);
    });

    it("paragraph has a correct text for both", () => {
      expect(parMenuFs.text()).toBe("Your notifications");
      expect(parMenuTr.text()).toBe("Your notifications");
    });
  });

  describe("Render with div.Notification", () => {
    const divNotification = notificationTrue.find(".Notification");

    it("render correctly", () => {
      expect(notificationTrue.exists()).toBe(true);
    });

    it("render with correct className", () => {
      expect(divNotification.hasClass("Notification")).toBe(true);
    });

    describe("Render with a button.", () => {
      const button = divNotification.find("button");

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
      const pr = divNotification.find("p");

      it("render correctly", () => {
        expect(pr.exists()).toBe(true);
      });

      it("has correct text", () => {
        expect(pr.text()).toBe("Here is the list of notifications");
      });
    });

    describe("Render with correct unorder list", () => {
      const unOrderList = divNotification.find("ul");

      it("render correctly", () => {
        expect(unOrderList.exists()).toBe(true);
      });

      describe("has a 3 NotificationItems", () => {
        const notificationItems = unOrderList.find("NotificationItem");

        it("render correctly", () => {
          expect(notificationItems.length).toBe(1);
        });
      });
    });
  });
});
