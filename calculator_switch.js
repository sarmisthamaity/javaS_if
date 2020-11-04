var n=require("readline-sync");
var num=parseInt(n.question("enter your number: "));
var digit=parseInt(n.question("enter number: "));
var oper=n.question("enter any symbol: ");
switch(oper) {
    case "+":
        console.log(num+digit);
        break
    case "-":
        console.log(num-digit);
        break
    case "/":
        console.log(num/digit);
        break
    case "*":
        console.log(num*digit);
        break
    case "//":
        console.log(num%digit);
        break

} 
