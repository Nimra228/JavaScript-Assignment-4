// //current date
// let current = new Date();
// document.write(current);

// //current month in words
// let mon = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let curr = new Date();
// let currentMonth = mon[curr.getMonth()];
// alert(currentMonth);


// let day = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
// let today = new Date();
// let currentDay = day[today.getDay()];
// document.write("Today is " + currentDay + ".");

// var date = new Date();
// var days = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
// var day = days[date.getDay()];
// if (day == "Sat" | "Sun") {
//     alert("It's Fun Day");
// } else {
//     alert("It's a working day")
// }

// let first = new Date();
// let day1 = first.getDate();

// if (day1 < 15) {
//     alert("First fifteen days of the month.");
// } else {
//     alert("Last days of the month.");
// }


// let now = new Date();
// now.setFullYear(2010);
// document.write(now);

// let now = new Date();
// let mill_sec = now.getTime();
// let min = Math.round(now.getTime() / (1000 * 60));
// document.write("Current Date: " + now + "<br>");
// document.write("Eclipsed milliseconds since January 1, 1970 : " + mill_sec + "<br>");

// var today = new Date();
// var day = today.getDay();
// var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
// console.log("Today is : " + dayList[day] + ".");
// var hour = today.getHours();
// var minute = today.getMinutes();
// var second = today.getSeconds();
// var prepend = (hour >= 12) ? " PM " : " AM ";
// hour = (hour >= 12) ? hour - 12 : hour;
// if (hour === 0 && prepend === ' PM ') {
//     if (minute === 0 && second === 0) {
//         hour = 12;
//         prepend = ' Noon';
//     } else {
//         hour = 12;
//         prepend = ' PM';
//     }
// }
// if (hour === 0 && prepend === ' AM ') {
//     if (minute === 0 && second === 0) {
//         hour = 12;
//         prepend = ' Midnight';
//     } else {
//         hour = 12;
//         prepend = ' AM';
//     }
// }
// document.write("Current Time : " + hour + prepend + " : " + minute + " : " + second);



// let last_day = new Date("31 December 2022");
// document.write("Later Date: " + last_day);

// let ramadan = new Date("18 June 2015");
// let passed = new Date("30 December 2015");

// let diff = passed.getTime() - ramadan.getTime();

// let diffDate = diff / (1000 * 3600 * 24);

// document.write(diffDate + " days have passed since 1st Ramadan, 2015");

// let dob = new Date("2 February 1998");

// let month_diff = Date.now() - dob.getTime();

// let age_diff = new Date(month_diff);


// let year = age_diff.getUTCFullYear();

// let age = Math.abs(year - 1970);

// document.write("Age of the date entered: " + age + "Years");