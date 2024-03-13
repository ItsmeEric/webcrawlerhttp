const { normalizeURL } = require("./crawl");
const { test, expect } = require("@jest/globals");

test("normalizeURL strip protocol", () => {
  const input = "https://blog.boot.dev/path";
  const actualOutput = normalizeURL(input);
  const expectedOutput = "blog.boot.dev/path";
  expect(actualOutput).toEqual(expectedOutput);
});
