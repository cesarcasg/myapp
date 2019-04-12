
const fs = require('fs');

var express = require('express');
var app = express();

app.use(express.static('public'));

// public files access json format - changing path
//app.use('/static', express.static(__dirname + '/public'));

/*
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
*/

app.get('/', function (req, res) {
/*
    'use strict';

    const fs = require('fs');

    let student = {
        name: 'Mike',
        age: 23,
        gender: 'Male',
        department: 'English',
        car: 'Honda'
    };

    let data = JSON.stringify(student, null, 2);

    fs.writeFile('student-3.json', data, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });

    console.log('This is after the write call');
*/


    let person = {
        name: 'Mike',
        age: 23,
        gender: 'Male',
        department: 'English',
        car: 'Honda'
    };

    savePersonToPublicFolder(person, function(err) {
       if (err) {
         res.status(404).send('User not saved');
         return;
       }
       // res.send('User saved');
     });


  res.send('Hello World!');
});

function savePersonToPublicFolder(person, callback) {
  fs.writeFile('./public/person.json', JSON.stringify(person), callback);
}



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
