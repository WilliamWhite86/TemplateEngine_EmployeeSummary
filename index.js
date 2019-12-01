const inquirer = require("inquirer");

function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "email",
        message: "What is your email?"
      },
      {
        type: "input",
        name: "id",
        message: "What is your id?",
      },
      {
       type: "list",
       name: "title",
       message: "What is your role?",
       choices: ["Manager","Engineer","Intern"]   
      }
    ]);
  }
  
  promptUser()