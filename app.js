const inquirer = require("inquirer");
let employee;

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
  promptUser().then (function(value){
  console.log(value)
  if(value.title === "Intern"){
    promptIntern();
  }})
  
  function promptIntern() {
      return inquirer.prompt([
        {
          type:"input",
          name:"school",
          message:"what is your school?"
        } 
      ])
    };