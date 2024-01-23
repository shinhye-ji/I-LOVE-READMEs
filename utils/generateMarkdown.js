// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return "";
  } else {
  return ` 
  ![](https://img.shields.io/badge/license-${license}-pink)`
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return "";
  } else {
  return `
If you want to contribute, follow the guidelines [here](https://www.contributor-covenant.org/).`
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return `
## License
This application is licensed by [MIT](https://opensource.org/license/mit/)`;
  } else if (license === 'Apache2.0') {
    return `
## License
This application is licensed by [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)`
  } else if  (license === 'MPL2.0') {
    return `
## License
This application is licensed by [MPL 2.0](https://www.mozilla.org/en-US/MPL/2.0/)`
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `
# ${response.title}

${renderLicenseBadge(response.license)}

## Description

${response.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Collaborators](#collaborators)
- [License](#license)

## Installation

${response.installation}

${renderLicenseSection(response.license)}
${renderLicenseLink(response.license)}

## Usage

${response.usage}

## Collaborators

${response.contributors}

## Tests

${response.test}

## Questions

If you have any questions about this application, feel free to reach me at my [email](${response.email}).
You can also find me on [GitHub](https://github.com/${response.gitHub})
`};

module.exports = generateMarkdown;
