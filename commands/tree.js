let fs= require("fs");
const path = require("path");
function treeFn(givenPath){
    //edge cases
   
    if(fs.existsSync(givenPath)==false){
        console.log("Please enter a valid path for directory")
        return;
    }

    treeHelperFn(givenPath, "");
}

function treeHelperFn(givenPath, indent){
    isFile=fs.lstatSync(givenPath).isFile();
    if(isFile){
        let fileName=path.basename(givenPath);
        console.log(indent + "├──"+ fileName);
    }
    else{
        let dirName = path.basename(givenPath);
        console.log(indent + "└──" + dirName )
        let allFiles=fs.readdirSync(givenPath); 
        for(let i=0;i<allFiles.length;i++){
            let newPath= path.join(givenPath, allFiles[i]);
            treeHelperFn(newPath, indent + "\t");
        }
        
    }
}
module.exports={
    treeKey: treeFn
}