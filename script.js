// Chapter : 1
document.write("<h3>Chapter 1</h3>");
// Question : 1
alert("Hello World");

// Question : 2
alert("Error! Please enter a valid password.");

// Question : 3
alert("Welcome to JS Land...\nHappy Coding!");

// Question : 4
alert("Welcome to JS Land...");
alert("Happy Coding!");

// Question : 5
alert("Hello... I can run JS through my web browser's console");

// Chapter : 2
document.write("<h3>Chapter 2</h3>");
// Question : 1
var username;

// Question : 2
var myName = "Muhammad Bilal";

// Question : 3
var message;
message = "Hello World";
alert(message);

// Question : 4
var studentName = "Muhammad Bilal";
var studentAge = "19 years old";
var institute = "SMIT";
var studentCourse = "Certified Mobile Application Development";
alert(studentName);
alert(studentAge);
alert(institute);
alert(studentCourse);

// Question : 5
alert("PIZZA\nPIZZ\nPIZ\nPI\nP");

// Question : 6
var children = 2;
var partnerName = "unknown";
var geographicLocation = "Karachi";
var jobTitle = "Web Developer";

alert(
  "You will be a " +
    jobTitle +
    " in " +
    geographicLocation +
    ", married to " +
    partnerName +
    " with " +
    children +
    " children."
);

// Question : 7
var email = "bilal@gamail.com";
alert("My email address is " + email);

// Question : 8
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the book " + book);

// Question : 9
alert("My name is " + myName);
alert("My age is " + studentAge);
alert("I study in " + institute);
alert("I am learning " + studentCourse);

// Question : 10
document.write("<h4>Question 10</h4>");
document.write("Yah! I can write HTML content through JavaScript");

// Chapter : 3
document.write("<h3>Chapter 3</h3>");
// Question : 1
var age = 19;
alert("I am " + age + " years old");

// Question : 2
var visitCount = 14;
alert("You have visited this site " + visitCount + " times");

// Question : 3
document.write("<h4>Question 3</h4>");
var birthYear = 2004;
document.write("<br>My birth year is " + birthYear);
document.write("<br>Data type of my declared variable is " + typeof birthYear);

// Question : 4
document.write("<h4>Question 4</h4>");
var visitorName = "Ali";
var productTitle = "T-shirt(s)";
var quantity = 5;

document.write(
  "<br>" +
    visitorName +
    " ordered " +
    quantity +
    " " +
    productTitle +
    " on XYZ Clothing store"
);

// Chapter : 4
document.write("<h3>Chapter 4</h3>");
// Question : 1
var var1, var2, var3;

// Question : 2
// Legal variable names

var userName;
var $price;
var _age;
var firstName;
var last_name;
// Illegal variable names

// var 1stName;
// var user-name;
// var alert;
// var my variable;
// var @price;

// Question : 3
document.write("<h4>Question 3</h4>");
document.write("<h2>Rules for naming JS variables</h2>");
document.write(
  "<br>Variable names can only contain letters, numbers, $ and _. For example $my_1stVariable"
);
document.write(
  "<br>Variables must begin with a letter, $ or _. For example $name, _name or name"
);
document.write("<br>Variable names are case sensitive");
document.write("<br>Variable names should not be JS keywords");

// Chapter : 5 - 7
document.write("<h3>Chapter 5 - 7</h3>");
// Question : 1

var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
alert("The sum of " + num1 + " and " + num2 + " is " + sum);
// Question : 2

var sub = num2 - num1;
var multiply = num1 * num2;
var div = num2 / num1;
var mod = num2 % num1;
alert("The subtraction of " + num2 + " and " + num1 + " is " + sub);
alert("The multiplication of " + num1 + " and " + num2 + " is " + multiply);
alert("The division of " + num2 + " and " + num1 + " is " + div);
alert("The modulus of " + num2 + " and " + num1 + " is " + mod);

// Question : 3

