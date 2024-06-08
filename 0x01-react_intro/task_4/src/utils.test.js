import { getFullYear, getFooterCopy, getLatestNotification } from "./utils.js";

console.log(getFullYear() === 2024);
console.log(getFooterCopy(true) === "Holberton School");
console.log(getFooterCopy(false) === "Holberton School main dashboard");
console.log(
  getLatestNotification() ===
    "<strong>Urgent requirement</strong> - complete by EOD"
);
