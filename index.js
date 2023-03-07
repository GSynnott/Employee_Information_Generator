//Include packages needed for this application
const inquirer = require('inquirer');
const Employee = require('./employee');
const Manager = require('./manager');
const Engineer = require('./engineer');
const Intern = require('./intern');
const fs = require("fs");


// function writeToFile(fileName, data) {
    
//     fs.writeFile(fileName, dataOutput, (err) => 
//         err ? console.log(err) : console.log("Success!")
//     );
// }

function done(){
    inquirer
        .prompt([
            {
                type: "list",
                name: "complete",
                message: "Are you done submitting all the employees?",
                choices: ["yes", "no"],
            }
        ])
        .then((completeData) => {
            if (completeData.complete === "yes"){
                const fileName = `${name.toLowerCase().split(' ').join('')}.html`; //Set up the file name of the read me file.
                process.exit();
            } else if (completeData.complete === "no"){
                init();
            }
        })
            
}


// Init function gets called at the start of the program
function init() {
    //Create the inquirer prompt in order to ask the user all the questions listed.
    console.log("Please enter all information about all employees.");
    console.log(new inquirer.Separator());
    inquirer
        .prompt([
            {
                type: "list",
                name: "role",
                message: "Please select your role?",
                choices: ["Manager", "Engineer", "Intern"],
            }, 
            {
                type: "input",
                name: "name",
                message: "Please enter you name?",
            }, 
            {
                type: "input",
                name: "id",
                message: "Please enter your id?",
            }, 
            {
                type: "input",
                name: "email",
                message: "Please enter your email?",
            }, 
        ])
        .then((data) => {
            const name = data.name;
            const id = data.id;
            const email = data.email;
            if (data.role === "Manager"){
                inquirer
                    .prompt([
                        {
                            type: "input",
                            name: "offNum",
                            message: "Please enter your office number?",
                        }
                    ])
                    .then((managerData) => {
                        const mangager = new Manager(name, id, email, managerData.offNum);
                        done();
                    })
            } else if(role === "Engineer"){
                inquirer
                    .prompt([
                        {
                            type: "input",
                            name: "github",
                            message: "Please enter your github username?",
                        }
                    ])
                    .then((engineerData) => {
                        const mangager = new Engineer(name, id, email, engineerData.github);
                        done();
                    })
            } else if (role === "Intern"){
                inquirer
                    .prompt([
                        {
                            type: "input",
                            name: "school",
                            message: "Please enter your github username?",
                        }
                    ])
                    .then((internData) => {
                        const mangager = new Intern(name, id, email, internData.school);
                        done();
                    })
            } else{
                console.log("Incorrect entry. Please start again.");
                process.exit();
            }
            // inquirer
            //     .prompt([
            //         {
            //             type: "list",
            //             name: "complete",
            //             message: "Are you done submitting all the employees?",
            //             choices: ["yes", "no"],
            //         }
            //     ])
            //     .then((completeData) => {
            //         if (completeData.complete === "yes"){
            //             const fileName = `${name.toLowerCase().split(' ').join('')}.html`; //Set up the file name of the read me file.
            //         } else if (completeData.complete === "no"){

            //         }
            //     })
            
            //writeToFile(fileName, data);
        });
}

// Function call to initialize app
init();
