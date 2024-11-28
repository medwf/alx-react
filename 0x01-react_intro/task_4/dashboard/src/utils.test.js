import { getLatestNotification, getFooterCopy, getFullYear } from "./utils";

// test getLastNotification.
test('getlastNotification returns correct string', () => {
  const expectedString = "<strong>Urgent requirement</strong> - complete by EOD";
  expect(getLatestNotification()).toBe(expectedString);
})

// test getFooterCopy.
test('getFooterCopy returns correct string when the argument is true', () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
})

test('getFooterCopy returns correct string when the argument is false', () => {
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
})

// test function getFullYear.
test('getFullYear returns correct year', () => {
  expect(getFullYear()).toBe(new Date().getFullYear());
})

