const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs/promises");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

let team = [];

async function generateTeam() {

    //todo inquirer
    var { name, id, email, officeNumber } = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the manager's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the manager's id number?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the manager's email address?"
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the office number?"
            }
        ])
    team.push(new Manager(name, id, email, officeNumber))

    var { name, id, email, gitHub } = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the engineer's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the engineer's id number?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the engineer's email address?"
            },
            {
                type: 'input',
                name: 'gitHub',
                message: "What is the engineer's GitHub username?"
            }
        ])
    team.push(new Engineer(name, id, email, gitHub))

    var { name, id, email, gitHub } = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the engineer's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the engineer's id number?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the engineer's email address?"
            },
            {
                type: 'input',
                name: 'gitHub',
                message: "What is the engineer's GitHub username?"
            }
        ])
    team.push(new Engineer(name, id, email, gitHub))

    var { name, id, email, school } = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the intern's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the intern's id number?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the intern's email address?"
            },
            {
                type: 'input',
                name: 'school',
                message: "What is the intern's school name?"
            }
        ])
    team.push(new Intern(name, id, email, school))

    var { name, id, email, school } = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the intern's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the intern's id number?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the intern's email address?"
            },
            {
                type: 'input',
                name: 'school',
                message: "What is the intern's school name?"
            }
        ])
    team.push(new Intern(name, id, email, school))

    let htmlDoc = render(team)

    await fs.writeFile(outputPath, htmlDoc)
}



generateTeam();
