 
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
                <h4 class="name">${data.name1}</h4>
                <i class="fa fa-coffee"> </i>
                <p class = "title">Manager</p>
            </div>
                <div class = "list-group">
                <p id="list-group-id">ID: ${data.id1} </p>
                <p id="list-group-email">Email: ${data.email1}</p>
                <p id="list-group-other">Office number: ${data.officenumber1}</p>
                </div>
            </div> 
        
          <div class="card col-md-4">
            <div class="col-12 jumbotron">    
                <h4 class="name">${data.name2}</h4>
                <i class="fa fa-laptop"> </i>
                <p class = "title">Engineer</p>
            </div>
                <div class = "list-group">
                <p id="list-group-id">ID: ${data.id2}</p>
                <p id="list-group-email">Email: ${data.email2}</p>
                <p id="list-group-other">GitHub: ${data.username2}</p>
                </div>
            </div> 
          
        
          <div class="card col-md-4">
            <div class="col-12 jumbotron">    
                <h4 class="name">${data.name3}</h4>
                <i class="fa fa-laptop"> </i>
                <p class = "title">Engineer</p>
            </div>
                <div class = "list-group">
                <p id="list-group-id">ID: ${data.id3}</p>
                <p id="list-group-email">Email: ${data.email3}</p>
                <p id="list-group-other">GitHub: ${data.username3}</p>
                </div>
            </div> 
          
        
          <div class="card col-md-4">
            <div class="col-12 jumbotron">    
                <h4 class="name">${data.name4}</h4>
                <i class="fa fa-laptop"> </i>
                <p class = "title">Engineer</p>
            </div>
                <div class = "list-group">
                <p id="list-group-id">ID: ${data.id4}</p>
                <p id="list-group-email">Email: ${data.email4}</p>
                <p id="list-group-other">GitHub: ${data.username4}</p>
                </div>
            </div> 
   
                 
        
          <div class="card col-md-4">
            <div class="col-12 jumbotron">    
                <h4 class="name">${data.name5}</h4>
                <i class="fa fa-graduation-cap"></i>
                <p class = "title">Intern</p>
            </div>
                <div class = "list-group">
                <p id="list-group-id">ID: ${data.id5}</p>
                <p id="list-group-email">Email: ${data.email5}</p>
                <p id="list-group-other">School: ${data.school5}</p>
                </div>
            </div> 

                      
        </div>
    
    
    
    </body>
    </html>
`;

 }

module.exports = generateTeam