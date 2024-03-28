import inquirer from "inquirer";
import chalk from "chalk";

//Step 01
const answers: {
    numberOne: number,
    numberTwo: number,
    operator: string,

} = await inquirer.prompt([
    
    {type: "number",
     name: "numberOne",
     message: (chalk.green("Enter your first number")),
    },
    {type: "number",
     name: "numberTwo",
     message: (chalk.blue("Enter your second number")),
    },
    { type: "list",
      name: "operator",
      message: (chalk.gray("Enter your operator")),
      choices: ["+", "-", "*", "/", "%", "**"]}
])

//Step 02
const { numberOne, numberTwo, operator } = answers;

//Step 03

let result 
     switch(operator) {
        case "+": result = numberOne + numberTwo;
        break;

        case "-": result = numberOne - numberTwo;
        break;

        case "*": result = numberOne * numberTwo;
        break;

        case "/": result = numberOne / numberTwo;
        break;

        case "**": result = numberOne ** numberTwo;
        break;

        case "%": result = numberOne % numberTwo;
        break; 
        default:
            console.log("Invalid operator");       
     }
     console.log(chalk .yellow(`${numberOne}, ${operator} ${numberTwo}  = ${result}`));