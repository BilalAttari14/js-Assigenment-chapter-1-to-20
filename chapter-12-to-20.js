// Chapter : 12 to 13

document.write("<h3>Chapter 12 to 13</h3>");

// Question : 1

var usernumber = prompt("Enter your number you want to check");
usernumber = Number(usernumber);
var checkNumber = usernumber % 3;

if (checkNumber === 0) {
  alert("The number is divisible by 3.");
} else {
  alert("The number is NOT divisible by 3.");
}

// Question : 2

var usernumber2 = prompt("Enter your number you want to check even or odd");
usernumber2 = Number(usernumber2);
var checkNumber2 = usernumber2 % 2;

if (checkNumber2 === 0) {
  alert("The number is even.");
} else {
  alert("The number is odd.");
}

// Question : 3

var age = prompt("Enter your age");
age = Number(age);
if (age > 18) {
  alert("Old enough.");
} else {
  alert("Too young.");
}

// Question : 4

var userName = prompt("Enter your name");
userName = userName.toLowerCase();
var myName = "bilal";
if (userName === myName) {
  alert("Welcome Bilal!");
} else {
  alert();
}

// Question : 5

var number = prompt("Enter your number");
number = Number(number);

switch (number % 3) {
  case 0:
    alert("Divisible by 3");
    break;
  default:
    alert("Not divisible by 3");
}

// Question : 6

var character = prompt("Enter any character");

if (character >= "0" && character <= "9") {
  alert("it's a number");
} else if (character >= "A" && character <= "Z") {
  alert("it's an uppercase letter");
} else if (character >= "a" && character <= "z") {
  alert("it's a lowercase letter");
} else {
  alert("it's not a letter or number");
}

// Question : 7

var num1 = prompt("Enter first number");
num1 = Number(num1);
var num2 = prompt("Enter second number");
num2 = Number(num2);
var operation = prompt("Enter operation (+, -, *, /, %)");

switch (operation) {
  case "+":
    alert("The sum is " + (num1 + num2));
    break;
  case "-":
    alert("The difference is " + (num1 - num2));
    break;
  case "*":
    alert("The product is " + num1 * num2);
    break;
  case "/":
    alert("The quotient is " + num1 / num2);
    break;
  case "%":
    alert("The remainder is " + (num1 % num2));
    break;
  default:
    alert("Invalid operation");
}

// Question : 8

var time = prompt("Enter time in 24 hour format (e.g., 1900 for 7pm)");
time = Number(time);

