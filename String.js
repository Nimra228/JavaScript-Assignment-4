//Adding strings
let fname = prompt("Please enter your first name: ");
let lname = prompt("Please enter your last name: ");

let fullName = fname + " " + lname;
alert("Good Morning " + fullName + " :) ");

//Finding length of a string using length
let mobile = prompt("Please let us know your favorite mobile phone model :) ");
document.write("My favorite phone is: " + mobile + "<br><br>");
document.write("Length of string: " + mobile.length);

//finding index of a character using indexOf()
let nationality = "Pakistani";
document.write("String: " + nationality + "<br><br>");
document.write("Index of 'n': " + nationality.indexOf("n"));

//finding last index of a character using lastIndexOf()
let hello = "Hello World";
document.write("String: " + hello + "<br><br>");
document.write("Last Index of 'l': " + hello.lastIndexOf("l"));

//finding character at a specified index using charAt()
let nation = "Pakistani";
document.write("String: " + nation + "<br><br>");
document.write("Character at index '3': " + nation.charAt(3));

//Concat string using concat()
let fName = prompt("Please enter your first name: ");
let lName = prompt("Please enter your last name: ");
alert("Good Morning " + fName.concat(" " + lName));

//Replacing string with replace()

let city = "Hyderabad";
document.write("City: " + city + "<br><br>");
let rep = city.replace("Hyderabad", "Islamabad");
document.write("After replacement: " + rep);

let message = "Ali and Sami are best friends. They play cricket and football together.";
document.write("Before: " + message + " <br> <br> ");

let new_message = message.replace(/and/g, " & ");
document.write("After: " + new_message);

let val = "472";
document.write("Value: " + val + "<br>" + "Type: " + typeof val + "<br><br>");
let val2 = 472;
document.write("Value: " + val2 + "<br>" + "Type: " + typeof val2);

let dry_fruit = prompt("Please enter your favorite Dry Fruit: ");
document.write("User input: " + dry_fruit + "<br><br>");
document.write("Upper case: " + dry_fruit.toUpperCase());


//Change number to string using toString()
let num = 35.36;
document.write("Number: " + num + "<br><br>");
let convert = num.toString();
let dec = convert.replace(".", "");
document.write("Result: " + dec);



let enter = prompt("Please enter your username and it should not contain [@ . , !] characters");
var split = enter.split("")
for (let i = 0; i < split.length; i++) {
    document.write(i)
    document.write(split[i])
    if (split[i] == '@') {
        alert("Please Enter a valid username.")
    } else if (split[i] == '.') {
        alert("Please Enter a valid username.")
    } else if (split[i] == ',') {
        alert("Please Enter a valid username.")
    } else if (split[i] == '!') {
        alert("Please Enter a valid username.")
    }
}


let inp = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am? ");
let bakery = ["cake", "apple pie", "cookie", "chips", "patties"];

if (inp == "cake") {
    alert("cake is available at index " + bakery.indexOf("cake") + " in pur bakery.");
} else if (inp == "apple pie") {
    alert("apple pie is available at index " + bakery.indexOf("apple pie") + " in our bakery.");
} else if (inp == "cookie") {
    alert("cookie is available at index " + bakery.indexOf("cookie") + " in our bakery.");
} else if (inp == "chips") {
    alert("chips is available at index " + bakery.indexOf("chips") + " in our bakery.");
} else if (inp == "patties") {
    alert("patties is available at index " + bakery.indexOf("patties") + " in our bakery.");
} else {
    alert("We are sorry. " + inp + " is not available in our bakery.")
}

let university = "University of Karachi";
var split = university.split("");
for (let i = 0; i < split.length; i++) {
    document.write(split[i] + "<br>");
}

let country = "Pakistan";
document.write("User input: " + country + "<br>");

let last = country.charAt(country.length - 1);
document.write("Last character of input: " + last);