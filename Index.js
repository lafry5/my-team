const fs = require('fs');
const inquirer = require("inquirer")
// let Manager = require("Manager.js")
// let Intern = require("Intern.js") // Made available the intern class
answers = [];
data = [];


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
        message: 'What role on the project do you play?',
        choices: ['Manager', 'Engineer', 'Intern'],
      }, 
      {
        type: 'input',
        name: 'officenumber',
        message: 'What is your office phone number [use (xxx)xxx-xxxx format]?' // Manager only
      },
      {
        type: 'input',
        name: 'school',
        message: 'What is your school?' // Intern only
      }]
    )
      .then(function(answers){
        //   console.log(answers.title + ' is title')
        writeToFile('Team.html', answers);
        });
    }


init();