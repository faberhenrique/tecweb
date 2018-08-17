var express = require('express');
var app = express();
var fs = require("fs");

app.get('/:id', function (req, res) {
   // First read existing users.
    console.log("entrei");
   fs.readFile( "notas.csv", 'utf8', function (err, data) {
       users = data.toString().split(';');
        var par = req.params.id;
        var user ={}; 
        for (var i = users.length - 1; i >= 0; i--) {
         

          if(users[i].toString().trim()==par){
            
              user.name=users[i].toString().trim();
              user.nota1=users[i+1];
              user.nota2=users[i+2];
            
              console.log(user);
          }

        }


     //  console.log( user );
       res.end( JSON.stringify(user));
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

})