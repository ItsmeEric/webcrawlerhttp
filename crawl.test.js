const { normalizeURL } = require("./crawl");
const { test, expect } = require("@jest/globals");

test("normalizeURL", () => {
  const input = "";
  const actualOutput = normalizeURL(input);
  const expectedOutput = "WrongUrl";
  expect(actualOutput).toEqual(expectedOutput);
});
