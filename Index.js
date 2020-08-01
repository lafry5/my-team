const fs = require("fs");
const inquirer = require("inquirer")
const Manager = require("./lib/Manager.js")
const Intern = require("./lib/Intern.js") 
const Engineer = require("./lib/Engineer.js")

const path = require("path");


const teamMembers = [];

const OUTPUT_DIR = path.resolve(__dirname,"output")
const outputPath = path.join(OUTPUT_DIR, "Team.html");
const render = require("./src/generateTeam.js")



function writeFile() {  //call once after teamMembers is built
  // create output directory
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR)
  }
  fs.writeFileSync(outputPath, render(teamMembers)); //path, data, other info
}

// const generatePage = require('./src/generateTeam.js');


// function writeFile(fileName, teamMembers) {
 
//   fs.writetoFile("Team.html", generatePage(teamMembers), (err) => {  //issues with this line
//         if (err) 
//               console.log(err);
//         else {
//           console.log('Team.html! Check out Team.html to see the output!');
//         }
//       });
// }



function startTeam() {


    function createManager(){
      console.log('This will create a chart of your team members. Enjoy!')
      inquirer
        .prompt([
          {
            type: 'input',
            name: 'ManagerName',
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
            type: 'checkbox',
            name: 'role1',
            message: "Please confirm their role on the team.",
            choices: ["Manager", "Engineer", "Intern"]  
          },
          {
            type: 'input',
            name: 'ManagerOfficeNumber',
            message: "What is their office phone number?"
          }
          ]).then(function(answers) {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerRole, answers.managerOfficeNumber);
            teamMembers.push(manager);
            // console.log('Name' + teamMembers.managerName);
            // console.log('Id' + teamMembers.managerId);
            // console.log('Email' + teamMembers.managerEmail);
            // console.log('Office Number' + teamMembers.managerOfficeNumber);
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
    ]).then(function(userChoice) {
    //  console.log('userChoice.role2 is' + userChoice.role2)
      if (userChoice.role2 == "Engineer")
        {
          addEngineer();
        }
        else if (userChoice.role2 == "Intern")
        {
          // console.log('in Intern else if')
          addIntern();
        } 
        else if (userChoice.role2 == "No more team members")
        {
          // console.log('in No more team members else if')
          console.log('Team is built')
          writeFile("Team.html", teamMembers); //issues with this line
        }
    });
  } //end of createTeam()



    function addEngineer(){
      inquirer
      .prompt([
        {
       type: 'input',
        name: 'engineerName',
        message: "Name an Engineer" // Engineer 
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
      ]).then(function(answers){
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerRole, answers.engineerUserName);
        teamMembers.push(engineer);
        createTeam();
      });
    } //end of addEngineer()
      


      function addIntern() {
        inquirer
        .prompt([
         {
        type: 'input',
        name: 'internName',
        message: 'Name an Intern' // Intern 
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
    ]).then(function(answers){
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internRole, answers.internSchool);
      teamMembers.push(intern);
      createTeam();
    });
  } //end of addIntern()
    


  createManager();

  } // end of startTeam 


startTeam();