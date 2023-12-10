//made variables to require file system/inquirer
const inquirer = require("inquirer")
const fs = require("fs")
const { Circle, Square, Triangle } = require('./lib/shapes')


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
//function to intialize
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            let shape;

            if (answers.choice === 'Circle') {
                shape = new Circle(answers.letters, answers.colortext, answers.colorshape)
            } else if (answers.choice === 'Square') {
                shape = new Square(answers.letters, answers.colortext, answers.colorshape)
            } else if (answers.choice === 'Triangle') {
                shape = new Triangle(answers.letters, answers.colortext, answers.colorshape)
            }

            writeToFile('logo.svg', shape.render());
        })
}

init();