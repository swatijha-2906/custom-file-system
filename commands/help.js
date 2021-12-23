function helpFn(){
    console.log(`The list of valid commands are-
    1. organize- to organize the directory on the basis of different types of files inside the directory.
    2. tree- to print tree structure of the directory.
    3. help- to find the valid commands. `);
}

module.exports = {
    helpKey : helpFn
}