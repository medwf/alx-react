export const getFullYear = () => new Date().getFullYear();

export const getFooterCopy = (isIndex) =>
  isIndex ? "Holberton School" : "Holberton School main dashboard";

export function getLatestNotification() {
  return "<strong>Urgent requirement</strong> - complete by EOD";
}
