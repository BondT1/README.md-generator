// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Markdown = require('./utils/generateMarkdown');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        validate: title => {
            if (title) {
                return true;
            } else {
                console.log('You must enter a title.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'whatProject',
        message: 'What is your project?',
        validate: projectWhat => {
            if (projectWhat) {
                return true;
            } else {
                console.log('Please enter a description of what your project is.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'projectPurpose',
        message: 'What is the purpose of your project?',
        validate: purpose => {
            if (purpose) {
                return true;
            } else {
                console.log('Please enter the purpose of your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'projectFeatures',
        message: 'What features did you use to create your project? (e.g coding language/features)',
        validate: features => {
            if (features) {
                return true;
            } else {
                console.log('Please enter the features used to create your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide instructions on how to install your project.',
        validate: installation => {
            if (installation) {
                return true;
            } else {
                console.log('You must provide instructions on how to install your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
        validate: usage => {
            if (usage) {
                return true;
            } else {
                console.log('You must provide instructions and examples for use.');
                return false;
            }
        }
    },
    { 
        type: 'list',
        name: 'license',
        message: 'Which license would you like to use for your project?',
        choices: ['mit', 'apache', 'do not use license']
    },
    {
        type: 'confirm',
        name: 'contConfirm',
        message: 'Would you like to enable contributors to your project?'
    },
    



];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
