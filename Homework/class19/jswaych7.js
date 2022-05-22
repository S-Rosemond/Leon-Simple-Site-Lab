const musketeers = ["Athos", "Porthos", "Aramis"];

// use for loop to iterate over array
for (let i = 0; i < musketeers.length; i++) {
  console.log(musketeers[i]);
}

musketeers.push("D'Artagnan");

musketeers.forEach((el) => {
  console.log(el);
});

// Remove Aramis

musketeers.splice(2, 1);

for (let el of musketeers) {
  console.log(el);
}

// Sum of Values
function sumOfValues(array) {
  let result = 0;
  array.forEach((el) => {
    result += el;
  });
  console.log(result);
}

sumOfValues([3, 11, 7, 2, 9, 10]);

// Array maximum
function arrayMax(array) {
  array.sort((a, b) => b - a);

  console.log(array[0]);
}

arrayMax([3, 11, 7, 2, 9, 10]);

// List of words
function listOfWords() {
  let answer = prompt("Enter a word");
  let array = [];
  while (answer !== "stop") {
    array.push(answer);
    answer = prompt("Enter a word");
  }
  console.log(array);
}
