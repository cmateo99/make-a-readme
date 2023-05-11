
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'Description',
        message: 'Add a short description of the project',
      },
      {
        type: 'input',
        name: 'Installation',
        message: 'What are the steps to install the project?',
      },
      {
        type: 'input',
        name: 'Usage',
        message: 'Provide instructions and examples for how to use the project',
      },
      {
        type: 'input',
        name: 'Contributions',
        message: 'Did you receive any help?',
      },
      {
        type: 'input',
        name: 'Tests',
        message: 'List the tests that you have used',
      },
      {
        type: 'input',
        name: 'License',
        message: 'Which license did you use?',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err)=>
    err? console.log(err):console.log("Successfully created README")
     );
}
    
// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers)=>{
            const rdMe = 
`# ${answers.Title}

## Description
${answers.Description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Tests](#tests)
- [License](#license)

## Installation
${answers.Installation}

## Usage
${answers.Usage}

## Contributions
${answers.Contributions}

## Tests
${answers.Tests}
## License
${answers.License}`
            writeToFile('README.MD', rdMe);
        })
    .catch((err)=>console.error(err));
}
// Function call to initialize app
init();
