// console.log("chailye shuru karte hai");

// const rectangle = {
//   length: "1",
//   breath: "2",

//   draw: function () {
//     console.log("draw");
//   },
// };

// function createRectangle(length, breath) {
//   return (rectangle = {
//     length,
//     breath,

//     draw: function () {
//       console.log("draw");
//     },
//   });
// }

// let rectangle0bj1 = createRectangle(2, 5);
// console.log('raj');
// function Rectangle(length , breath) {
//   this.length;
//   this.breath;
//   this.draw = function () {
//     console.log("drawing");
//   };
// }

// let rectangleObject = new Rectangle(2,3);

//question 1
function sumofnumber(a, b) {
  const sum = a + b;
  return sum;
}

console.log(sumofnumber(2, 4));

//question 2

function getStringLength(str) {
  const length = str.length;

  return length;
}

console.log(getStringLength("tejasvi"));

//question 3

const num1 = 23;
const num2 = 20;

const sum = num1 + num2;
const diff = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;

console.log(`Sum: ${sum}`);
console.log(`Difference: ${diff}`);
console.log(`Product: ${product}`);
console.log(`Quotient: ${quotient}`);

//question 4

function findLargestNumber(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(findLargestNumber(5, 10));

// qusetion 5

const originalString = "CodeHelp";

function reverseString(str) {
  const reversedString = str.split("").reverse().join("");

  return reversedString;

}

console.log(reverseString(originalString));


//question 6

function checkNumber (number) {

    if(number > 0){
        console.log(`${number} is positive`);
    }

    else if (number < 0) {
        console.log(`${number} is negative`);
    }

    else {
        console.log(`${number} is zero`);
    }
}

checkNumber(10); // Output: "10 is positive"
checkNumber(-5); // Output: "-5 is negative"
checkNumber(0); // Output: "0 is zero"
checkNumber(1); // Output: "1 is positive"
checkNumber(-1);
