const createTeam = employees => {

    const createManager = manager => {
    return `
    <div class="employeeCard">
    <div class="employeeTitle">
        <h3>${manager.getName()} - ${manager.getRole()} <i class="fas fa-user-tie"></i></h3>
    </div>
    <div class="employeeBody">
        <ul>
            <li>ID: ${manager.getId()}</li>
            <li>Email: <a href="mailto:${manager.getEmail()}" target="_blank" rel="noopener noreferrer">${manager.getEmail()}</a></li>
            <li>Office Number: ${manager.getOfficeNum()}</li>
        </ul>
    </div>
</div>`
    }
    const createEngineer = engineer => {
        return `
        <div class="employeeCard">
        <div class="employeeTitle">
            <h3>${engineer.getName()} - ${engineer.getRole()} <i class="fas fa-file-export"></i></h3>
        </div>
        <div class="employeeBody">
        <ul>
            <li>ID: ${engineer.getId()}</li>
            <li>Email: <a href="mailto:${engineer.getEmail()}" target="_blank" rel="noopener noreferrer">${engineer.getEmail()}</a></li>
            <li>Github:<a href="github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>`
    }
    const createIntern = intern => {
        return `
        <div class="employeeCard">
        <div class="employeeTitle">
            <h3>${intern.getName()} - ${intern.getRole()} <i class="fas fa-phone"></i></h3>
        </div>
        <div class="employeeBody">
            <ul>
                <li>ID: ${intern.getId()}</li>
                <li>Email: <a href="mailto:${intern.getEmail()}" target="_blank" rel="noopener noreferrer">${intern.getEmail()}</a></li>
                <li>School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>`
    }
    const HTML = [];

    HTML.push(employees
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => createManager(manager))
    );
    HTML.push(employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => createEngineer(engineer))
        .join("")
    );
    HTML.push(employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => createIntern(intern))
        .join("")
    );

    return HTML.join("");
}

const generateFinalHtml = employees => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="../src/generatedProfile.css">
        <script src="https://kit.fontawesome.com/3708f4dee4.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <div class="navBar">
            <h1 class="navBarTitle">The Team</h1>
        </div>
        <div class="container">
             ${createTeam(employees)}
            </div>
        </div>
    </div>
</body>
</html>`
  };
  module.exports = generateFinalHtml;