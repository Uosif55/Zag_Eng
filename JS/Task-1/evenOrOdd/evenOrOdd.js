let num;

do {
  num = Number(prompt("Enter Only number and Only digit"));
} while (isNaN(num) || !Number.isInteger(num));

if (num % 2 == 0) {
  console.log(`${num} is Even`);
} else {
  console.log(`${num} is Odd`);
}
