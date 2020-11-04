let n=require("readline-sync");
let num=parseInt(n.question("enter number: "));
let digit=parseInt(n.question("enter sec number: "))
var s=require("readline-sync");
var symbol=s.question("enter symbol: ")
if (symbol=="+") {
    let add=num+digit
    console.log(add)
};
if (symbol=="-") {
    let sub=num-digit
    console.log(sub)
};
if (symbol=="/") {
    let divide=num/digit
    console.log(divide)
};
if (symbol=="*") {
    let addition=num*digit
    console.log(addition)
};
if (symbol=="//") {
    let floor=num//digit
    console.log(floor)
};

