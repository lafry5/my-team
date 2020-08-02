const fs = require("fs");
const inquirer = require("inquirer")
const Manager = require("./lib/Manager.js")
const Intern = require("./lib/Intern.js") 
const Engineer = require("./lib/Engineer.js")

const path = require("path");


const teamMembers = [];


const generatePage = require('./src/generateTeam.js');


function write(answers) {
  console.log('in the writeFile function')
  fs.writeFile('Team.html', generatePage(answers), (err) => {  
    console.log(answers)    
    if (err) 
              console.log(err);
        else {
          console.log('Team.html generated! Check out Team.html to see the output.');
        }
      });
}

function createTeam() {


    console.log('This will create a chart of your team members. Enjoy!')
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'managerName',
          message: "What is the Manager's name?" 
        },
        {
          type: 'input',
          name: 'managerId',
          message: "Enter his/her ID"
        },
        {
          type: 'input',
          name: 'managerEmail',
          message: "What is their email?"
        },
        {
          type: 'input',
          name: 'managerOfficeNumber',
          message: "What is their office phone number?"
        },
        {
        type: 'checkbox',
        name: 'managerRole',
        message: "Confirm the Manager's role on the team? (Choose Manager)",
        choices: ["Manager", "Engineer", "Intern"]  
        }, 
        {
        type: 'input',
          name: 'engineerName1',
          message: "Name an Engineer on the team (enter N/A for Engineer questions if N/A)" // Engineer 
        },
        {
          type: 'input',
          name: 'engineerId1',
          message: 'Enter his/her ID'
        },
        {
          type: 'input',
          name: 'engineerEmail1',
          message: 'What is their email?'
        },
        {
          type: 'input',
          name: 'engineerUserName1',
          message: 'What is their Github username?' 
        },
        {
          type: 'checkbox',
          name: 'engineerRole',
          message: "Confirm the Engineer's role on the team? (Choose Engineer)",
          choices: ["Manager", "Engineer", "Intern"]  
          },
          {
            type: 'input',
              name: 'engineerName2',
              message: "Name another Engineer on the team (enter N/A for Engineer questions if N/A)" // Engineer 
            },
            {
              type: 'input',
              name: 'engineerId2',
              message: 'Enter his/her ID'
            },
            {
              type: 'input',
              name: 'engineerEmail2',
              message: 'What is their email?'
            },
            {
              type: 'input',
              name: 'engineerUserName2',
              message: 'What is their Github username?' 
            },
            {
              type: 'checkbox',
              name: 'engineerRole',
              message: "Confirm the Engineer's role on the team? (Choose Engineer)",
              choices: ["Manager", "Engineer", "Intern"]  
              },
              {
                type: 'input',
                  name: 'engineerName3',
                  message: "Name another Engineer on the team (enter N/A for Engineer questions if N/A)" // Engineer 
                },
                {
                  type: 'input',
                  name: 'engineerId3',
                  message: 'Enter his/her ID'
                },
                {
                  type: 'input',
                  name: 'engineerEmail3',
                  message: 'What is their email?'
                },
                {
                  type: 'input',
                  name: 'engineerUserName3',
                  message: 'What is their Github username?' 
                },
                {
                  type: 'checkbox',
                  name: 'engineerRole',
                  message: "Confirm the Engineer's role on the team? (Choose Engineer)",
                  choices: ["Manager", "Engineer", "Intern"]  
                  }, 
                  {
                    type: 'input',
                      name: 'engineerName4',
                      message: "Name another Engineer on the team (enter N/A for Engineer questions if N/A)" // Engineer 
                    },
                    {
                      type: 'input',
                      name: 'engineerId4',
                      message: 'Enter his/her ID'
                    },
                    {
                      type: 'input',
                      name: 'engineerEmail4',
                      message: 'What is their email?'
                    },
                    {
                      type: 'input',
                      name: 'engineerUserName4',
                      message: 'What is their Github username?' 
                    },
                    {
                      type: 'checkbox',
                      name: 'engineerRole',
                      message: "Confirm the Engineer's role on the team? (Choose Engineer)",
                      choices: ["Manager", "Engineer", "Intern"]  
                      },  
              {
              type: 'input',
              name: 'internName',
              message: 'Name an Intern, if applicable. If not, mark N/A.' // Intern 
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
            },
            {
              type: 'checkbox',
              name: 'internRole',
              message: "Confirm the Intern's role on the team? (Choose Intern)",
              choices: ["Manager", "Engineer", "Intern"],  
              },
            ]).then(function(answers){
              write(answers)
              console.log(answers)
  });
  

} // end of createTeam


createTeam();


