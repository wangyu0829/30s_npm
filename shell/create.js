const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
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

const questions = [
  {
    type: 'rawlist',
    name: 'type',
    message: 'please choose type',
    choices: [
      'Adapter',
      'Array',
      'Browser',
      'Date',
      'Function',
      'Math',
      'Node',
      'Object',
      'String',
      'Type',
      'Utility',
    ],
    validate: function(input) {
      var done = this.async();

      timeout(300).then(res => {
        if (!input) {
          done('You need to choose a type');
          return;
        }
        done(null, true);
      });
    },
  },
  {
    type: 'input',
    name: 'fileName',
    message: 'please named the file you create',
    validate: function(input) {
      var done = this.async();

      timeout(300).then(res => {
        if (!input) {
          done('You need to provide a filename');
          return;
        }
        done(null, true);
      });
    },
  },
  {
    type: 'input',
    name: 'descript',
    message: 'please input the description',
    default: '',
  },
  {
    type: 'input',
    name: 'author',
    message: 'please input the file author',
    default: '',
  },
  {
    type: 'input',
    name: 'content',
    message: 'please input the file content',
    default: '',
  },
];

const appendTmpl = args => `
export { ${args.fileName} } from './${args.fileName}';
`;

const contentTmpl = args => `
/**
 * ${args.fileName}
 * ${args.descript}
 * ${args.author ? 'create by ' + args.author : ''}
 */
${args.content ? 'export ' + args.content : ''}
`;

const prompt = inquirer.createPromptModule();
prompt(questions).then(res => {
  console.log(res);
  const { fileName, descript, author, content, type } = res;

  console.log(type);
  const module = type.toLowerCase();

  let appendFileName = path.resolve(__dirname, `../src/${module}/index.js`);
  let appendText = appendTmpl(res);
  appendFile(appendFileName, appendText);

  const fileReg = /\w.*\.\w.*/;
  let filePath = path.resolve(
    __dirname,
    `../src/${module}/${fileName}${!fileReg.test(fileName) ? '.js' : ''}`,
  );
  let contentText = contentTmpl(res);
  writeFile(filePath, contentText);
});
