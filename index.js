// required installs stored in variables
const fs = require('fs');
const inquirer= require("inquirer");
const generateMarkdown= require("./utils/generateMarkdown.js");


// array of questions for user
const questions = [

// project title (this becomes title of README)
    {
        type: "input",
        name: "title",
        message: "What is the title of this project?"

    },
// Description

    // who is project designed for? 
    {
        type: "input",
        name: "design",
        message: "This project is designed for a _______ (gamer, online-shopper, business owner, etc.)"
    },

    // With this project, I want to ... "(insert answer)"
    {
        type: "input",
        name: "goal",
        message: "with this project, I want to _____ (fill in blank)"
    }, 
    
//Installation
     {
        type: "input",
        name: "install",
        message: "Any installation requirements? (N/A if not applicable)"
    },
    
// Usage
    {
        type: "input",
        name: "usage",
        message: "In a couple of sentences, how do you use this application?"
    },
    
// License
    {
        type: "list",
        name: "license",
        message: "Which license would you like to use?",
        choices: ["MIT", "LGPL-3.0", "MPL-2.0","AGPL-3.0","Unlicense","Apache-2.0", "GPL-3.0"],

    },

    // Contributions
    {
        type: "input",
        name: "contribute",
        message: "List all contributors. If there are no other contributors, just put n/a."
    },

    // Tests
    {
        type: "input",
        name: "test",
        message: "Write tests for your application here. N/A if not applicable."
    },

// Questions
 
   // GitHub username"
 {
    type: "input",
    name: "username",
    message: "What is your Github username?"
},
    // email
{
    type: "input",
    name: "email",
    message: "What is your email address?"
},
    // phone 
{
    type: "input",
    name: "phone",
    message: "what is your phone number?"
},

];

// function to write README file


writeToFile=(fileName, data) => {
    fs.writeFile(fileName, data, (err) => {
        console.log(fileName);
        console.log(data);
        if (err) {
            return console.log(err);
        } else {
            console.log("Success!");
        }
        });
    };

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
        writeToFile("README.MD", generateMarkdown(answers));
    });

}

// function call to initialize program
init();
