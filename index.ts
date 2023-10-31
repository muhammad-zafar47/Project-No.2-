#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Guess number between 1 to 10.");
async function startloop() {
    let again;
    do {
        await numberGuessgm();
        again = await inquirer.prompt([
            {
                type: "list",
                name: "restart",
                choices: ["Yes", "NO"],
                message: "Do you want to continue:"
            }
        ]);
    } while (again.restart === "Yes");
}
startloop();
async function numberGuessgm() {
    let answer = await inquirer.prompt([
        {
            type: "number",
            name: "userguess",
            message: `Please Enter your number:`,
        }
    ]);
    let guessNum = Math.floor(Math.random() * 10) + 1;
    console.log(guessNum);
    console.log(`Your guess number is:${answer.userguess}, and Sysytem Generate number is:${guessNum} `);
    if (answer.userguess === guessNum) {
        console.log(`Conguratulation Your answer is correct.`);
    }
    else {
        console.log(`Wrong guess number.Better luck for Nextime`);
    }
}
;
