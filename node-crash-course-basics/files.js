const fs = require("fs");

//READING FILES
/* fs.readFile("./docs/names.txt", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data.toString());
}); */

//WRITING FILES
/* fs.writeFile(
  "./docs/names.txt",
  "Hello, Welcome to NodeJS Master Class",
  () => {
    console.log("file was written");
  }
); */

/* fs.writeFile(
  "./docs/welcomeMessage.txt",
  "Hello, Welcome to NodeJS Master Class",
  () => {
    console.log("file was written");
  }
); */

//DIRECTORIES
//Check if folder exist
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (error) => {
    if (error) {
      console.log(error);
    }
    console.log("Folder has been created!!!");
  });
} else {
  fs.rmdir("./assets", (error) => {
    if (error) {
      console.log(error);
    }
    console.log("Folder Deleted");
  });
}

//DELETING FILES
//checks if the file exists
if (fs.existsSync("./docs/deleteMe.txt")) {
  fs.unlink("./docs/deleteMe.txt", (error) => {
    if (error) {
      console.log(error);
    }
    console.log("File Deleted");
  });
} else {
  console.log("FILE NOT FOUND!!");
}
