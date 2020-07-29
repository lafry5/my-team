const fs = require('fs');
const inquirer = require("inquirer")
let Manager = require("./lib/Manager.js")
let Intern = require("./lib/Intern.js") 
let Employee = require("./lib/Employee.js") 
answers = [];
data = [];

// const output_directory = path.resolve(directoryname, "output")
// const outputPath = path.join(output_directory, "Team.html");

const generatePage = require('./src/generateTeam.js'); //says generatePage is not a function 



// function to write Team file

// function writeToFile(fileName, data) {
  
//     fs.writeFile("Team.html", generatePage(data), (err) => {
//             if (err) 
//                 console.log(err);
//           else {
//             console.log('Team.html complete! Check it out!');
//           }
//         });
// }

function compileTeam() {
  if(!fs.existsSync(output_directory)) {
    fs.mkdirSync(output_directory)
  }
  fs.writeFileSync(outputPath, generatePage(teamMembers), "utf-8") // received assistance with this; need to understand this better
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
        name: 'id',
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
        name: 'username',
        message: 'What is your Github username?' // Engineer only
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