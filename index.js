const oct = require("octokit");
const fs = require("fs");
const _path = require("path");
const _url = require("url");
const urlTemplate = require("url-template");
const octokit = new oct.Octokit({ auth: process.env.GH_TOKEN });

const FILE_NAME = "calc_1.0.0_x64.dmg";
const filePath = _path.join(
  __dirname,
  "/src-tauri/target/release/bundle/dmg",
  FILE_NAME
);

async function main() {
  let epoch = Date.now();
  let dt = new Date(epoch);

  const {
    data: { id: releaseId, upload_url: uploadUrl },
  } = await octokit.request("POST /repos/antimatter96/progress/releases", {
    tag_name: `auto-build-${epoch}`,
    name: `Build - ${dt.toLocaleString()}`,
  });

  const url = urlTemplate.parse(uploadUrl).expand({
    name: FILE_NAME,
  });
  const size = fs.statSync(filePath).size;

  await octokit.request({
    method: "post",
    url: url,
    headers: {
      Accept: "application/vnd.github.v3+json",
      Authorization: `token ${process.env.GH_TOKEN}`,
      "Content-Type": "text/plain",
      "Content-Length": size,
    },
    data: fs.createReadStream(filePath),
  });
}

main();
