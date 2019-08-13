const fs = require("fs");
const path = require("path");

// CREATE FOLDER

// fs.mkdir(path.join(__dirname, "/test"), {}, err => {
//   if (err) throw err;
//   console.log("Folder created");
// });

// CREATE & WRITE TO FILE

// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello, World!",
//   err => {
//     if (err) throw err;
//     console.log("File written to.");

//     // FILE APPEND

//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       " I Love Node JS.",
//       err => {
//         if (err) throw err;
//         console.log("File written to.");
//       }
//     );
//   }
// );

// READ FILE

// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log("Folder created");
//   console.log(data);
// });

// RENAME A FILE

fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloworld.txt"),
  err => {
    if (err) throw err;
    console.log("File Renamed");
  }
);
