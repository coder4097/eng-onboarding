// Fibonacci_sequesnce unto n terms

const number = parseInt(
  prompt(
    "Enter the number (greater than zero) upto which you want fibonacci sequence: "
  )
);
let firstNumber = 0,
  secondNumber = 1,
  nextNumber;

console.log("Fibonacci Sequence:");

for (let i = 1; i <= number; i++) {
  console.log(firstNumber);
  nextNumber = firstNumber + secondNumber;
  firstNumber = secondNumber;
  secondNumber = nextNumber;
}
