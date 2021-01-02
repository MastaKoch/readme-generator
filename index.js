const fs = require('fs');

// array of questions for user
const questions = ([

    // project title (this becomes title of README)
    {
        type: "input",
        name: "title",
        message: "What is the title of this project"

    },

    // who is project designed for? (gamers, online-shoppers, business owners, etc.)
    {
        type: "input",
        name: "design",
        message: "Who is this project designed for? (gamers, online-shoppers, business owners, etc.)"
    },

    // With this project, I want to ... "(insert answer)"
    {
        type: "input",
        name: "goal",
        message: "with this project, I want to _____ (fill in blank)"
    },


    // sections (description, TOC, installation, usage, license (select one from a list), contributing, tests, and questions (email address of user here) 
    {
        type: "list",
        name: "license",
        message: "Which license would you like to use?"
        choices: [""],

    },
    

]);

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
