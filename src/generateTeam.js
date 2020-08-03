//  /////////////////////////////////////////////////////////////////////////////

// const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern.js");
// const Employee = require("../lib/Employee.js");

 function createTeam(Employee) {
    console.log('Employee is' + Employee)
    console.log(Employee)

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
                            <h4 class="name">${Employee.Manager.name}</h4>
                            <i class="fa fa-coffee"> </i>
                            <p class = "title">${Employee.Manager.Role}</p>
                        </div>
                            <div class = "list-group">
                            <p id="list-group-id">ID: ${Employee.Manager.id} </p>
                            <p id="list-group-email">Email: <a href="mailto:${Employee.Manager.email}">${Employee.Manager.email}</a></p>
                            <p id="list-group-other">Office number: ${Employee.Manager.officenumber}</p>
                            </div>
                        </div> 
       
    
                        <div class="card col-md-4">
                        <div class="col-12 jumbotron">    
                            <h4 class="name">${Employee.Engineer.name}</h4>
                            <i class="fa fa-laptop"> </i>
                            <p class = "title">${Employee.Engineer.role}</p>
                        </div>
                            <div class = "list-group">
                            <p id="list-group-id">ID: ${Employee.Engineer.id}</p>
                            <p id="list-group-email">Email: <a href="mailto:${Employee.Engineer.email}">${Employee.Engineer.email}</a></p>
                            <p id="list-group-other">GitHub: <a href="https://github.com/${Employee.Engineer.username}">${Employee.Engineer.username}</a></p>
                            </div>
                        </div>



                        <div class="card col-md-4">
                        <div class="col-12 jumbotron">    
                            <h4 class="name">${Employee.Engineer.name}</h4>
                            <i class="fa fa-laptop"> </i>
                            <p class = "title">${Employee.Engineer.role}</p>
                        </div>
                            <div class = "list-group">
                            <p id="list-group-id">ID: ${Employee.Engineer.id}</p>
                            <p id="list-group-email">Email: <a href="mailto:${Employee.Engineer.email}">${Employee.Engineer.email}</a></p>
                            <p id="list-group-other">GitHub: <a href="https://github.com/${Employee.Engineer.username}">${Employee.Engineer.username}</a></p>
                            </div>
                        </div>


                        <div class="card col-md-4">
                        <div class="col-12 jumbotron">    
                            <h4 class="name">${Employee.Engineer.name}</h4>
                            <i class="fa fa-laptop"> </i>
                            <p class = "title">${Employee.Engineer.role}</p>
                        </div>
                            <div class = "list-group">
                            <p id="list-group-id">ID: ${Employee.Engineer.id}</p>
                            <p id="list-group-email">Email: <a href="mailto:${Employee.Engineer.email}">${Employee.Engineer.email}</a></p>
                            <p id="list-group-other">GitHub: <a href="https://github.com/${Employee.Engineer.username}">${Employee.Engineer.username}</a></p>
                            </div>
                        </div> 

                        <div class="card col-md-4">
                        <div class="col-12 jumbotron">    
                            <h4 class="name">${Employee.Engineer.name}</h4>
                            <i class="fa fa-laptop"> </i>
                            <p class = "title">${Employee.Engineer.role}</p>
                        </div>
                            <div class = "list-group">
                            <p id="list-group-id">ID: ${Employee.Engineer.id}</p>
                            <p id="list-group-email">Email: <a href="mailto:${Employee.Engineer.email}">${Employee.Engineer.email}</a></p>
                            <p id="list-group-other">GitHub: <a href="https://github.com/${Employee.Engineer.username}">${Employee.Engineer.username}</a></p>
                            </div>
                        </div> 


                        <div class="card col-md-4">
                            <div class="col-12 jumbotron">    
                                <h4 class="name">${Employee.Intern.name}</h4>
                                <i class="fa fa-graduation-cap"></i>
                                <p class = "title">${Employee.Intern.role}</p>
                            </div>
                                <div class = "list-group">
                                <p id="list-group-id">ID: ${Employee.Intern.id}</p>
                                <p id="list-group-email">Email: <a href="mailto:${Employee.Intern.email}">${Employee.Intern.email}</a></p>
                                <p id="list-group-other">School: ${Employee.Intern.school}</p>
                                </div>
                            </div> 
    
                </div>
            </div>
        
           
        </body>
        </html>
    `;
 }
   module.exports = createTeam;


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


 
