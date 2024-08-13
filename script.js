// i have an array of numbers that i want to sort them, at first i made my array here

var numbers = [2, 10, 20, 3, 0, 7];

// now i want to write a condition for this array, i use 'for'

for (let i = 0; i < numbers.length; i++) {
  // i made another for to compare numbers with each other
  for (let j = 1; j < i; j++) {
    if (numbers[i] < numbers[j]) {
      var myArray = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = myArray;
    }
  }
}
console.log(numbers);
