
// ex 1 
function square(number) {
    return number*number;
}
console.log(square(2));
console.log(square(5));

// ex 2

function cube(number) {
    return number*number*number;
}
console.log(cube(2));
console.log(cube(3));

//ex 3
"."= operator 
function charAtIndex(string, number) {
    return string.charAt(number)
}
console.log(charAtIndex("hello", 2));
console.log(charAtIndex("world", 0));

// ex 4
 
function addFourNums(num1, num2, num3, num4) {
    return (num1+ num2+ num3+ num4);
}
console.log(addFourNums(1, 1, 1, 1));
console.log(addFourNums(1, 2, 3, 4));

// ex 5 

function perimeterRect(width, length) {
    return 2*(width+length);
}
console.log(perimeterRect(10, 6));
console.log(perimeterRect(5, 15));

// ex 6

function areaRect(width, length) { 
return width*length;
}
   
console.log(areaRect(8, 11));
console.log(areaRect(5, 60));

 // ex 7
 function tripleArea(width, length) {
    return 3*width*length;
 }
console.log(tripleArea(5, 8));
console.log(tripleArea(70, 40));





// ADVANCED 

// ex 1
toFixed=to fix how many numbers after the ","
function perimeterOfCircle(radius) {
    return (2* Math.PI *radius).toFixed(2);
}
console.log(perimeterOfCircle(3));
console.log(perimeterOfCircle(5));
console.log(perimeterOfCircle(8));

// ex 2

function areaOfCircle(radius) {
    return (Math.PI*radius*radius).toFixed(2);
}
console.log(areaOfCircle(3));
console.log(areaOfCircle(5));
console.log(areaOfCircle(8));

// ex 3

function inchesToCentimeters(inches) {
    return inches*2.54;
}
console.log(inchesToCentimeters(3));
console.log(inchesToCentimeters(4));
console.log(inchesToCentimeters(10));

// ex 4

function centimeterToInches(centimeter) {
    return (centimeter/2.54).toFixed(5);
}
console.log(centimeterToInches(10));
console.log(centimeterToInches(12));
console.log(centimeterToInches(16));

// ex 5 

function totalSecondsConverter(hours, minutes, seconds) {
    return hours*3600+minutes*60+seconds;
}
console.log(totalSecondsConverter(0, 3, 4));
console.log(totalSecondsConverter(1, 0, 7));
console.log(totalSecondsConverter(1, 1, 5));

// ex 6
9.875/100= 0.09875 
20/100=0.2
total = number*(1+0.9875+0.2)=1.29875
1 = each dollar


function billTotal(number) {
  return number*(1+0.09875+0.2);
}
console.log(billTotal(15));
console.log(billTotal(20));

// ex 7

function convertToKilometers(miles) {
    return miles*1.60934;
}
console.log(convertToKilometers(5));
console.log(convertToKilometers(9));


// EXTRA PRACTICE 

// ex 1

function square1(x){
    return x *x;
}

function square2(x) {
    return x *x;
}
function square3(x) {
    return x*x;
}

// ex 2 

function largest(num1, num2) {
    if (num1> num2) {
        console.log(num1);
    }
    else {
        console.log(num2);
    }
}
largest(7, 3);
largest(2, 9);

// ex 3

function convertTemp(celsius) {
    return (celsius*1.8)+32;
}
console.log(convertTemp(12));

// ex 6

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
console.log(capitalize("pizza"));

// ex 7

function billing(price1, price2, price3,) {
    let totalPrice = price1 + price2 + price3;
    let tip = totalPrice * 0.15;
    let totalToPay = totalPrice + tip;

    return "your total is $ " + totalToPay.toFixed(2) + ". thank you for the $ " + tip.toFixed(2) + " tip";
}
console.log(billing(7,8,6));

// ex 8 

function awesoneMessage(firstName, interest, hobby) {
    return "Hi, my name is " + firstName + ". I love " + interest + ". In my spare time, I like to " + hobby + ".";
}
console.log(awesoneMessage("Julia", "cats", "play video games"));





 





