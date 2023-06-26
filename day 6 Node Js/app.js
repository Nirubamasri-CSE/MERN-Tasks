// console.log("Hello World");
// function add(n1,n2){
//     return n1+n2;
// }
// function sub(n1,n2){
//     return n1-n2;
// }
// function mul(n1,n2){
//     return n1*n2;
// }
// function div(n1,n2){
//     return n1/n2;
// }

// console.log(process.argv)
// let n1=parseInt(process.argv[2]),n2=parseInt(process.argv[3])
// console.log(add(n1,n2))
// console.log(sub(n1,n2))
// console.log(mul(n1,n2))
// console.log(div(n1,n2))

// function arithmeticOperations(n1,n2,sym){
// switch(sym){
//     case "+":
//         return (parseInt(n1)+parseInt(n2));break;
//     case "-":
//         return (n1-n2);break;
//     case "*":
//         return (n1*n2);break;
//     case "/":
//         return (n1/n2);break;
// }
// }
// module.exports={add,sub,mul,div,arithmeticOperations}

//fs--file system module
//const fs=require('fs')

fs.readFile(`${__dirname}/states.txt`,(err,data)=>{
    if(err){console.log("error")}
    else{console.log(data.toString())}
})
//Template literal
let name="elaks"
console.log(`${name}`,"is a student")
console.log(__dirname+"\\states.txt")

const inp="rock star"
fs.writeFile(`${__dirname}/states.txt`,inp,(err)=>{
    if(err){console.log("error")}
    else{console.log(inp,"done")}
})
//Callback-hell
const data = "hi rock star";

function read(filePath, callback) {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            callback("failed");
        } else {
            callback(null, data);
        }
    });
}

function write(filePath, callback) {
    fs.writeFile(filePath, dat, (err) => {
        if (err) {
            callback("failed");
        } else {
            callback(null, dat);
        }
    });
}

read(`${__dirname}/states.txt`, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
        write(`${__dirname}/states.txt`, (err, inf) => {
            if (err) {
                console.log(err);
            } else {
                console.log(inf);
            }
        });
    }
});


function read(filePath){
    return new Promise((resolve,reject)=>{
        fs.readFile(filePath,(err,data)=>{
            if(err){reject("failed")}
            else{resolve(data)}
        })
    })
}
const dat="rock star"
function write(filePath){
    return new Promise((resolve,reject)=>{
        fs.writeFile(filePath,dat,(err)=>{
            if(err){reject("failed")}
            else{resolve(dat)}
        })
    })
}
read(`${__dirname}/states.txt`)
.then((data)=>{console.log(data.toString());return write(`${__dirname}/states.txt`,dat)}).then((inf)=>{console.log(inf)})
.catch((err)=>{console.log(err)})

const fs = require('fs');
fs.readFile('states.txt', 'utf8', (err, statesData) => {
  if (err) {
    console.error("error");
    return;
  }
  fs.readFile('capitals.txt', 'utf8', (err, capitalsData) => {
    if (err) {
      console.error("error");
      return;
    }
    const states = statesData.split('\n');
    const capitals = capitalsData.split('\n');
    const stacapData = [];
    for (let i = 0; i < states.length; i++) {
      const state = states[i].trim();
      const capital = capitals[i].trim();
      stacapData.push(`${state} - ${capital}`);
    }
    fs.writeFile('stacap.txt',stacapData.join('\n'), 'utf8', (err) => {
      if (err) {
        console.error('error');
        return;
      }
      console.log('success');
    });
  });
})