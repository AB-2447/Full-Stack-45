import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Input URL: ",
      name: "URL",   
    },
  ])
  .then((answers) => {
    const url = answers.URL; // Access the URL from the answers object
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr.png')); // Use the already imported 'fs'
    console.log("QR code generated and saved as qr.png");
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      console.log("Something else went wrong", error);
    }
  });
