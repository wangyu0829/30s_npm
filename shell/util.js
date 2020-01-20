const fs = require('fs');
const writeFile = async (fileName, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, content, err => {
      if (err) {
        reject();
        console.log(JSON.stringify(err.message));
      }
      resolve();
    });
  });
};

const appendFile = async (fileName, content) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(fileName, content, err => {
      if (err) {
        reject();
        console.log(JSON.stringify(err.message));
      }
      resolve();
    });
  });
};

const timeout = duration =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, duration);
  });

module.exports = {
  writeFile,
  appendFile,
  timeout
};
