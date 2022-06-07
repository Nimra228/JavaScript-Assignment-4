let user = prompt("Please enter the positive integer: ");

document.write("Number: " + user + "<br>");
document.write("round off value : " + Math.round(user) + "<br>");
document.write("floor value:  " + Math.floor(user) + "<br>");
document.write("ceil number : " + Math.ceil(user) + "<br>");

let neg = prompt("Please enter the negative floating point number : ");

document.write("Number: " + neg + "<br>");
document.write("round off value : " + Math.round(neg) + "<br>");
document.write("floor value:  " + Math.floor(neg) + "<br>");
document.write("ceil number : " + Math.ceil(neg) + "<br>");

let ab_val = -4;
document.write("The absolute value of -4 is " + Math.abs(ab_val));

let dice;
document.write("Random dice value: " + Math.ceil(Math.random(dice) * 100));

let toss = Math.ceil(Math.random() * 2);
if (toss == 1) {
    document.write(1 + "<br>" + "Random coin value : Tails");
} else if (toss == 2) {
    document.write(2 + "<br>" + "Random coin value : Heads");
}

let num1 = Math.ceil(Math.random() * 100);
document.write("Random number between 1 and 100 : " + num1);

let weight = prompt("Enter your weight in Kilograms");
alert("The weight of user is :" + weight + "Kilograms");

let secret = prompt("Enter a number between 1 to 10");
let rand = Math.ceil(Math.random() * 10);
if (secret === rand) {
    alert("Congratulations! you guessed the right number");
} else {
    alert("Try again!");
}