const fs = require('fs');
const inquirer = require("inquirer")
let Manager = require("./lib/Manager.js")
let Intern = require("./lib/Intern.js") 
let Employee = require("./lib/Employee.js") 
const path = require("path");


const OUTPUT_DIR = path.resolve(__dirname,"output");
const ouputPath = path.join(OUTPUT_DIR, "Team.html");
const render = require("./src/generateTeam.js")

const teamMembers = [];


const generatePage = require('./src/generateTeam.js'); //says generatePage is not a function 



// function to write Team file

function writeToFile(fileName, data) {
     
    fs.writeFile("Team.html", generatePage(data), (err) => {
            if (err) 
                console.log(err);
          else {
            console.log('Team.html complete! Check it out!');
          }
        });
}



//If role = intern then create new Instance
// let Bob (instance name) = new Intern (input from inquirer(1), id input, email input, etc)

// let Team Members = []; //Put them in an array


// function to initialize program

function startTeam() {

function createManager(){
  console.log('This will create a chart of your team members. Enjoy!')
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'Managername',
        message: "What is the Manager's name?" 
      },
      {
        type: 'input',
        name: 'ManagerId',
        message: "Enter his/her ID"
      },
      {
        type: 'input',
        name: 'ManagerEmail',
        message: "What is their email?"
      },
      {
        type: 'input',
        name: 'ManagerOfficeNumber',
        message: "What is their office phone number?"
      }
      ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamMembers.push(manager);
       
        createTeam();
      });
    } //end of createManager
      
    function createTeam() {
      inquirer
      .prompt([
      {
        type: 'checkbox',
        name: 'role2',
        message: "What is the next role on the team? (Choose one)",
        choices: ["Engineer", "Intern", "No more team members"]  
      }
    ]).then(userChoice => {
      switch (userChoice.memberChoice) {
        case "Engineer":
        addEngineer();
        break;
        case "Intern":
          addIntern();
          break;
          default:
            writeToFile();
      }
    });
  }

    function addEngineer(){
      inquirer
      .prompt([
        {
       type: 'input',
        name: 'engineerName',
        message: "Name an Engineer?" // Engineer 
      },
      {
        type: 'input',
        name: 'engineerId',
        message: 'Enter his/her ID'
      },
      {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is their email?'
      },
      {
        type: 'input',
        name: 'engineerUserName',
        message: 'What is their Github username?' 
      }
      ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerUserName);
        teamMembers.push(engineer);
        createTeam();
      });
    }
      
      function addIntern() {
        inquirer
        .prompt([
         {
        type: 'input',
        name: 'internName',
        message: 'Name an Intern?' // Intern 
      },
      {
        type: 'input',
        name: 'internId',
        message: 'Enter his/her ID'
      },
      {
        type: 'input',
        name: 'internEmail',
        message: 'What is their email?'
      },
      {
        type: 'input',
        name: 'internSchool',
        message: 'What is their school?' // Intern only
      }
    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamMembers.push(intern);
      idArray.push(answers.internId);
      createTeam();
    });
  }
    
    
        createManager();

  } // end of startTeam 


startTeam();