var fs = require("fs");

console.log("log before the folder is created");

// fs.writeFileSync("temp/temp.txt","welcome to your life","utf-8");
// fs.mkdirSync("temp");

// console.log();

/* 
*/
if(fs.existsSync("temp")){
    fs.writeFileSync("temp/temp.txt","welcome to your life","utf-8");
}else{
    fs.mkdirSync("temp");
    fs.writeFileSync("temp/temp.txt","welcome to your life","utf-8");
} 

fs.appendFileSync("temp/temp.txt","\nthere is no turning back","utf-8");

console.log("log after the folder is created");