document.write("<h4>Question 3</h4>");
var variable;
document.write("<br>Value after variable declaration is: " + variable);
variable = 4;
document.write("<br>Value after initialization is: " + variable);
variable++;
document.write("<br>Value after increment is: " + variable);
variable = variable + 7;
document.write("<br>Value after addition is: " + variable);
variable--;
document.write("<br>Value after decrement is: " + variable);
variable = variable % 2;
document.write("<br>The remainder is: " + variable);

// Question : 4

document.write("<h4>Question 4</h4>");
var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write(
  "<br>Total cost to buy 5 tickets to a movie is " + totalCost + " PKR"
);

// Question : 5

document.write("<h4>Question 5</h4>");
var tableOf = 4;
document.write("<br>Table of " + tableOf + "<br>");
for (var i = 1; i <= 10; i++) {
  document.write(tableOf + " x " + i + " = " + tableOf * i + "<br>");
}
// Question : 6

document.write("<h4>Question 6</h4>");
var celsiusTemperature = 25;
var fahrenheit = (celsiusTemperature * 9) / 5 + 32;
document.write("<br>" + celsiusTemperature + "°C is " + fahrenheit + "°F");
var fahrenheitTemperature = 70;
var celsius = Math.round(((fahrenheitTemperature - 32) * 5) / 9);
document.write("<br>" + fahrenheitTemperature + "°F is " + celsius + "°C");

// Question : 7
document.write("<h4>Question 7</h4>");
var priceItem1 = 650;
var priceItem2 = 100;
var orderedQuantityItem1 = 3;
var orderedQuantityItem2 = 7;
var shippingCharges = 100;
var totalCost =
  priceItem1 * orderedQuantityItem1 +
  priceItem2 * orderedQuantityItem2 +
  shippingCharges;

document.write("<br>Price of item 1 is " + priceItem1);
document.write("<br>Quantity of item 1 is " + orderedQuantityItem1);
document.write("<br>Price of item 2 is " + priceItem2);
document.write("<br>Quantity of item 2 is " + orderedQuantityItem2);
document.write("<br>Shipping Charges " + shippingCharges);
document.write("<br><br>Total cost of your order is " + totalCost);

// Question : 8

document.write("<h4>Question 8</h4>");
var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;
document.write("<br>Total Marks: " + totalMarks);
document.write("<br>Marks Obtained: " + marksObtained);
document.write("<br>Percentage: " + percentage + "%");

// Question : 9

document.write("<h4>Question 9</h4>");
var usDollar = 10;
var saudiRiyal = 25;
var pkrFromUsDollar = usDollar * 280;
var pkrFromSaudiRiyal = saudiRiyal * 74;
var totalPkr = pkrFromUsDollar + pkrFromSaudiRiyal;
document.write("<br>Amount in us Dollar: " + usDollar);
document.write("<br>Amount in Saudi Riyal: " + saudiRiyal);
document.write("<br>Amount in PKR from US Dollar: " + pkrFromUsDollar);
document.write("<br>Amount in PKR from Saudi Riyal: " + pkrFromSaudiRiyal);
document.write("<br>Total currency in PKR: " + totalPkr);

// Question : 10

document.write("<h4>Question 10</h4>");
var number = 10;
var result = ((number + 5) * 10) / 2;
document.write("<br>The result is: " + result);

// Question : 11

document.write("<h4>Question 11</h4>");
var currentYear = 2023;
var birthYear = 2004;
var age = currentYear - birthYear;
document.write("<br>Current Year: " + currentYear);
document.write("<br>Birth Year: " + birthYear);
document.write("<br>Your either " + age + " or " + (age - 1) + " years old");

// Question : 12

document.write("<h4>Question 12</h4>");
var radius = 20;
document.write("<br>The radius is: " + radius);
var circumference = 2 * 3.142 * radius;
document.write("<br>The circumference is: " + circumference);
var area = 3.142 * radius * radius;
document.write("<br>The area is: " + area);

