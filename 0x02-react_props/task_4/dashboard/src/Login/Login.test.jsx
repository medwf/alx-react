import Login from "./Login";
import { shallow } from "enzyme";

describe("Test : <Login />", () => {
  const login = shallow(<Login />);

  it("renders component correctly", () => {
    expect(login.exists()).toBe(true);
  });

  describe("Check login has element div", () => {
    const div = login.find("div");
    it("Ckeck div has class: App-body", () => {
      expect(div.hasClass("App-body")).toBe(true);
    });
    it("elemet p has correct text", () => {
      const parag = div.find("p");
      expect(parag.text()).toBe("Login to access the full dashboard");
    });

    describe("Ckeck Elemet form", () => {
      const form = div.find("form");
      it("render elemet form correctly", () => {
        expect(form.exists()).toBe(true);
      });

      it("Ckeck label Email", () => {
        const labelEmail = form.find("label[htmlFor='Email']");
        expect(labelEmail.exists()).toBe(true);
        expect(labelEmail.text()).toBe("Email:");
      });

      it("Ckeck input Email", () => {
        const inputEmail = form.find("#Email");
        expect(inputEmail.exists()).toBe(true);
        expect(inputEmail.prop("type")).toBe("text");
        expect(inputEmail.prop("name")).toBe("Email");
      });

      it("Check label password", () => {
        const labelPass = form.find("label[htmlFor='Password']");
        expect(labelPass.exists()).toBe(true);
        expect(labelPass.text()).toBe("Password:");
      });

      it("Check input password", () => {
        const inputPassword = form.find("#Password");
        expect(inputPassword.exists()).toBe(true);
        expect(inputPassword.prop("type")).toBe("password");
        expect(inputPassword.prop("name")).toBe("Password");
      });

      it("Check button", () => {
        const button = form.find("button");
        expect(button.exists()).toBe(true);
        expect(button.text()).toBe("OK");
      });
    });
  });
});
