const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// Inquirer package for questions/answers and fs to write the html
const inquirer = require('inquirer');
const fs = require('fs');
const generatedTeamProfile = './dist/generateProfile.html';
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
    let manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNum);
    employees.push(manager)
    selectTeam(answers.action);
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
    let engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.githubUsername);
    employees.push(engineer)
    selectTeam(answers.action);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}
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
      name: 'school',
    },
    {
      type: 'list',
      message: 'Which type of team member would you like to add?',
      choices: ['Engineer', 'Intern', 'Done building'],
      name: 'action',
    },
  ])
  .then((answers) => {
    let intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
    employees.push(intern);
    selectTeam(answers.action);
    
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}
  function selectTeam(choice) {
  if (choice === "Engineer") {
    addEngineer();
  } else if (choice === "Intern") {
    addIntern();
  } else if (choice === "Done building" || employees.length == 4) {
    generateHTML();
  }
};


function generateHTML() {
  fs.writeFileSync(generatedTeamProfile, "")
  
};

