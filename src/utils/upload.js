const fs = require("fs");

const onConvertFileName = (linkImage) => {
  return `${linkImage.split("/")[linkImage.split("/").length - 1]}`;
};

const onUrlFile = (host, path) => `http://${host}/${path}`;

const onImagePath = (fileName, subPath = "") =>
  `uploads/${subPath}${Date.now()}$${fileName}`;

const onSaveFile = (path, base64) => {
  fs.writeFileSync(path, Buffer.from(base64.split(",")[1], "base64"));
};

const onDeleteFile = (linkFile, subPath = "") => {
  console.log(onConvertFileName(linkFile));
  return fs.unlinkSync(`uploads/${subPath}${onConvertFileName(linkFile)}`);
};

module.exports = {
  onConvertFileName,
  onUrlFile,
  onImagePath,
  onSaveFile,
  onDeleteFile,
};
