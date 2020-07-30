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

function createTeamChart() {
console.log('This will create a chart of your team members. Enjoy!')
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name1',
        message: 'Who the Manager?' // Manager 
      },
      {
        type: 'input',
        name: 'id1',
        message: 'Enter his/her ID'
      },
      {
        type: 'input',
        name: 'email1',
        message: 'What is their email?'
      },
      {
        type: 'input',
        name: 'officenumber1',
        message: 'What is their office phone number?'
      },
      {
        type: 'input',
        name: 'name2',
        message: 'Name an Engineer?' // Engineer 
      },
      {
        type: 'input',
        name: 'id2',
        message: 'Enter his/her ID'
      },
      {
        type: 'input',
        name: 'email2',
        message: 'What is their email?'
      },
      {
        type: 'input',
        name: 'username2',
        message: 'What is their Github username?' 
      },
      {
        type: 'input',
        name: 'name3',
        message: 'Name another Engineer?' // Engineer 
      },
      {
        type: 'input',
        name: 'id3',
        message: 'Enter his/her ID'
      },
      {
        type: 'input',
        name: 'email3',
        message: 'What is their email?'
      },
      {
        type: 'input',
        name: 'username3',
        message: 'What is their Github username?' 
      },
      {
        type: 'input',
        name: 'name4',
        message: 'Name another Engineer?' // Engineer 
      },
      {
        type: 'input',
        name: 'id4',
        message: 'Enter his/her ID'
      },
      {
        type: 'input',
        name: 'email4',
        message: 'What is their email?'
      },
      {
        type: 'input',
        name: 'username4',
        message: 'What is their Github username?' 
      },
      {
        type: 'input',
        name: 'name5',
        message: 'Name an Intern?' // Intern 
      },
      {
        type: 'input',
        name: 'id5',
        message: 'Enter his/her ID'
      },
      {
        type: 'input',
        name: 'email5',
        message: 'What is their email?'
      },
      {
        type: 'input',
        name: 'school5',
        message: 'What is their school?' // Intern only
      }]
      )
      .then(function(answers){
        //   console.log(answers.title + ' is title')
        writeToFile('Team.html', answers);
        console.log(answers)
        
        });
    }


createTeamChart();