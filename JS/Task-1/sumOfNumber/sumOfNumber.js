let num;
do {
  num = Number(
    prompt("Enter a number to calculate the sum from 1 to that number"),
  );
} while (isNaN(num));

let sum = 0;
for (let i = 1; i <= num; i++) {
  sum += i;
}
console.log(`Summation from 1 to ${num} = ${sum} `);
document.writeln(
  `
  <h1 style=" text-align: center;
    width: 70%;
    padding : 20px;
    color: white ;
    margin: auto;
    background-color: gray;
    border-radius: 25px; ">
    Summation from 1 to ${num} = ${sum} 
  </h1>`,
);
