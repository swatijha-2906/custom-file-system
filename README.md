# custom-file-system
## using nodejs

### About
This is a global command line application using Nodejs with 3 commands to run.
The list of commands are-
1. organize - it organizes all the files inside the given directory on the basis of the type of each file by creating different subdirectories.
2. tree - it prints the tree structure of the given directory.
3. help- it shows the list of valid commands.


### How to run this project
1. Clone this repository in your local environment.
2. Go to command line terminal, (refer either a or b)- 

    a. Switch to the required directory and run following commands-
        ```
        fsys organize
        fsys tree
        fsys help
        ```
    b. Copy the path of the required directory and run following commands in any directory-
        ```
        fsys organize <dirpath>
        fsys tree <dirpath>
        fsys help
        ```


### Important points-

1. Different files created for implementing different custom commands
2. Files are organized into media, archives, documents or app (these categories are specified in utility.js file)
3. Commands are accessible in global terminal using 'fsys' command (specified in package.json file)