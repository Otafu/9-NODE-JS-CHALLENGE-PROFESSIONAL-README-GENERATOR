// TODO: Create a function that returns a license badge based on which license is passed in
const licenseBadges = require("../lib/license-badges");
const licenseDescriptions = require("../lib/license-descriptions");
const licensedLinks = require('../lib/license-links');

// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if(!license || license === ""){
    return ""
  }
  return licenseBadges[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license || license === ""){
    return "";
  }
  return `[${license}](${licensedLinks[license]})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license || license === ""){
    return ""
  }
  return `**${renderLicenseLink(license)}** : ${licenseDescriptions[license]}`;
}

function generateTableOfContents(data){

    return `## Table of Contents\r--------
    \r1. [Description](#description)
    \r2. [Installation](#installation)
    \r3. [Usage](#usage)
    \r4. [Contributions](#contributions)
    \r5. [Usage](#usage)
    \r6. [Tests](#tests)
    \r7. [License](#licensed)
    \r7. [Questions](#questions)
    `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ${generateTableOfContents(data)}
  ## Description
  ${data.description}<a name='description'></a>
  ## Installation
  ${data.installation}<a name='installation'></a> 
  ## Usage
  ${data.usage}<a name='usage'></a>
  ## Contributions
  ${data.contribute}<a name='contribute'></a>
  ## Usage
  ${data.usage}<a name='usage'></a>
  ## Tests
  ${data.test}<a name='test'></a>
  ## License
  ${renderLicenseSection(data.license)}<a name='license'></a>
  ## Questions
  Github profile **[link](https://github.com/${data.github_username})**
  Or you can reach me via email ${data.email}.
  <a name='questions'></a>
  `;
}

module.exports = generateMarkdown;
