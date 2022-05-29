// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const questions = require('./lib/questions');
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs").promises;

// TODO: Create an array of questions for user input
// moved to lib.js

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const messageTemplate = generateMarkdown(data);
  return fs.writeFile(fileName, messageTemplate);
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.info('a new readme created.');
      return writeToFile("./readme.md", answers);
    })
    .catch((error) => {
      console.debug("Error");
      console.log(error);
    });
}

// Function call to initialize app
init();
