const inquirer = require("inquirer");
const Employee = require("../TemplateEngine_EmployeeSummary/lib/Employee");
const Intern = require("../TemplateEngine_EmployeeSummary/lib/Intern");
const Manager = require("../TemplateEngine_EmployeeSummary/lib/Manager");
const Engineer = require("../TemplateEngine_EmployeeSummary/lib/Engineer");

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
      choices: ["Employee", "Manager", "Engineer", "Intern"],
    }
  ]);
}
promptUser().then(function (value) {
  let e = new Employee(value.name,value.id,value.email,value.role)
  console.log(e);
  if (value.role === "Intern") {
    promptIntern().then(function (value) {
      //console.log(value)
      let i = new Intern(e.name,e.id,e.email,value.school)
      console.log(i);
    })
  }
  else if (value.role === "Manager"){
    promptManager().then(function (value){
      let m = new Manager(e.name,e.id,e.id,value.officeNumber)
    })
  }
})
  .catch(function (err) {
    console.log(err)
  })


function promptIntern() {
  return inquirer.prompt([
    {
      type: "input",
      name: "school",
      message: "what is your school?"
    }
  ])
};

function promptManager() {
  return inquirer.prompt([
    {
      type: "input",
      name: "officeNumber",
      message: "what is your office?"
    }
  ])
};