const questions = [
  {
    type: "input",
    name: "title",
    message: "Project title?",
  },
  {
    type: "input",
    name: "description",
    message: "How do you describe the project?",
  },
  {
    type: "input",
    name: "installation",
    message: "How to install?",
  },
  {
    type: "input",
    name: "usage",
    message: "How to use?",
  },
  {
    type: "input",
    name: "contribute",
    message: "How will others contribute?",
  },
  {
    type: "input",
    name: "usage",
    message: "How others use this project?",
  },
  {
    type: "input",
    name: "test",
    message: "How to test this project?",
  },
  {
    type: "list",
    name: "license",
    message: "What license type?",
    choices: [
      "BSD-4-Clause",
      "BSD-3-Clause",
      "BSD-2-Clause",
      "BSD-0-Clause",
      "MIT",
      "MPL-2.0",
    ],
    default: 4,
  },
  { type: "input", name: "github_username", message: "Github username?" },
  { type: "input", name: "email", message: "Email address?" },
];

module.exports = questions;
