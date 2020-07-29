const fs = require('fs');
const inquirer = require("inquirer")
answers = [];
data = [];


const generatePage = require('./dist/generateTeam.css');



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



// function to initialize program

function init() {
inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'what is your name'
      },
      {
        type: 'input',
        name: 'identification',
        message: 'Enter your ID'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
      },
      {
        type: 'checkbox',
        name: 'role',
        message: 'What role on the project do you play?'
        choices: ['Manager', 'Engineer', 'Intern'],
      }, 
      {
        type: 'input',
        name: 'number',
        message: 'What is your office number?' // Manager only
      },
      {
        type: 'input',
        name: 'school',
        message: 'What is your school?' // Intern only
      }]
      .then(function(answers){
        //   console.log(answers.title + ' is title')
        writeToFile('Team.html', answers);
        });
    }


init();