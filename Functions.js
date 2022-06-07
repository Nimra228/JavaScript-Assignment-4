function date() {
    document.write(new Date());
}

date();

function greet(fname, lname) {
    alert("Good Morning " + fname + " " + lname);
}
greet("Nimra", "Malik");

function sum(a, b) {
    return (a + b);

}
let c = sum(10, 34);
document.write(c);


function multiply(num1, num2) {
    return num1 * num2;
}

let a = multiply(2, 4);
document.write(a);

function squareMyNumber(number1) {
    return number1 ** 2;
}

let squared = squareMyNumber(7);
document.write("7 ** 2 = ", squared);

function factorial(x) {

    if (x === 0) {
        return 1;
    }
    return x * factorial(x - 1);

}
document.write(factorial(5));


document.write("Total Subjects - 5 <br> Total Marks - 500 <br> <br>");

function sumMarks(urdu, english, maths, science, programming) {

    var a = urdu + english + maths + science + programming;
    return a;

};

var b = sumMarks(50, 50, 90, 50, 80);
document.write("Marks Obtained: " + b + "<br>");

function percentage(total) {

    var c = total / 500 * 100;
    return c;
}

var d = percentage(b);
document.write("Percentage: " + d + "%");

function counting() {
    let start = prompt("Enter starting number");
    let end = prompt("Enter ending number");

    for (i = start; i <= end; i++) {
        document.write(i + "<br>");
    }
}

counting();