const inquirer = require("inquirer");
const Employee = require("../TemplateEngine_EmployeeSummary/lib/Employee");
const Intern = require("../TemplateEngine_EmployeeSummary/lib/Intern");
const Manager = require("../TemplateEngine_EmployeeSummary/lib/Manager");
const Engineer = require("../TemplateEngine_EmployeeSummary/lib/Engineer");

promptManager().then(function(value){
  let m = new Manager(value.name, value.id, value.email, value.officeNumber)
  console.log(m)
  if (value.firstEmployee === true){
    createAnotherEmployee()
  }
})

function createAnotherEmployee(){
promptUser().then(function(value){
  let e = new Employee(value.name, value.id, value.email)
  console.log(e)
  if(value.role === "Intern"){
    promptIntern().then(function(value){
      let i = new Intern(e.name, e.id, e.email, value.school)
      console.log(i)
      if(value.anotherEmployee === true){
        createAnotherEmployee()
      }
    })
  }
  else{
    promptEngineer().then(function(value){
      let en = new Engineer(e.name, e.id, e.email, value.gihub)
      console.log(en)
      if(value.anotherEmployee === true){
        createAnotherEmployee()
      }
    })
  }
})}

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your employee's name?"
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
      choices: ["Engineer", "Intern"]
    }
  ])
}

function promptIntern() {
  return inquirer.prompt([
    {
      type: "input",
      name: "school",
      message: "what is your school?"
    },
    {
      type: "confirm",
      name: "anotherEmployee",
      message: "Would you like to add another employee?"
    }
  ])
}

function promptManager() {
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
      type: "input",
      name: "officeNumber",
      message: "what is your office?"
    },
    {
      type: "confirm",
      name: "firstEmployee",
      message: "Would you like to add an employee?"
    }
  ])
}

function promptEngineer(){
  return inquirer.prompt([
    {
      type:"input",
      name: "gihub",
      message: "what is your github?"
    },
    {
      type: "confirm",
      name: "anotherEmployee",
      message: "Would you like to add another employee?"
    }
  ])
}