const a = 100;

setImmediate(()=>{
    console.log("setImmediate");
})

setTimeout(()=> console.log("Time expired"), 0);

function printA(){
    console.log("a=",a);
}

printA();
console.log("last line of the file.");