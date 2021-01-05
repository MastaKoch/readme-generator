// function to generate markdown for README
function generateMarkdown(answers) {


    return `# ${answers.title}

## Description

As a(n) ${answers.design}, I want to ${answers.goal}.


## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage-information)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)



## Installation 

${answers.install}
## Usage 

${answers.usage}
## License

![badge](https://img.shields.io/static/v1?label=license&message=${answers.license}&color=purple)
## Contributing

${answers.contribute}
## Tests 

${answers.test}
## Questions 

Link to my Github: (https://github.com/${answers.username})

If you want to reach me by email, please reach me at: ${answers.email}.

If you'd prefer to reach me by phone, please call or text me at: ${answers.phone}.
  `;
  }
  
  module.exports = generateMarkdown;