// Question : 13

document.write("<h4>Question 13</h4>");
var a = 5;
document.write("<br>The value of a is: " + a + "<br>");
document.write("<br>The value of ++a is: " + ++a);
document.write("<br>Now the value of a is: " + a + "<br>");
document.write("<br>The value of a++ is: " + a++);
document.write("<br>Now the value of a is: " + a + "<br>");
document.write("<br>The value of --a is: " + --a);
document.write("<br>Now the value of a is: " + a-- + "<br>");
document.write("<br>The value of a-- is: " + a);
document.write("<br>Now the value of a is: " + a + "<br>");

// Question : 14

document.write("<h4>Question 14</h4>");
var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
//  1 - 0 + 1 + 1
document.write("<br>a is: " + a);
// a is 1
document.write("<br>b is: " + b);
// b is 0
document.write("<br>result is: " + result);
// result is 3

// Question : 15

document.write("<h4>Question 15</h4>");
var favoriteSnack = "Chocolate Chip";
var currentAge = 19;
var maxAge = 65;
var estimatedAmountPerDay = 3;
var totalNeeded = (maxAge - currentAge) * estimatedAmountPerDay;
document.write("<br>Favorite Snack: " + favoriteSnack);
document.write("<br>Current Age: " + currentAge);
document.write("<br>Estimated Maximum Age: " + maxAge);
document.write("<br>Amount of snacks per day: " + estimatedAmountPerDay);
document.write(
  "<br>You will need " +
    totalNeeded +
    " " +
    favoriteSnack +
    " to last you until the age of " +
    maxAge +
    "."
);

// Chapter : 8 -11
document.write("<h3>Chapter 8 to 11</h3>");
// Question : 1

var userName = prompt("Enter your first name");
alert("Hello, " + userName);

// Question : 2

document.write("<h4>Question 2</h4>");

var tableNumber = +prompt("Enter a number to show its multiplication table", 5);
document.write("<h5>Multiplication Table of " + tableNumber + "</h5> <br>");

for (var i = 1; i <= 10; i++) {
  document.write(tableNumber + " x " + i + " = " + tableNumber * i + "<br>");
}

// Question : 3

document.write("<h4>Question 3</h4>");

var usercity = prompt("Enter your city");

if (usercity.toLowerCase() === "karachi") {
  alert("Welcome to the city of lights");
}

// Question : 4

document.write("<h4>Question 4</h4>");

var gender = prompt("Enter your gender");

if (gender.toLowerCase() === "male") {
  alert("Good Morning Sir");
} else if (gender.toLowerCase() === "female") {
  alert("Good Morning Ma'am");
}
// Question : 5

document.write("<h4>Question 5</h4>");

var signalColor = prompt("Enter traffic signal color (Red, Yellow, Green)");
signalColor = signalColor.toLowerCase();

if (signalColor === "red") {
  alert("Must Stop");
} else if (signalColor === "yellow") {
  alert("Ready to move");
} else if (signalColor === "green") {
  alert("Move now");
} else {
  alert("Invalid color");
}

// Question : 6

document.write("<h4>Question 6</h4>");

var maxAge = prompt("Enter the maximum age limit");
var currentAge = prompt("Enter your age");

if (currentAge <= maxAge) {
  alert("You are welcome");
} else {
  alert("sorry not allowed");
}

// Question : 7

document.write("<h4>Question 7</h4>");

var fuel = prompt("Enter remaining fuel in car (in litres)");

if (fuel < 0.25) {
  alert("Please refill the fuel in your car");
} else {
  alert("You have enough fuel");
}

// Question : 8

document.write("<h4>Question 8</h4>");

var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
} //alert will be shown

var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
} //alert will not be shown

var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
} //alert will not be shown

if (c === 13) {
  alert("condition 2 is true");
} //alert will be shown

if (++c < 14) {
  alert("condition 3 is true");
} //alert will not be shown

