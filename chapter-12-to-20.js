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

var age = prompt("Enter your age. ");
age = Number(age);
var votable = age < 18 ? "Too young" : "Old enough";
alert(votable);

// ---------------------------------------Chapter 12 to 13 End✌✌----------------------------------------

// Chapter : 14 to 17

document.write("<h3>Chapter 14 to 17</h3>");

// Question : 1

var studentName = [];
studentName.push("bilal");
console.log(studentName);

// Question : 2

var studentName = new Array();
studentName.push("Ali");
console.log(studentName);

// Question : 3

var arrayString = ["hello", "world"];
console.log(arrayString);

// Question : 4

var arrayNumber = [1, 2, 3, 4, 5];
console.log(arrayNumber);

// Question : 5

var arrayBoolean = [true, false, true];
console.log(arrayBoolean);

// Question : 6

var arraymixed = ["hello", 1, true, "world", 4, false];
console.log(arraymixed);

// Question : 7

var mobileNetwork = ["Jazz", "Telenor", "Zong", "Warid", "Ufone"];
console.log(mobileNetwork);

// Question : 8
document.write("<h4>Question 8</h4>");

var qulifications = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M.Pill.", "PhD"];

document.write("<h3>Education Qualifications</h3>");
document.write("<ol>");

for (var a = 0; a < qulifications.length; a++) {
  document.write("<li>" + qulifications[a] + "</li>");
}

document.write("</ol>");

// Question : 9

document.write("<h4>Question 9</h4>");

var topMovies = [];

topMovies.push("Arangers: Age of Ultron");
topMovies.push("spectre");
topMovies.push("Jurassic World");
topMovies.push("Inside Out");

document.write("<h3>Top movies of 2015</h3>");
document.write("<ol>");

for (var a = 0; a < topMovies.length; a++) {
  document.write("<li> " + topMovies[a] + "</li>");
}

document.write("</ol>");

document.write(
  "<strong>Length of the array: " + topMovies.length + "</strong>"
);

// Question : 10

document.write("<h4>Question 10</h4>");

var cars = [
  "BMW",
  "Lamborghini",
  "Ferrari",
  "porsche",
  "Ford Mastang",
  "Volvo",
];
document.write("<h3>Favorite Cars</h3><br>");
document.write(cars + "<br><br>");
document.write("First index of an array: 0 <br>");
document.write("Car at first index of an array: " + cars[0] + "<br>");
document.write("Last index of an array: " + (cars.length - 1) + "<br>");
document.write(
  "Car at last index of an array: " + cars[cars.length - 1] + "<br>"
);

// Question : 11

document.write("<h4>Question 11</h4>");

var studentNames = ["Bilal", "Ali", "Umer"];
var studentScores = [450, 400, 350];
var totalMarks = 500;
var percentage;

for (var a = 0; a < studentNames.length; a++) {
  percentage = (studentScores[a] / totalMarks) * 100;
  document.write(
    "Score of " +
      studentNames[a] +
      " is " +
      studentScores[a] +
      ". Percentage: " +
      percentage.toFixed(2) +
      "%<br>"
  );
}

// Question : 12

document.write("<h4>Question 12</h4>");

var colors = ["Red", "Green", "Blue"];
document.write("<h3>Colors Array</h3>");
document.write(colors + "<br><br>");
// part a
var userColor = prompt("Enter a color to add to the beginning of the array:");
colors.unshift(userColor);
document.write("<h3>After adding color to the beginning</h3>");
document.write(colors + "<br><br>");
// part b
userColor = prompt("Enter a color to add to the end of the array:");
colors.push(userColor);
document.write("<h3>After adding color to the end</h3>");
document.write(colors + "<br><br>");
// part c
colors.unshift("Purple", "Orange");
document.write("<h3>After adding two more colors to the beginning</h3>");
document.write(colors + "<br><br>");
// part d
colors.shift();
document.write("<h3>After removing the first color</h3>");
document.write(colors + "<br><br>");
// part e
colors.pop();
document.write("<h3>After removing the last color</h3>");
document.write(colors + "<br><br>");
// part f
var indexToAdd = prompt("Enter the index to add a color:");
var colorToAdd = prompt("Enter the color to add at index " + indexToAdd + ":");
colors.splice(indexToAdd, 0, colorToAdd);
document.write("<h3>After adding color at index " + indexToAdd + "</h3>");
document.write(colors + "<br><br>");
// part g
var indexToRemove = prompt("Enter the index to start removing color(s):");
var numberOfColorsToRemove = prompt(
  "Enter the number of colors to remove from index " + indexToRemove + ":"
);
colors.splice(indexToRemove, numberOfColorsToRemove);
document.write(
  "<h3>After removing " +
    numberOfColorsToRemove +
    " color(s) from index " +
    indexToRemove +
    "</h3>"
);
document.write(colors + "<br><br>");

// Question : 13

document.write("<h4>Question 13</h4>");

