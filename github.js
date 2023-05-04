const https = require("https");

function getRepos(username, done) {
  const options = {
    hostname: "api.github.com",
    path: `/users/${username}/repos`,
    headers: { "User-Agent": "get-repos-list" },
  };

  https.get(options, (res) => {
    console.log(res.statusCode, res.statusMessage);
    console.log(res);
  });
}

module.exports = { getRepos };
