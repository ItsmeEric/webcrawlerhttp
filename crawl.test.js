const { normalizeURL, getURLsFromHTML } = require("./crawl");
const { test, expect } = require("@jest/globals");

test("normalizeURL strip protocol", () => {
  const input = "https://blog.boot.dev/path";
  const actualOutput = normalizeURL(input);
  const expectedOutput = "blog.boot.dev/path";
  expect(actualOutput).toEqual(expectedOutput);
});

test("normalizeURL strip trailing slash", () => {
  const input = "https://blog.boot.dev/path/";
  const actualOutput = normalizeURL(input);
  const expectedOutput = "blog.boot.dev/path";
  expect(actualOutput).toEqual(expectedOutput);
});

test("normalizeURL capitals", () => {
  const input = "https://BLOG.boot.dev/path";
  const actualOutput = normalizeURL(input);
  const expectedOutput = "blog.boot.dev/path";
  expect(actualOutput).toEqual(expectedOutput);
});

test("normalizeURL strip http", () => {
  const input = "http://blog.boot.dev/path/";
  const actualOutput = normalizeURL(input);
  const expectedOutput = "blog.boot.dev/path";
  expect(actualOutput).toEqual(expectedOutput);
});

test("getURLsFromHTML", () => {
  const inputHTMLBody = `
  <html>
    <body>
      <a href="https://blog.boot.dev/">
        Boot.dev Blog
      </a>
    </body>
  </html>
  `;

  const inputBaseURL = "https://blog.boot.dev";
  const actualOutput = getURLsFromHTML(inputHTMLBody, inputBaseURL);
  const expectedOutput = ["https://blog.boot.dev/"];
  expect(actualOutput).toEqual(expectedOutput);
});
