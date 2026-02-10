let grade;
do {
  grade = Number(prompt("Enter your grade (0-100):"));
} while (isNaN(grade) || grade < 0 || grade > 100);

if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else {
  console.log("Sorry, Fail");
}
