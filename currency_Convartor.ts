#! /usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk";

console.log(chalk.rgb(0,255,0)("\n \t WELCOME TO CURRENCY CONVERTER \n"));

//Define The List Of Currencies And Their Exchange Rates

let exchange_rate : any ={


    "USD" : 1 ,        // base Currency
  
    "EUR" : 0.9 ,      // European Currency (euro)
  
    "JYP" : 113 ,      // Japanese Currency (yen)
  
    "CAD" : 1.3 ,      // Canadian Dollar
  
    "AUD" : 1.65 ,      // Australian Dollar
  
    "PKR" : 277.70 ,      // Pakistan Rupee


    // Add More Currencies And Their Exchange Rates Here

}


// promt the user to select currencies to convert from and to 

let user_answer = await inquirer.prompt([

    {

        name : "from_currency",

        type : "list",

        message : "Select The Currency To Convert From :\n", 

        choices : ["USD" , "EUR" , "JYP" , "CAD" , "AUD" ,"PKR"]
    },
    {
    
    name : "to_currency",
    
    type : "list" ,
    
    message : "Select The Currency To Convert Into : \n" ,
    
    choices : ["USD" , "EUR" , "JYP" , "CAD" , "AUD" , "PKR"]
    
},

{

    name : "amount", 

    type : "input",

    message : "Enter The Amount To Convert\n"

}
])


// Perform Currency Conversion By Using Formula

let from_amount = exchange_rate [user_answer.from_currency];

let to_amount = exchange_rate [user_answer.to_currency];

let amount = user_answer.amount


//Formula Of Conversion

let base_amount = amount / from_amount

let converted_amount = base_amount * to_amount


//Display The Converted Amount

console.log(chalk.rgb(255,255,0)(`\nConverted Amounnt = ${converted_amount.toFixed(2)}\n`));



console.log(chalk.rgb(0,191,255)("\n PRESENTING  BY  ABDUL  REHMAN\n"));
