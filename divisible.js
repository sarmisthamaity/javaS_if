var n=require("readline-sync");
var num=n.question("enter number: ")
if(num%2===0) {
    console.log("divisible by 2")
}
else if (num%2!==0) {
    console.log("divisible by another number");
}