if (time >= 0 && time < 1200) {
  alert("Good morning!");
} else if (time >= 1200 && time < 1700) {
  alert("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
  alert("Good evening!");
} else if (time >= 2100 && time <= 2359) {
  alert("Good night!");
} else {
  alert("Invalid time format!");
}

// Question : 9

var year = prompt("Enter a year to check if it's a leap year");
year = Number(year);
if (year % 4 === 0) {
  alert(year + " is a leap year.");
} else {
  alert(year + " is not a leap year.");
}

// Question : 10

var password = "secret";
var userPassword = prompt("Enter your password");

if (userPassword === "") {
  alert("Please enter a password.");
} else if (userPassword === password) {
  alert("Correct! The password you entered matches the original password.");
} else {
  alert("Password is incorrect.");
}

// Question : 11

document.write("<h4>Question 11</h4>");

var firstName = "Ali";
if (firstName === "Fahad") {
  document.write("Hello Fahad!");
} else {
  document.write("You are not Fahad.");
}

// Question : 12

document.write("<h4>Question 12</h4>");

var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
document.write("<br>" + greeting);

// Question : 13

var integer1 = prompt("Enter first integer");
integer1 = Number(integer1);
var integer2 = prompt("Enter second integer");
integer2 = Number(integer2);
if (integer1 > integer2) {
  alert("The larger integer is: " + integer1);
} else if (integer2 > integer1) {
  alert("The larger integer is: " + integer2);
} else if (integer1 === integer2) {
  alert("Both integers are equal.");
} else {
  alert("not integer.");
}

// Question : 14

var number3 = prompt("Enter a number to check positive, negative or zero");
number3 = Number(number3);
if (number3 > 0) {
  alert("The number is positive.");
} else if (number3 < 0) {
  alert("The number is negative.");
} else {
  alert("The number is zero.");
}

// Question : 15

var currentHour = prompt("Enter current hour (0-23)");
currentHour = Number(currentHour);

if (currentHour > 6 && currentHour < 9) {
  alert("Breakfast is served.");
} else if (currentHour > 11 && currentHour < 15) {
  alert("Time for lunch.");
} else if (currentHour > 17 && currentHour < 21) {
  alert("It's Dinner time.");
} else {
  alert("Sorry, you'll have to wait, or go get a snack.");
}

// Question : 16

var variable1 = 3;
var variable1Type = typeof variable1;
var variable2 = "hello";
var variable2Type = typeof variable2;
var variable3 = true;
var variable3Type = typeof variable3;
var variable4;
var variable4Type = typeof variable4;
console.log("Type of variable 1 is " + variable1Type);
console.log("Type of variable 2 is " + variable2Type);
console.log("Type of variable 3 is " + variable3Type);
console.log("Type of variable 4 is " + variable4Type);

// Question : 17
var character = prompt("Enter a single character you check to vowel or not");

character = character.toLowerCase();

if (
  character === "a" ||
  character === "e" ||
  character === "i" ||
  character === "o" ||
  character === "u"
) {
  alert("it's a vowel: " + true);
} else {
  alert("it's not a vowel: " + false);
}

// Question : 18

if (10 !== 8) {
  alert(true);
}

// Question : 19

var month = prompt("Enter a month (1-12)");
month = Number(month);

switch (month) {
  case 1:
    alert("January");
    break;
  case 2:
    alert("February");
    break;
  case 3:
    alert("March");
    break;
  case 4:
    alert("April");
    break;
  case 5:
    alert("May");
    break;
  case 6:
    alert("June");
    break;
  case 7:
    alert("July");
    break;
  case 8:
    alert("August");
    break;
  case 9:
    alert("September");
    break;
  case 10:
    alert("October");
    break;
  case 11:
    alert("November");
    break;
  case 12:
    alert("December");
    break;
  default:
    alert("invalid month");
    break;
}

// Question : 20

var age = prompt("Enter your age. ")
age = Number(age)
var votable = age < 18 ? "Too young" : "Old enough";
alert(votable)

// ---------------------------------------Chapter 12 to 13 End✌✌----------------------------------------

// Chapter : 14 to 17

document.write("<h3>Chapter 14 to 17</h3>");


// Question : 1

var studentName = []
studentName.push("bilal")
console.log(studentName);

// Question : 2

var studentName = new Array()
studentName.push("Ali")
console.log(studentName);

// Question : 3

var arrayString = ["hello","world"]
console.log(arrayString);

// Question : 4

var arrayNumber = [1, 2, 3, 4, 5]
console.log(arrayNumber);

// Question : 5

var arrayBoolean = [true, false, true]
console.log(arrayBoolean);

// Question : 6

var arraymixed = ["hello", 1, true, "world", 4  , false]
console.log(arraymixed);

// Question : 7

var mobileNetwork = ["Jazz", "Telenor", "Zong", "Warid", "Ufone"]
console.log(mobileNetwork);

// Question : 8
document.write("<h4>Question 9</h4>");

var qulifications = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M.Pill.", "PhD"]

document.write("<h3>Education Qualifications</h3>")
document.write("<ol>")

for (var a = 0; a < qulifications.length;a++){
    document.write("<li>"+ qulifications[a] +"</li>")
}

document.write("</ol>")

// Question : 9

document.write("<h4>Question 10</h4>");

var topMovies = []

topMovies.push("Arangers: Age of Ultron")
topMovies.push("spectre")
topMovies.push("Jurassic World")
topMovies.push("Inside Out")

document.write("<h3>Top movies of 2015</h3>")
document.write("<ol>")

for (var a = 0; a < topMovies.length;a++){
    document.write("<li> "+ topMovies[a] +"</li>")
}

document.write("</ol>")

document.write("<strong>Length of the array: " + topMovies.length + "</strong>")

// Question : 10

var cars = ["BMW","Lamborghini","Ferrari","porsche", "Ford Mastang","Volvo"]
document.write("<h3>Favorite Cars</h3><br>")
document.write(cars + "<br><br>")
document.write("First index of an array: 0 <br>")
document.write("Car at first index of an array: " + cars[0] + "<br>")
document.write("Last index of an array: " + (cars.length - 1) + "<br>")
document.write("Car at last index of an array: " + cars[cars.length - 1] + "<br>")