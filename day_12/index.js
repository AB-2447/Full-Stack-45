const fs= require("fs")

fs.writeFile("Message.txt", "Hello", (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});


