//made variables to require file system/inquirer
const inquirer = require("inquirer")
const fs = require("fs")


//made questions to ask the user
const questions = [

    {
        type: 'input',
        name: 'letters',
        message: 'Enter 3 letters for logo text'
    },
    {
        type: 'list',
        name: 'choice',
        message: "Choose one of the shapes",
        choices:  ["Triangle", "Circle", "Square"]
    },
    {
        type: 'input',
        name: 'colorshape',
        message: 'Input color or hex-code to add color to shape'
    },
    {
        type: 'input',
        name: 'colortext',
        message: 'Input color or hex-code to add clor to text'
    },
];

//functon to write to file and show success at the command line
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err, result) => {
        if (err) throw err;
        console.log('Success! Generated logo.svg')
    })
}