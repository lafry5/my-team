//  /////////////////////////////////////////////////////////////////////////////

// const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern.js");
// const Employee = require("../lib/Employee.js");

 function buildChart(Employee) {


    // const employees = []
    // //prompt 
    // employees.push({employee})
    // //{Manager: {id: 123, }}

    // const employees = {}
    // //prmopt
    // const employee = {"Manager" : {id: 123}}
    // Object.assian(employees, employee)
    
    return`
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="./dist/style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    
    <body>
    <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
    
        <div class="container">
            <div class="row">
        

                        <div class="card col-md-4">
                        <div class="col-12 jumbotron">    
                            <h4 class="name">${Employee[0].name}</h4>
                            <i class="fa fa-coffee"> </i>
                            <p class = "title">${Employee[0].role}</p>
                        </div>
                            <div class = "list-group">
                            <p id="list-group-id">ID: ${Employee[0].id} </p>
                            <p id="list-group-email">Email: <a href="mailto:${Employee[0].email}">${Employee[0].email}</a></p>
                            <p id="list-group-other">Office number: ${Employee[0].officenumber}</p>
                            </div>
                        </div> 
       
    
                        <div class="card col-md-4">
                        <div class="col-12 jumbotron">    
                            <h4 class="name">${Employee[1].name}</h4>
                            <i class="fa fa-laptop"> </i>
                            <p class = "title">${Employee[1].role}</p>
                        </div>
                            <div class = "list-group">
                            <p id="list-group-id">ID: ${Employee[1].id}</p>
                            <p id="list-group-email">Email: <a href="mailto:${Employee[1].email}">${Employee[1].email}</a></p>
                            <p id="list-group-other">GitHub: <a href="https://github.com/${Employee[1].username}">${Employee[1].username}</a></p>
                            </div>
                        </div>



                        <div class="card col-md-4">
                        <div class="col-12 jumbotron">    
                            <h4 class="name">${Employee[2].name}</h4>
                            <i class="fa fa-laptop"> </i>
                            <p class = "title">${Employee[2].role}</p>
                        </div>
                            <div class = "list-group">
                            <p id="list-group-id">ID: ${Employee[2].id}</p>
                            <p id="list-group-email">Email: <a href="mailto:${Employee[2].email}">${Employee[2].email}</a></p>
                            <p id="list-group-other">GitHub: <a href="https://github.com/${Employee[2].username}">${Employee[2].username}</a></p>
                            </div>
                        </div>


                        <div class="card col-md-4">
                        <div class="col-12 jumbotron">    
                            <h4 class="name">${Employee[3].name}</h4>
                            <i class="fa fa-laptop"> </i>
                            <p class = "title">${Employee[3].role}</p>
                        </div>
                            <div class = "list-group">
                            <p id="list-group-id">ID: ${Employee[3].id}</p>
                            <p id="list-group-email">Email: <a href="mailto:${Employee[3].email}">${Employee[3].email}</a></p>
                            <p id="list-group-other">GitHub: <a href="https://github.com/${Employee[3].username}">${Employee[3].username}</a></p>
                            </div>
                        </div> 

                        <div class="card col-md-4">
                        <div class="col-12 jumbotron">    
                            <h4 class="name">${Employee[4].name}</h4>
                            <i class="fa fa-laptop"> </i>
                            <p class = "title">${Employee[4].role}</p>
                        </div>
                            <div class = "list-group">
                            <p id="list-group-id">ID: ${Employee[4].id}</p>
                            <p id="list-group-email">Email: <a href="mailto:${Employee[4].email}">${Employee[4].email}</a></p>
                            <p id="list-group-other">GitHub: <a href="https://github.com/${Employee[4].username}">${Employee[4].username}</a></p>
                            </div>
                        </div> 


                        <div class="card col-md-4">
                            <div class="col-12 jumbotron">    
                                <h4 class="name">${Employee[5].name}</h4>
                                <i class="fa fa-graduation-cap"></i>
                                <p class = "title">${Employee[5].role}</p>
                            </div>
                                <div class = "list-group">
                                <p id="list-group-id">ID: ${Employee[5].id}</p>
                                <p id="list-group-email">Email: <a href="mailto:${Employee[5].email}">${Employee[5].email}</a></p>
                                <p id="list-group-other">School: ${Employee[5].school}</p>
                                </div>
                            </div> 
    
                </div>
            </div>
        
           
        </body>
        </html>
    `;
 }
   module.exports = buildChart;


