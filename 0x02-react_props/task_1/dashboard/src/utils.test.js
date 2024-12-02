import { getFullYear, getFooterCopy,getLatestNotification } from "./utils";


test("getLastNotification return correct string", () => {
  const expectedString = "<strong>Urgent requirement</strong> - complete by EOD";
  expect(getLatestNotification()).toBe(expectedString);
});

test("getFullYear return value", () => {
  const expectedYear = new Date().getFullYear()
  expect(getFullYear()).toBe(expectedYear);
});

test("getFooterCopy return value when parameter is true", () => {
  const expectedString = "Holberton School";
  expect(getFooterCopy(true)).toBe(expectedString);
});

test("getFooterCopy return value when parameter is false", () => {
  const expectedString = "Holberton School main dashboard";
  expect(getFooterCopy(false)).toBe(expectedString);
});

