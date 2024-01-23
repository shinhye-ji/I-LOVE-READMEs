// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please name your project.",
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a short description explaining the purpose and functionality of your project.",
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license for your project.",
        choices: ['MIT', 'Apache2.0', 'MPL2.0', "None"]
    },
    {
        type: "input",
        name: "usage",
        message: "Please share what technologies were used in your project.",
    },
    {
        type: "input",
        name: "gitHub",
        message: "Please provide your GitHub username",
    },
    {
        type: "input",
        name: "name",
        message: "Please provide your full name.",
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide a description of how to get your application running.",
    },
    {
        type: "input",
        name: "email",
        message: "Please provide your email address.",
    },
    {
        type: "input",
        name: "contributors",
        message: "Please include any contributors by providing GitHub usernames.",
        default: "",
    },
    {
        type: "input",
        name: "test",
        message: "Please provide a brief walkthrough on your application.",
    },
];

inquirer.prompt(questions).then((response) => {
    fs.writeFileSync('./utils/README.md', generateMarkdown(response))
});