//// This is the start of the responsive questions //////////////////////////////////////////
///////// This works and stores responses in teamMembers!! //////////////////////////////////

// function startTeam() {


//     function createManager(){
//       console.log('This will create a chart of your team members. Enjoy!')
//       inquirer
//         .prompt([
//           {
//             type: 'input',
//             name: 'managerName',
//             message: "What is the Manager's name?" 
//           },
//           {
//             type: 'input',
//             name: 'managerId',
//             message: "Enter his/her ID"
//           },
//           {
//             type: 'input',
//             name: 'managerEmail',
//             message: "What is their email?"
//           },
//           {
//             type: 'input',
//             name: 'managerOfficeNumber',
//             message: "What is their office phone number?"
//           }
//           ]).then(function(answers) {
//             answers.managerRole = 'manager'; 
//             const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerRole, answers.managerOfficeNumber);
//             manager.role = 'manager';
//             teamMembers.push(manager);
//             // console.log(teamMembers + 'teamMembers')
//             // console.log(teamMembers.managerName + 'teamMembers.managerName')
//             // console.log('Name' + teamMembers.manager.name + 'teamMembers.manager.name');
//             // console.log('Id' + teamMembers.manager.id);
//             // console.log('Email' + teamMembers.manager.email);
//             // console.log('Office Number' + teamMembers.managerrole);
//             // console.log('Role' + teamMembers.manager.officenumber)
//             createTeam();
//           });
//         } //end of createManager
  


//     function createTeam() {
//       inquirer
//       .prompt([
//       {
//         type: 'checkbox',
//         name: 'role2',
//         message: "What is the next role on the team? (Choose one)",
//         choices: ["Engineer", "Intern", "No more team members"]  
//       }
//     ]).then(function(userChoice) {
//     //  console.log('userChoice.role2 is' + userChoice.role2)
//       if (userChoice.role2 == "Engineer")
//         {
//           engineerRole = userChoice.role2;
//           addEngineer();
//         }
//         else if (userChoice.role2 == "Intern")
//         {
//           internRole = userChoice.role2;
//           // console.log('in Intern else if')
//           addIntern();
//         } 
//         else if (userChoice.role2 == "No more team members")
//         {
//           // console.log('in No more team members else if')
//           console.log('Team is built')
//           writeFile("Team.html", teamMembers); 
//         }
//     });
//   } //end of createTeam()



//     function addEngineer(){
//       inquirer
//       .prompt([
//         {
//        type: 'input',
//         name: 'engineerName',
//         message: "Name an Engineer" // Engineer 
//       },
//       {
//         type: 'input',
//         name: 'engineerId',
//         message: 'Enter his/her ID'
//       },
//       {
//         type: 'input',
//         name: 'engineerEmail',
//         message: 'What is their email?'
//       },
//       {
//         type: 'input',
//         name: 'engineerUserName',
//         message: 'What is their Github username?' 
//       }
//       ]).then(function(answers){
//         answers.engineerRole = 'engineer';
//         const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerRole, answers.engineerUserName);
//         engineer.role = 'engineer';
//         teamMembers.push(engineer);
//             // console.log('Name' + teamMembers.engineerName);
//             // console.log('Id' + teamMembers.engineerId);
//             // console.log('Email' + teamMembers.engineerEmail);
//             // console.log('UserName' + teamMembers.engineerUserName);
//             // console.log('Role' + teamMembers.engineerRole)
//         createTeam();
//       });
//     } //end of addEngineer()
      


//       function addIntern() {
//         inquirer
//         .prompt([
//          {
//         type: 'input',
//         name: 'internName',
//         message: 'Name an Intern' // Intern 
//       },
//       {
//         type: 'input',
//         name: 'internId',
//         message: 'Enter his/her ID'
//       },
//       {
//         type: 'input',
//         name: 'internEmail',
//         message: 'What is their email?'
//       },
//       {
//         type: 'input',
//         name: 'internSchool',
//         message: 'What is their school?' // Intern only
//       }
//     ]).then(function(answers){
//       answers.managerRole = 'intern'; 
//       const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internRole, answers.internSchool);
//       intern.role = 'intern'; 
//       teamMembers.push(intern);
//           teamMembers.internRole = intern;
//             // console.log('Name' + teamMembers.internName);
//             // console.log('Id' + teamMembers.internId);
//             // console.log('Email' + teamMembers.internEmail);
//             // console.log('School' + teamMembers.internSchool);
//             // console.log('Role' + teamMembers.internRole)
//       createTeam();
//     });
//   } //end of addIntern()
    


//   createManager();

//   } // end of startTeam 


// startTeam();

// //////////////////////////////////////////////////////////////////////////////////////////////