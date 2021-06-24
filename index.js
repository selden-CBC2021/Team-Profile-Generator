const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// Inquirer package for questions/answers and fs to write the html
const inquirer = require('inquirer');
const fs = require('fs');
const generateTeamProfile = './dist/generateProfile';
let employees = []



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
      message: 'Which type of team member would you like to add?',
      choices: ['Engineer', 'Intern', 'Done building'],
      name: 'action',
    },
  ])
  .then(answers => {
    fs.writeFileSync(generateTeamProfile, "")
  })

function addEngineer() {
  inquirer
    .prompt([
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
      type: 'list',
      message: 'Which type of team member would you like to add?',
      choices: ['Engineer', 'Intern', 'Done building'],
      name: 'action',
    },
  ])
  .then((answers) => {
    generateHTML();
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

  function addIntern() {
    inquirer
      .prompt([
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
    },
    {
      type: 'list',
      message: 'Which type of team member would you like to add?',
      choices: ['Engineer', 'Intern', 'Done building'],
      name: 'action',
    },
  ])
  .then((answers) => {
    generateHTML();
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
  }
}

function generateHTML() {
  fs.writeFileSync(generateTeamProfile, "")
};