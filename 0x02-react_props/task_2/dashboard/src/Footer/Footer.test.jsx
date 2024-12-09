import { shallow } from "enzyme";
import Footer from "./Footer";
import { getFooterCopy, getFullYear } from "../utils";

describe("Test: <Footer />", () => {
  const footer = shallow(<Footer />);
  it("render correctly", () => {
    expect(footer.exists()).toBe(true);
  });

  describe("Ckeck Footer has element div", () => {
    const div = footer.find("div");
    it("render correctly", () => {
      expect(div.exists()).toBe(true);
  });

    it("Check div has class App-footer", () => {
      expect(div.hasClass("App-footer")).toBe(true);
    })

    describe("check div has element paragraph", () => {
      const parag = div.find("p");
      expect(parag.exists()).toBe(true);

      it("check paragraph has correct test", () => {
        expect(parag.text()).toBe(`Copyright ${getFullYear()} - ${getFooterCopy(true)}`)
      })
    })
  });
});
