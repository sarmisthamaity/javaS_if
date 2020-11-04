const d=require("readline-sync");
const day=d.question("enter your day: ")
if (day=="monday") {
    console.log("Rajma Chawal");
}
else if (day=="tuesday") {
    console.log("Paneer");
}
else if (day=="wednesday") {
    console.log("dal chawal")
}
else if (day=="thursday") {
    console.log("birianey")
}
else if (day=="friday") {
    console.log("chicken");
}
else {
    console.log("fried rice" );
}
