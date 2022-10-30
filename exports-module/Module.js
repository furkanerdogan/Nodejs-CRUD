const fs=require("fs");
const path=require("path");

function getFilePath(){
return path.join(process.cwd(),"file.txt");

}
function writeToFile(filepath,string){
     fs.writeFileSync(filepath,string);    
}
function readFormFile(filepath){
return fs.readFileSync(filepath).toString();
}
exports.getFilePath=getFilePath;
exports.writeToFile=writeToFile;
exports.readFormFile=readFormFile;


