// Fibonacci_sequesnce unto n terms

const number = parseInt(prompt('Enter the number upto which you want fibonacci sequence: '));
let firstNumber = 0, secondNumber = 1, nextNumber;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(firstNumber);
    nextNumber = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = nextNumber;
}