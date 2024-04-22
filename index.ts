#! /user/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

async function main()

{

console.log("\nWELCOME TO THE WORD COUNTER APPLICATION:")

const input : { paragraph : string } = await inquirer.prompt({

    name: 'paragraph',
    type: 'input',
    message: chalk.yellow('\nPLEASE ENTER YOUR TEXT TO COUNT'),
    prefix: ''

})

const words: string[] = input.paragraph.trim().split(/\s+/).filter((word:string) => word !== '')
// counts the words irrespective of whitespaces

const wordcount: number = words.length

console.log(chalk.green(`\nYOUR TEXT CONTAINS ${wordcount} WORDS`))


const input2: { paragraph: boolean } = await inquirer.prompt({

    name: "paragraph",
    type: "confirm",
    message: chalk.yellow("\nDO YOU WANT TO CHECK MORE TEXT?"),
    prefix: ''

})

    if (input2.paragraph)   await main()

    
    else console.log (chalk.red("\nEXITING IN 03 SECONDS..."))

    setTimeout(() => 
    
    {
        console.log(chalk.magenta("\nTHANK YOU FOR USING THE WORD COUNTER APPLICATION 😊"))
        
    }, 3000)
    

}

main()