let num;
let n;
do {
  num = Number(prompt("Enter a number for the multiplication table"));
  n = Number(prompt(`Up to what number should I multiply ${num}?`));
} while (
  isNaN(num) ||
  !Number.isInteger(num) ||
  isNaN(n) ||
  !Number.isInteger(n)
);

for (let i = 1; i <= n; i++) {
  console.log(` ${i} * ${num} = ${i * num}`);
}

//------------------------------------------------------------------
// ? Flexible Multiplication Table

/*
let num;
let limit;
do {
    // عايز تضرب لحد الجدول الكام
    // مثلا اختارنا لل 12
  num = Number(prompt("Which number do you want to multiply?"));
//   ايه هيا الارقام اللى عايز تضربها لحد ال 12
  limit = Number(prompt(`Up to what numbers should I multiply ?`));
} while (
  isNaN(num) ||
  !Number.isInteger(num) ||
  isNaN(limit) ||
  !Number.isInteger(limit)
);

for (let i = 1; i <= limit; i++) {
  for (let j = 1; j <= num; j++) {
    console.log(` ${i} * ${j} = ${j * i}`);
  }
  console.log("-------------------------------------------------------");
}
*/