var studentScores = [320, 230, 480, 120];
document.write("<h3>Student Scores</h3>");
document.write(studentScores + "<br><br>");
studentScores.sort();
document.write("<h3>Scores of Students in Ascending Order</h3>");
document.write(studentScores + "<br><br>");

// Question : 14

document.write("<h4>Question 14</h4>");

var fruits = ["Banana", "Apple", "Mango", "Orange", "Strawberry"];
document.write("<h3>Fruits list</h3>");
document.write(fruits + "<br><br>");
fruits.sort();
document.write("<h3>Fruits list in Alphabetical Order</h3>");
document.write(fruits + "<br><br>");

// Question : 15

document.write("<h4>Question 15</h4>");

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

document.write("<h3>Cities List</h3>");
document.write(cities + "<br><br>");

var selectedCities = cities.slice(1, 4);
document.write("<h3>Selected Cities List</h3>");
document.write(selectedCities + "<br><br>");

// Question : 16

document.write("<h4>Question 16</h4>");

var arr = ["This", "is", "my", "cat"];
document.write("<h3>Array</h3>");
document.write(arr + "<br><br>");
var str = arr.join(" ");
document.write("<h3>String</h3>");
document.write(str + "<br><br>");

// Question : 17

document.write("<h4>Question 17</h4>");

var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];

document.write("<h3>Devices:</h3>");
document.write(devices + "<br><br>");

for (var i = 0; i < devices.length; i++) {
  document.write("Out:<br>" + devices[i] + "<br>");
}

// Question : 18

document.write("<h4>Question 18</h4>");

var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];

document.write("<h3>Devices:</h3>");
document.write(devices + "<br><br>");

for (var i = devices.length - 1; i >= 0; i--) {
  document.write("Out:<br>" + devices[i] + "<br>");
}

// Question : 19

document.write("<h4>Question 19</h4>");

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<h5>Manufacturers:</h5>");
document.write("<select>");
for (var i = 0; i < manufacturers.length; i++) {
  document.write("<option>" + manufacturers[i] + "</option>");
}
document.write("</select>");

// Question : 20

var multidimensionalArray = [[], [], []];

// Question : 21

document.write("<h4>Question 21</h4>");

var matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];

document.write("<strong>matrix:</strong><br><br>");

document.write(matrix[0] + "<br>");
document.write(matrix[1] + "<br>");
document.write(matrix[2] + "<br>");

// ----------------------------------------Chapter 14 to 17 End✌✌----------------------------------------

// chapter : 18 to 20

document.write("<h3>Chapter 18 to 20 Start</h3>");

// Question : 1

document.write("<h4>Question 1</h4>");

var greeting = "Hello World";
for (var a = 0; a < 5; a++) {
  document.write(greeting + "<br>");
}

// Question : 2

document.write("<h4>Question 2</h4>");

for (var a = 1; a <= 10; a++) {
  document.write(a + "<br>");
}

// Question : 3

document.write("<h4>Question 3</h4>");

var num = prompt("Enter a number to show its multiplication table:");
num = Number(num);
var length = prompt("Enter length of multiplication table:");
length = Number(length);

for (var a = 1; a <= length; a++) {
  document.write(num + " x " + a + " = " + num * a + "<br>");
}

// Question : 4

document.write("<h4>Question 4</h4>");

var mobileCompanies = [
  "Apple",
  "Samsung",
  "Motorola",
  "Nokia",
  "Sony",
  "Haier",
];

document.write("<b>Mobile Companies:</b><br><br>");
for (var a = 0; a < mobileCompanies.length; a++) {
  document.write(mobileCompanies[a] + "<br>");
}

Question: 5;

document.write("<h4>Question 5</h4>");

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
document.write("<b>Fruits:</b><br><br>");

for (var a = 0; a < fruits.length; a++) {
  document.write(fruits[a] + "<br>");
}
document.write("<br>");

for (var a = 0; a < fruits.length; a++) {
  document.write("Element at index " + a + " is " + fruits[a] + "<br>");
}

// Question : 6

document.write("<h4>Question 6</h4>");

var numberOfItems = prompt("Enter number of items you want to buy:");
numberOfItems = Number(numberOfItems);
document.write("<h4>Number of items: " + numberOfItems + "</h4>");
var items = [];
document.write("<h4>Items:</h4>");
for (var a = 0; a < numberOfItems; a++) {
  var item = prompt("Enter Value for index " + a);
  items.push(item);
  document.write(items[a] + "<br>");
}

// Question : 7

document.write("<h4>Question 7</h4>");
document.write("<b>Counting:</b><br><br>");
for (var a = 1; a <= 15; a++) {
  document.write(a + ",");
}

document.write("<br><br><b>Reverse Counting:</b><br><br>");
for (var a = 15; a >= 1; a--) {
  document.write(a + ",");
}

document.write("<br><br><b>Even:</b><br><br>");
for (var a = 2; a <= 14; a += 2) {
  document.write(a + ",");
}