if (c === 14) {
  alert("condition 4 is true");
} //alert will be shown

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
} //alert will be shown

if (true) {
  alert("True");
} //alert will be shown

if (false) {
  alert("False");
} //alert will not be shown

if ("car" < "cat") {
  alert("car is smaller than cat");
} //alert will be shown

// Question : 9

document.write("<h4>Question 9</h4>");

var subject1 = prompt("Enter marks obtained in Subject 1");
var subject2 = prompt("Enter marks obtained in Subject 2");
var subject3 = prompt("Enter marks obtained in Subject 3");
var totalMarks = prompt("Enter total marks");
var obtainedMarks = +subject1 + +subject2 + +subject3;
var percentage = (obtainedMarks / totalMarks) * 100;
var grade, remarks;
if (percentage >= 80) {
  grade = "A-one";
  remarks = "Excellent";
} else if (percentage >= 70) {
  grade = "A";
  remarks = "Good";
} else if (percentage >= 60) {
  grade = "B";
  remarks = "You need to improve";
} else {
  grade = "Fail";
  remarks = "Sorry";
}

document.write("<br>" + "Total Marks : " + totalMarks);
document.write("<br>" + "Marks Obtained : " + obtainedMarks);
document.write("<br>" + "Percentage : " + percentage + "%");
document.write("<br>" + "Grade : " + grade);
document.write("<br>" + "Remarks : " + remarks);

// Question : 10

document.write("<h4>Question 10</h4>");

var nameOfItem1 = prompt("Enter name of item 1");
var nameOfItem2 = prompt("Enter name of item 2");
var priceOfItem1 = prompt("Enter price of item 1");
var priceOfItem2 = prompt("Enter price of item 2");
var orderedQuantityOfItem1 = prompt("Enter ordered quantity of item 1");
var orderedQuantityOfItem2 = prompt("Enter ordered quantity of item 2");
var shippingCharges = 250;
var totalCost =
  priceOfItem1 * orderedQuantityOfItem1 +
  priceOfItem2 * orderedQuantityOfItem2 +
  shippingCharges;
var discount10Percent = (totalCost / 100) * 10;
var discountedPrice = totalCost - discount10Percent;
document.write("<br>" + "Price of " + nameOfItem1 + " is " + priceOfItem1);
document.write(
  "<br>" + "Quantity of " + nameOfItem1 + " is " + orderedQuantityOfItem1
);
document.write("<br>" + "Price of " + nameOfItem2 + " is " + priceOfItem2);
document.write("<br>" + "Quantity of " + nameOfItem2 +" is " + orderedQuantityOfItem2 +"<br>");
document.write("<br>" + "Shipping Charges " + shippingCharges + "<br>");
document.write("<br>" + "Total Cost " + totalCost);
document.write("<br>" + "Discount 10% " + discount10Percent);
document.write("<br>" + "Discounted price is " + discountedPrice);
// Question : 11

document.write("<h4>Question 11</h4>");

var secretNumber = 4;
var userGuessNumber = prompt("Guess the secret number (1 to 10)");
userGuessNumber = Number(userGuessNumber);

if (secretNumber === userGuessNumber) {
  alert("Congratulations! You guessed the secret number.");
} else if (secretNumber + 1 === userGuessNumber) {
  alert("Close enough to the correct answer.");
} else {
  alert("Sorry, that's not the secret number.");
}

// Question : 12

var usernumber = prompt("Enter your number you want to check");
usernumber = Number(usernumber);
var checkNumber = usernumber % 3;

if (checkNumber === 0) {
  alert("The number is divisible by 3.");
}else{
    alert("The number is NOT divisible by 3.")
}

// Question : 13

var team1Name = prompt("Enter your team 1 name");
var team2Name = prompt("Enter your team 2 name");
var team1Score = prompt("Enter team 1 score");
var team2Score = prompt("Enter team 2 score");
if (team1Score > team2Score){
    alert(team1Name + " have won the game!");
}else if (team1Score < team2Score) {
    alert(team2Name + " have won the game!");
}else{
    alert("The game is a draw!");
}
// Question : 14

