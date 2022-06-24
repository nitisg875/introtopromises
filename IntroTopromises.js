const fs = require('fs');

console.log("before");

//synchronous working
let data=fs.readFileSync("f1.txt");
//console.log(data + "");

//async working
//fs.readFile("f1.txt",cb);
//function cb(err,data) {
 //   if (err) {
 //       console.log(err);
 //   }
//    else console.log(data+"");
//}

//promise working
let promisThatFileWillBeRead = fs.promises.readFile("f1.txt");

console.log(promisThatFileWillBeRead);


//promisesThatFileWillBeRead
//   .then(function printData(data) {
// console.log("promise is fulfilled");
// console.log(data + "");

promisThatFileWillBeRead.then(printData);
promisThatFileWillBeRead.catch(printError);


function printDataData(data) {
    console.log("promise is fulfilled");
    console.log(data+"");
}

function printError(err){
    console.log(err);
}
//}
//console.log(data +"");
//console.log("after");