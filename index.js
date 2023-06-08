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



];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