var name = "Bilal";
var age = 19;
var bool = true;
alert(name + " is a " + typeof name)
alert(age + " is a " + typeof age)
alert(bool + " is a " + typeof bool)

// Question : 15

var inputNumber = prompt("Enter a number:");
inputNumber = Number(inputNumber);

if( inputNumber % 2 === 0){
    alert("even number");
}else{
    alert("odd number");
}
// Question : 16

var weather = prompt("Enter karachi weather")

if ( weather > 40){
    alert("It is too hot outside.");
}else if ( weather <= 40 && weather > 30){
    alert("The Weather today is Normal.");
}else if ( weather <= 30 && weather > 20){
    alert("Today’s Weather is cool.")
}else{
    alert("OMG! Today’s weather is so Cool.")
}

// Question : 17

var firstNumber = prompt("Enter first number you want to calculate");
firstNumber = Number(firstNumber);
var secondNumber = prompt("Enter second number you want to calculate");
secondNumber = Number(secondNumber);
var operation = prompt("Enter the operation you want to perform (+, -, *, /)");

if (operation === "+") {
    alert(firstNumber + " + " + secondNumber + " = " + (firstNumber + secondNumber));
} else if (operation === "-") {
    alert(firstNumber + " - " + secondNumber + " = " + (firstNumber - secondNumber));
} else if (operation === "*") {
    alert(firstNumber + " * " + secondNumber + " = " + (firstNumber * secondNumber));
} else if (operation === "/") {
    alert(firstNumber + " / " + secondNumber + " = " + (firstNumber / secondNumber));
} else {
    alert("Invalid operation");
}

// Question : 18

var dayName = prompt("Enter a day name:");
dayName = dayName.toLowerCase();

if (
  dayName === "monday" ||
  dayName === "tuesday" ||
  dayName === "wednesday" ||
  dayName === "thursday" ||
  dayName === "friday"
) {
  alert("It's a weekday.");
} else if (dayName === "saturday") {
  alert("It's a weekend.");
} else if (dayName === "sunday") {
  alert("yahoo! It's a holiday.");
} else {
  alert("Invalid day name.");
}

// Question : 19

var userScore = prompt("Enter your score:");

if (userScore > 50) {
    alert("You are passed!");
} else {
    alert("Try again!");
}

// Question : 20

var number1 = prompt("Enter the first number:");
number1 = Number(number1);
var number2 = prompt("Enter the second number:");
number2 = Number(number2);

if (number1 > number2) {
    alert("The first number is greater.");
} else if (number1 < number2) {
    alert("The second number is greater.");
} else if (number1 === number2) {
    alert("Both numbers are equal.");
}else{
    alert("Invalid input.");
}

// Question : 21

var userLanguage = prompt("Enter your language ('en' , 'es', 'de' or 'fr'):").toLowerCase();

if (userLanguage === "en") {
    alert("Hello!");
} else if (userLanguage === "fr") {
    alert("Bonjour!");
} else if (userLanguage === "es") {
    alert("¡Hola!");
} else if (userLanguage === "de") {
    alert("Hallo!");
} else {
    alert("Language not supported.");
}

// Question : 22

var numberInput = prompt("Enter a number:");
numberInput = Number(numberInput);

if (numberInput > 0) {
    alert("The number is positive.");
} else if (numberInput < 0) {
    alert("The number is negative.");
} else if (numberInput === 0) {
    alert("The number is zero.");
} else {
    alert("Invalid input.");
}


// Question : 23

var noun = prompt("Enter a noun:");
var number = prompt("Enter a number:");
number = Number(number);
if (number === 1) {
    alert("You have " + number + " " + noun + ".");
} else {
    alert("You have " + number + " " + noun + "s.");
}