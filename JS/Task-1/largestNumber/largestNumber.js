let n;
let numbers = [];

do {
  n = Number(prompt("Enter the number of numbers you want to compare."));
} while (isNaN(n) || !Number.isInteger(n));

for (let i = 0; i < n; i++) {
  numbers[i] = Number(prompt(`Enter Num ${i + 1}`));
}
let larger = 0;
for (let i = 0; i < numbers.length; i++) {
  if (larger < numbers[i]) {
    larger = numbers[i];
  }
}
console.log(numbers);
console.log(larger);
