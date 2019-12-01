const inquirer = require("inquirer");

function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?"
      },
      {
        type: "input",
        name: "id",
        message: "What is your id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?"
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