///////Still working on this below////////////////////////////////////////////////////////
 

// function generateHTML(teamMembers){
//     return`
//    <!DOCTYPE html>
//    <html lang="en">
   
//    <head>
//    <meta charset="UTF-8" />
//    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//    <title>My Team</title>
//    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
//        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
//    <link rel="stylesheet" href="./dist/style.css">
//    <script src="https://kit.fontawesome.com/c502137733.js"></script>
//    </head>
   
//    <body>
//    <div class="container-fluid">
//            <div class="row">
//                <div class="col-12 jumbotron team-heading">
//                    <h1 class="text-center">My Team</h1>
//                </div>
//            </div>
//        </div>
   
//        <div class="container">
//            <div class="row">
         

//            ${createTeam(teamMembers)}
   
   
//            </div>
       
          
//        </body>
//        </html>
//    `;
  
// }

// function createTeam(teamMembers) {

//                     function getEmployeeRole(teamMembers) {
//                         member = Employee.getRole();
//                         //teamMembers is undefined
//                             if(member == 'manager'){
//                                 createManager(manager);
//                             } else if  (member == 'engineer') {
//                                 createEngineer(engineer);
//                             } else if  (member == 'intern') {
//                                 createIntern(intern);
//                             }
//                             }

//                    function createManager(manager) {
//                         return `
//                         <div class="card col-md-4">
//                             <div class="col-12 jumbotron">    
//                                 <h4 class="name">${Manager.getName()}</h4>
//                                 <i class="fa fa-coffee"> </i>
//                                 <p class = "title">${Manager.getRole()}</p>
//                             </div>
//                                 <div class = "list-group">
//                                 <p id="list-group-id">ID: ${Manager.getId()} </p>
//                                 <p id="list-group-email">Email: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></p>
//                                 <p id="list-group-other">Office number: ${Manager.getOfficeNumber()}</p>
//                                 </div>
//                             </div> 
//                             `;
//                         };
                         
//                         function createEngineer(engineer) {
//                         return `
//                         <div class="card col-md-4">
//                             <div class="col-12 jumbotron">    
//                                 <h4 class="name">${getName()}</h4>
//                                 <i class="fa fa-laptop"> </i>
//                                 <p class = "title">${getRole()}</p>
//                             </div>
//                                 <div class = "list-group">
//                                 <p id="list-group-id">ID: ${getId()}</p>
//                                 <p id="list-group-email">Email: <a href="mailto:${getEmail()}">${getEmail()}</a></p>
//                                 <p id="list-group-other">GitHub: <a href="https://github.com/${getUserName()}">${getUserName()}</a></p>
//                                 </div>
//                             </div> 
//                             `;
//                         };
                                       
//                         function createIntern(intern) {
//                         return `
//                         <div class="card col-md-4">
//                             <div class="col-12 jumbotron">    
//                                 <h4 class="name">${Intern.getName()}</h4>
//                                 <i class="fa fa-graduation-cap"></i>
//                                 <p class = "title">${Intern.getRole()}</p>
//                             </div>
//                                 <div class = "list-group">
//                                 <p id="list-group-id">ID: ${Intern.getId()}</p>
//                                 <p id="list-group-email">Email: <a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a></p>
//                                 <p id="list-group-other">School: ${Intern.getSchool()}</p>
//                                 </div>
//                             </div> 
//                             `;
//                         };
    
//     getEmployeeRole(teamMembers); // cannot read property

// }  
    
// module.exports = generateHTML;


 
