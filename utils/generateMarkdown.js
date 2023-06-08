// Function that returns a license badge based on which license is passed in

function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `
  ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } else {
    return '';
  }
};

// Function that returns the license link
function renderLicenseLink(license) {
  if (license !== 'do not use license') {
    return`
    [${license}] - (https://choosealicense.com/licenses/${license})`
  } else {
    return '';
  }
};

// Function that returns the license section of README

function renderLicenseSection(license) {
  if (license !== 'do not use license') {
    return `
  ## license

  The license covering this project is ${renderLicenseLink(license)}`;
  } else {
    return '';
  }
};

// Adds license to the table of contents if the user wants to use one 
function TOCLicense(license) {
  if (license !== 'do not use license') {
    return `
  * [License](#license)`;
  } else {
    return '';
  }
};

// Adds the contributor section if the user chooses to allow contributors
function contributorsSec(contConfirm, data) {
  if (!contConfirm) {
    return ''
  } else {
    return `${data}`;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
