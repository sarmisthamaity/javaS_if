n=require("readline-sync");
num=parseInt(n.question("enter your num: "))
digit=parseInt(n.question("enter your digit: "))
if (num>digit) {
    console.log("num is greater")
}
else {
    console.log("digit is greater")
}

