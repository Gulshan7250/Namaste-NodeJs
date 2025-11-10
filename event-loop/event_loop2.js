// a =100
// last line of the file
// process.nextTick
// Promise
// timer
// setImmediate
// File Reading CB

const fs = require("fs");
const a = 100;

setImmediate(()=> console.log("setImmediate"));

Promise.resolve().then(()=> console.log("Promise"));

fs.readFile("./file.txt", "utf8", ()=>{
    console.log("File Reading CB");
})

setTimeout(()=> console.log("Time expired"), 0);

process.nextTick(()=> console.log("procewss.nextTick"));

function printA(){
    console.log("a=", a);
}

printA();
console.log('Last line of the file');