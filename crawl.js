const { JSDOM } = require("jsdom");

function getURLsFromHTML(htmlBody, baseURL) {
  const urls = [];
  const dom = new JSDOM(htmlBody);
  const linkElements = dom.window.document.querySelectorAll("a");

  for (const linkElement of linkElements) {
    if (linkElement.href.slice(0, 1) === "/") {
      // relative url
      urls.push(`${baseURL}${linkElement.href}`);
    } else {
      // absolute url
      urls.push(linkElement.href);
    }
  }
  return urls;
}

function normalizeURL(url) {
  const urlObj = new URL(url);

  const hostPath = `${urlObj.hostname}${urlObj.pathname}`;

  return hostPath.length > 0 && hostPath.slice(-1) === "/"
    ? hostPath.slice(0, -1)
    : hostPath;
}

module.exports = {
  normalizeURL,
  getURLsFromHTML,
};
