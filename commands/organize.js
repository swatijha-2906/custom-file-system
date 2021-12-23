let fs= require("fs");
let path = require("path");
let utilityFile = require("../utility");

function organizeFn(givenPath){

    //edge cases
    if(fs.existsSync(givenPath)==false){
        console.log("Please enter a valid path for directory")
        return;
    }
    //1. create new directory-organized-files inside current directory
    //2. traverse each file in given directory
    //3. find type of the current file (traverse object in utility.js)
    //4. create new diretory of identified type (if not already created) inside organized-files
    //5. cut/copy current file from original location to correct directory path

    let destPath=path.join(givenPath, "organized-files");
    if(fs.existsSync(destPath)==false){
        fs.mkdirSync(destPath);
    }
    
    //get name of each file
    let allFiles=fs.readdirSync(givenPath);
    for(let i=0;i<allFiles.length;i++)
    {
        let filePath=path.join(givenPath, allFiles[i]);
        isFile= fs.lstatSync(filePath).isFile();

        if(isFile){
            
            let fileType= findFileType(allFiles[i]);

           
            arrangeFiles(filePath, destPath, fileType);
            
        }
        
    }
    console.log("Files organized");
    
}

function arrangeFiles(filePath, destPath, fileType){
    let finalDirectory= path.join(destPath, fileType);
    let finalDestPath=path.join(finalDirectory, path.basename(filePath));
    if(fs.existsSync(finalDirectory)==false){
        fs.mkdirSync(finalDirectory);
    }
    fs.copyFileSync(filePath, finalDestPath);
}

function findFileType(fileName){
    fileExt=path.extname(fileName).slice(1);

    for(let type in utilityFile.types){
        let fileTypes= utilityFile.types[type];
        for(let i=0;i<fileTypes.length;i++){
            if(fileTypes[i]===fileExt)
            return type;
        }
    }
    return "others";
}


module.exports={
    organizeKey: organizeFn
}