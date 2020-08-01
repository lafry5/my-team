//  ///// Working on this /////////////////////////////////////////////////////////////////////////

//  const Employee = require("./lib/Employee.js")
 

//  function createTeam(Employee) {

//     return`
//     <!DOCTYPE html>
//     <html lang="en">
    
//     <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>My Team</title>
//     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
//         integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
//     <link rel="stylesheet" href="./dist/style.css">
//     <script src="https://kit.fontawesome.com/c502137733.js"></script>
//     </head>
    
//     <body>
//     <div class="container-fluid">
//             <div class="row">
//                 <div class="col-12 jumbotron team-heading">
//                     <h1 class="text-center">My Team</h1>
//                 </div>
//             </div>
//         </div>
    
//         <div class="container">
//             <div class="row">
        

//                         <div class="card col-md-4">
//                         <div class="col-12 jumbotron">    
//                             <h4 class="name">${Employee.Manager.getName()}</h4>
//                             <i class="fa fa-coffee"> </i>
//                             <p class = "title">${Employee.Manager.getRole()}</p>
//                         </div>
//                             <div class = "list-group">
//                             <p id="list-group-id">ID: ${Employee.ManagerManager.getId()} </p>
//                             <p id="list-group-email">Email: <a href="mailto:${Employee.Manager.getEmail()}">${Employee.Manager.getEmail()}</a></p>
//                             <p id="list-group-other">Office number: ${Employee.Manager.getOfficeNumber()}</p>
//                             </div>
//                         </div> 
       
    
//                         <div class="card col-md-4">
//                         <div class="col-12 jumbotron">    
//                             <h4 class="name">${Employee.Engineer.getName()}</h4>
//                             <i class="fa fa-laptop"> </i>
//                             <p class = "title">${Employee.Engineer.getRole()}</p>
//                         </div>
//                             <div class = "list-group">
//                             <p id="list-group-id">ID: ${Employee.Engineer.getId()}</p>
//                             <p id="list-group-email">Email: <a href="mailto:${Employee.Engineer.getEmail()}">${Employee.Engineer.getEmail()}</a></p>
//                             <p id="list-group-other">GitHub: <a href="https://github.com/${Employee.Engineer.getUserName()}">${Employee.Engineer.getUserName()}</a></p>
//                             </div>
//                         </div>



//                         <div class="card col-md-4">
//                         <div class="col-12 jumbotron">    
//                             <h4 class="name">${Employee.Engineer.getName()}</h4>
//                             <i class="fa fa-laptop"> </i>
//                             <p class = "title">${Employee.Engineer.getRole()}</p>
//                         </div>
//                             <div class = "list-group">
//                             <p id="list-group-id">ID: ${Employee.Engineer.getId()}</p>
//                             <p id="list-group-email">Email: <a href="mailto:${Employee.Engineer.getEmail()}">${Employee.Engineer.getEmail()}</a></p>
//                             <p id="list-group-other">GitHub: <a href="https://github.com/${Employee.Engineer.getUserName()}">${Employee.Engineer.getUserName()}</a></p>
//                             </div>
//                         </div>


//                         <div class="card col-md-4">
//                         <div class="col-12 jumbotron">    
//                             <h4 class="name">${Employee.Engineer.getName()}</h4>
//                             <i class="fa fa-laptop"> </i>
//                             <p class = "title">${Employee.Engineer.getRole()}</p>
//                         </div>
//                             <div class = "list-group">
//                             <p id="list-group-id">ID: ${Employee.Engineer.getId()}</p>
//                             <p id="list-group-email">Email: <a href="mailto:${Employee.Engineer.getEmail()}">${Employee.Engineer.getEmail()}</a></p>
//                             <p id="list-group-other">GitHub: <a href="https://github.com/${Employee.Engineer.getUserName()}">${Employee.Engineer.getUserName()}</a></p>
//                             </div>
//                         </div> 


//                         <div class="card col-md-4">
//                             <div class="col-12 jumbotron">    
//                                 <h4 class="name">${Employee.InternIntern.getName()}</h4>
//                                 <i class="fa fa-graduation-cap"></i>
//                                 <p class = "title">${Employee.Intern.getRole()}</p>
//                             </div>
//                                 <div class = "list-group">
//                                 <p id="list-group-id">ID: ${Employee.Intern.getId()}</p>
//                                 <p id="list-group-email">Email: <a href="mailto:${Employee.Intern.getEmail()}">${Employee.Intern.getEmail()}</a></p>
//                                 <p id="list-group-other">School: ${Employee.Intern.getSchool()}</p>
//                                 </div>
//                             </div> 
    
//                 </div>
//             </div>
        
           
//         </body>
//         </html>
//     `;
//  }
//     export default createTeam;


///////Still working on this below////////////////////////////////////////////////////////
 

function generateHTML(teamMembers){
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
         

           ${createTeam(teamMembers)}
   
   
           </div>
       
          
       </body>
       </html>
   `;
  
}


module.exports = generateHTML;



function createTeam(teamMembers) {

                    function getEmployeeRole(teamMembers) {
                        member = teamMembers.getRole(teamMembers); //teamMembers is undefined
                            if(member == 'manager'){
                                createManager();
                            } else if  (member == 'engineer') {
                                createEngineer();
                            } else if  (member == 'intern') {
                                createIntern();
                            }
                            }

                   function createManager(manager) {
                        return `
                        <div class="card col-md-4">
                            <div class="col-12 jumbotron">    
                                <h4 class="name">${Manager.getName()}</h4>
                                <i class="fa fa-coffee"> </i>
                                <p class = "title">${Manager.getRole()}</p>
                            </div>
                                <div class = "list-group">
                                <p id="list-group-id">ID: ${Manager.getId()} </p>
                                <p id="list-group-email">Email: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></p>
                                <p id="list-group-other">Office number: ${Manager.getOfficeNumber()}</p>
                                </div>
                            </div> 
                            `;
                        };
                         
                        function createEngineer(engineer) {
                        return `
                        <div class="card col-md-4">
                            <div class="col-12 jumbotron">    
                                <h4 class="name">${Engineer.getName()}</h4>
                                <i class="fa fa-laptop"> </i>
                                <p class = "title">${Engineer.getRole()}</p>
                            </div>
                                <div class = "list-group">
                                <p id="list-group-id">ID: ${Engineer.getId()}</p>
                                <p id="list-group-email">Email: <a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a></p>
                                <p id="list-group-other">GitHub: <a href="https://github.com/${Engineer.getUserName()}">${Engineer.getUserName()}</a></p>
                                </div>
                            </div> 
                            `;
                        };
                                       
                        function createIntern(intern) {
                        return `
                        <div class="card col-md-4">
                            <div class="col-12 jumbotron">    
                                <h4 class="name">${Intern.getName()}</h4>
                                <i class="fa fa-graduation-cap"></i>
                                <p class = "title">${Intern.getRole()}</p>
                            </div>
                                <div class = "list-group">
                                <p id="list-group-id">ID: ${Intern.getId()}</p>
                                <p id="list-group-email">Email: <a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a></p>
                                <p id="list-group-other">School: ${Intern.getSchool()}</p>
                                </div>
                            </div> 
                            `;
                        };
    
    getEmployeeRole(teamMembers); // cannot read property

}  
    

module.exports = createTeam;


 
