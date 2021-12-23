#!/usr/bin/env node

//require files
let organizeFile =require("./commands/organize");
let treeFile = require("./commands/tree");
let helpFile = require("./commands/help");
let utilityFile = require("./utility");

//take input from user
let inputArr=process.argv.slice(2);


//node main.js organize <dirname>
//node main.js tree <dirname>
//node main.js help
let givenCommand=inputArr[0];
let givenPath=inputArr[1];

if(givenPath == undefined){
    givenPath=process.cwd();
}


switch(givenCommand){
    case "organize": organizeFile.organizeKey(givenPath);
        break;
    case "tree" : treeFile.treeKey(givenPath);
        break;
    case "help" : helpFile.helpKey();
        break;
    default : console.log("Please enter a valid command. To find the list of valid commands- run 'help' command");    
        break;    
}




