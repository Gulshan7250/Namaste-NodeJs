const crypto = require("crypto");

console.log("Hello World");

var a = 123332;
var b = 20986;

// pbkdf2 - Password Base Key Derivative Function

//Synchronous Function - Will Block the Main Thread - DON'T USE IT
crypto.pbkdf2Sync("password", "salt", 500000, 50, "sha512");
console.log("First Key is generated");

setTimeout(()=>{
    console.log("Call me right now");
}, 0);

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
    console.log("Second Key is generated");
});

function multiplyFn(x, y){
    const result = a*b;
    return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is :", c);