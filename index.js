const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// Inquirer package for questions/answers and fs to write the html
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./dist/generateProfile');

/*WHEN I start the application
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated*/

inquirer
  .prompt([
    {
      type: 'input',
      message: "Enter the team manager's name",
      name: 'managerName',
    },
     {
      type: 'input',
      message: "Enter the team manager's ID",
      name: 'managerId',
    },
     {
      type: 'input',
      message: "Enter the team manager's email",
      name: 'managerEmail',
    },
     {
      type: 'input',
      message: "Enter the team manager's office number",
      name: 'managerOfficeNum',
    },
    {
      type: 'list',
      message: 'What would you like to do?',
      choices: ['Add an engineer', 'Add an intern', 'Done building'],
      name: 'action',
    },
    {
        type: 'input',
        message: "Enter the engineer's name",
        name: 'engineerName',
      },
       {
        type: 'input',
        message: "Enter the engineer's ID",
        name: 'engineerId',
      },
       {
        type: 'input',
        message: "Enter the engineer's email",
        name: 'engineerEmail',
      },
      {
        type: "input",
        message: "Enter the engineer's GitHub username",
        name: "githubUsername"
      },
      {
        type: 'input',
        message: "Enter the intern's name",
        name: 'internName',
      },
       {
        type: 'input',
        message: "Enter the intern's ID",
        name: 'internId',
      },
       {
        type: 'input',
        message: "Enter the intern's email",
        name: 'internEmail',
      },
      {
        type: 'input',
        message: "Enter the intern's school",
        name: 'internSchool',
      }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
