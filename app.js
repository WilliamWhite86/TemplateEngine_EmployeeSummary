const inquirer = require("inquirer")
const util = require("util")
const fs = require("fs")
const writeFileAsync = util.promisify(fs.writeFile)
const Employee = require("../TemplateEngine_EmployeeSummary/lib/Employee")
const Intern = require("../TemplateEngine_EmployeeSummary/lib/Intern")
const Manager = require("../TemplateEngine_EmployeeSummary/lib/Manager")
const Engineer = require("../TemplateEngine_EmployeeSummary/lib/Engineer")
const employeeList = []
const generateManagerHTML = require("../TemplateEngine_EmployeeSummary/templates/manager")
const generateInternHTML = require("../TemplateEngine_EmployeeSummary/templates/intern")
const generateEngineerHTML = require("../TemplateEngine_EmployeeSummary/templates/engineer")
const generateMainHTML = require("../TemplateEngine_EmployeeSummary/templates/main")
// promptManager().then(function (value) {
//   let m = new Manager(value.name, value.id, value.email, value.officeNumber)
//   console.log(m)
//   if (value.firstEmployee === true) {
//     createEmployee()
//   }
// })

createEmployee()

function createEmployee() {
  promptUser().then(function (value) {
    let e = new Employee(value.name, value.id, value.email)
    console.log(e)
    if (value.role === "Manager") {
      promptManager().then(function (value) {
        let m = new Manager(e.name, e.id, e.email, value.officeNumber)
        console.log(m)
        employeeList.push(m)
        console.log(employeeList)
        if (value.anotherEmployee === true) {
          createEmployee()
        }
        else {
          generateHTMLbyRole()
        }
      })
    }
    else if (value.role === "Intern") {
      promptIntern().then(function (value) {
        let i = new Intern(e.name, e.id, e.email, value.school)
        console.log(i)
        employeeList.push(i)
        console.log(employeeList)
        if (value.anotherEmployee === true) {
          createEmployee()
        }
        else {
          generateHTMLbyRole()
        }
      })
    }
    else {
      promptEngineer().then(function (value) {
        let en = new Engineer(e.name, e.id, e.email, value.gihub)
        console.log(en)
        employeeList.push(en)
        console.log(employeeList)
        if (value.anotherEmployee === true) {
          createEmployee()
        }
        else{
          generateHTMLbyRole()
        }
      })
    }
  })
}

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the employee name?"
    },
    {
      type: "input",
      name: "id",
      message: "What is the employee id?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the email?",
      validate: value => value.includes("@") && value.includes(".com") ? true : 'email invalid'
    },
    {
      type: "list",
      name: "role",
      message: "What role are we adding?",
      choices: ["Manager", "Engineer", "Intern"]
    }
  ])
}

function promptIntern() {
  return inquirer.prompt([
    {
      type: "input",
      name: "school",
      message: "what is their school?"
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
      name: "officeNumber",
      message: "what is your office?"
    },
    {
      type: "confirm",
      name: "anotherEmployee",
      message: "Would you like to add another employee?"
    }
  ])
}

function promptEngineer() {
  return inquirer.prompt([
    {
      type: "input",
      name: "gihub",
      message: "what is their github?"
    },
    {
      type: "confirm",
      name: "anotherEmployee",
      message: "Would you like to add another employee?"
    }
  ])
}

function generateHTMLbyRole() {
  let employees = ''
  employeeList.forEach(function (employee) {
    console.log(employee.name)
    if (employee.officeNumber) {
      employees += generateManagerHTML(employee)
    }
    else if (employee.school) {
      employees += generateInternHTML(employee)
    }
    else {
      emloyees += generateEngineerHTML(employee)
    }
    console.log(employees)
    let finalHTML = generateMainHTML(employees)
    return writeFileAsync("index.html", finalHTML)
  })
}