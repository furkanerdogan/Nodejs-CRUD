
const myModule=require("./Module");
//path
//content
// const filePath=path.join(process.cwd(),"file.txt");
// fs.writeFileSync(filePath,"My first file");
// const fileContent=fs.readFileSync(filePath).toString();
myModule.writeToFile(myModule.getFilePath(),"second string")
console.log(myModule.readFormFile(myModule.getFilePath()));
