const inquirer = require("inquirer");
const Employee = require("../TemplateEngine_EmployeeSummary/lib/Employee");
const Intern = require("../TemplateEngine_EmployeeSummary/lib/Intern");

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
       name: "role",
       message: "What is your role?",
       choices: ["Manager","Engineer","Intern"]   
      }
    ]);
  }
  promptUser().then (function(value){
  const e = new Employee(value.name,value.id,value.email,value.role)
  console.log(e);
  if(value.role === "Intern"){
    promptIntern().then(function(value){
      console.log(value)
      const i = new Intern(e.name,e.id,e.email,e.role, value.school)
      console.log(i);
    })
  }})
  .catch(function(err) {
    console.log(err)
  })

  
  function promptIntern() {
      return inquirer.prompt([
        {
          type:"input",
          name:"school",
          message:"what is your school?"
        } 
      ])
    };