document.write("<br><br><b>Odd:</b><br><br>");
for (var a = 1; a <= 15; a += 2) {
  document.write(a + ",");
}

document.write("<br><br><b>Series:</b><br><br>");
for (var a = 2; a <= 20; a += 2) {
  document.write(a + "k,");
}

// Question : 8

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt(
  "Welcome to ABC Bakery. What do you want to order sir/ma'am?"
);
search = search.toLowerCase();
var found = false;

for (var a = 0; a < A.length; a++) {
  if (A[a] === search) {
    found = true;
    break;
  }
}

if (found) {
  alert(search + " is available at index " + a + " in our bakery.");
} else {
  alert("We are sorry, " + search + " is not available.");
}

// Question : 9

document.write("<h4>Question 9</h4>");

var numbers = [24, 53, 78, 91, 12];
var largest = numbers[0];
document.write("Array items: " + numbers + "<br>");
for (var a = 1; a < numbers.length; a++) {
  if (numbers[a] > largest) {
    largest = numbers[a];
  }
}
document.write("<br>The largest number is " + largest);

// Question : 10

document.write("<h4>Question 10</h4>");

var numbers = [24, 53, 78, 91, 12];
var smallest = numbers[0];
document.write("Array items: " + numbers + "<br>");
for (var a = 1; a < numbers.length; a++) {
  if (numbers[a] < smallest) {
    smallest = numbers[a];
  }
}
document.write("<br>The smallest number is " + smallest);

// Question : 11

document.write("<h4>Question 11</h4>");

var numbers = [24, 53, 78, 91, 12];
var smallest = numbers[0];
var largest = numbers[0];
document.write("Array items: " + numbers + "<br>");
for (var a = 1; a < numbers.length; a++) {
  if (numbers[a] < smallest) {
    smallest = numbers[a];
  }
}
for (var a = 1; a < numbers.length; a++) {
  if (numbers[a] > largest) {
    largest = numbers[a];
  }
}
document.write("<br>The smallest number is " + smallest);
document.write("<br>The largest number is " + largest);

// Question : 12

document.write("<h4>Question 12</h4>");

var multiple = 5;
for (var a = 1; a <= 20; a++) {
  document.write(multiple * a + ",");
}

// Question : 13

document.write("<h4>Question 13</h4>");

var students = ["Ali", "Sami", "Taha", "Inam"];
var scores = [58, 73, 89, 90];
document.write("<table border='1'><tr><th>Students</th><th>Score</th></tr>");
for (var a = 0; a < students.length; a++) {
  document.write(
    "<tr><td>" + students[a] + "</td><td>" + scores[a] + "</td></tr>"
  );
}
document.write("</table>");

// Question : 14

document.write("<h4>Question 14</h4>");

var scores = [12, 45, 3, 22, 34, 50];
var stopValue = prompt("Enter the score to stop at:");
stopValue = Number(stopValue);
for (var a = 0; a < scores.length; a++) {
  document.write(scores[a] + ",");
  if (scores[a] === stopValue) {
    break;
  }
}

// Queation : 15

document.write("<h4>Question 15</h4>");

var A = [ [1,2,3] , [4,5,6] , [7,8,9] ];

for(a = 0; a < A.length; a++){
    for(b = 0; b < A[a].length; b++){
        document.write(A[a][b] + " ");
    }
    document.write("<br>"); 
}

// Question : 16

document.write("<h4>Question 16</h4>");

var num = prompt("Enter a number");
num = Number(num);
var x = num;
for(a = 0 ; x >= 0; a++){
    document.write(x + ","); 
    x = x - 0.5;
}

// Question : 17

document.write("<h4>Question 17</h4>");

var number = 20;
for(a = 0; a <= number; a++){
    if(a % 2 === 0){
        document.write(a + " is even<br>");
    }
    else{
        document.write(a + " is odd<br>");
    }
}

// Question : 18

document.write("<h4>Question 18</h4>");

var productOfodds = 1;
for(a = 1; a <= 7; a++){
    if(a % 2 !== 0){
        productOfodds *= a;
    }
}
document.write("Product of odd numbers from 1 to 7 is: " + productOfodds);

// Question : 19

document.write("<h4>Question 19</h4>");

var numberOfStars = prompt("Enter number of stars to print:");
numberOfStars = Number(numberOfStars);
for (var a = numberOfStars; a > 0; a--) {
    for (var j = 1; j <= a; j++) {
        document.write("*");
    }
    document.write("<br>");
}

// Question : 20

document.write("<h4>Question 20 </h4>")

for(var a = 0;a < 5;a++){
  document.write("******<br>")
}

for (var a = 0; a < 5; a++) {
    for (var j = 0; j <= a; j++) {
        document.write("*");
    }
    document.write("<br>");
}

for (var a = 5; a >= 0; a--) {
    for (var j = 0; j <= a; j++) {
        document.write("*");
    }
    document.write("<br>");
}

// ----------------------------------------------Chapter : 18 to 20 ✌✌------------------------------------------------