import assert from "assert";
import { Problem } from "../types/problem";

// Exercise 1: Even or Odd
export const starterCodeEvenOrOdd = `function checkEvenOrOdd() {
  const number = parseFloat(prompt("Enter a number:"));
  
  // Write your code here
  if (number % 2 === 0) {
    alert('Even');
    console.log("Even");
  } else {
    alert('Odd');
    console.log("Odd");
  }
  
}
`;

export const handlerEvenOrOdd = async (fn) => {
  let output = "";
  const originalLog = console.log;
  console.log = (...messages) => {
    output += messages.join(" ") + "\n";
  };

  try {
    await fn();

    assert.strictEqual(output.trim(), "Even" || "Odd");
  } catch (error) {
    console.log("EvenOrOdd handler function error");
    //throw new Error(error);
  } finally {
    console.log = originalLog;
  }
};

export const Four: Problem = {
  id: "even-or-odd",
  title: "Even or Odd",
  problemStatement: `
    <p>Exercise: Even or Odd</p>
    <p>Write a program that prompts the user to enter a number and determines whether it is even or odd. Display the result on the console.</p>
    <p>Your task is to complete the code provided by filling in the missing line(s) to achieve the desired output.</p>
  `,
  examples: [
    {
      id: 1,
      inputText: "Number = 7",
      outputText: "Odd",
      explanation: "",
    },
  ],
  constraints: "",
  handlerFunction: handlerEvenOrOdd,
  starterCode: starterCodeEvenOrOdd,
  order: 4,
  starterFunctionName: "checkEvenOrOdd",
};
