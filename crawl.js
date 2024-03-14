function normalizeURL(url) {
  const urlObj = new URL(url);

  const hostPath = `${urlObj.hostname}${urlObj.pathname}`;

  return hostPath.length > 0 && hostPath.slice(-1) === "/"
    ? hostPath.slice(0, -1)
    : hostPath;
}

module.exports = {
  normalizeURL,
};
