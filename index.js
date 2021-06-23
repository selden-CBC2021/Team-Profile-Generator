const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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
      message: 'Enter the team managers name',
      name: 'managerName',
    },
     {
      type: 'input',
      message: 'Enter the team managers ID',
      name: 'managerId',
    },
     {
      type: 'input',
      message: 'Enter the team managers email',
      name: 'managerEmail',
    },
     {
      type: 'input',
      message: 'Enter the team managers office number',
      name: 'managerOfficeNumber',
    },
    {
      type: 'list',
      message: 'What would you like to do?',
      choices: ['Add an engineer', 'Add an intern', 'Done building'],
      name: 'action',
    },
    {
      type: 'input',
      name: 'engineerGithub',
      message: 'Enter your GitHub Username.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your E-mail address.',
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
   console.error(error)
  });
