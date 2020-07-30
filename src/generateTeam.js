 
 function generateTeam (data) {
 
 return ` 
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

                      
        </div>
    
    
    
    </body>
    </html>
`;

 }

module.exports = generateTeam