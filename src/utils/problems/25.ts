import assert from "assert";
import { Problem } from "../types/problem";

export const starterCodeIsPerfectNumber = `function isPerfectNumber(num) {
  // Write your code here
};`;

// checks if the user has the correct code
export const handlerIsPerfectNumber = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const testCases = [
      { input: 6, answer: true },
      { input: 28, answer: true },
      { input: 496, answer: true },
      { input: 12, answer: false },
      { input: 8128, answer: true },
    ];

    // loop all tests to check if the user's code is correct
    for (const { input, answer } of testCases) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(input);
      assert.strictEqual(result, answer);
    }
    return true;
  } catch (error: any) {
    console.log("isPerfectNumber handler function error");
    throw new Error(error);
  }
};

export const isPerfectNumber: Problem = {
  id: "is-perfect-number",
  title: "Check for Perfect Number",
  problemStatement: `<p class='mt-3'>
  Write a function <code>isPerfectNumber(num)</code> that takes an integer <code>num</code> as
  a parameter and returns <code>true</code> if the number is a perfect number, and <code>false</code> otherwise.
</p>
<p class='mt-3'>
  A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding the number itself. For example, 6 is a perfect number because <code>1 + 2 + 3 = 6</code>.
</p>`,
  examples: [
    {
      id: 1,
      inputText: `num = 6`,
      outputText: `true`,
      explanation: `The number 6 is a perfect number as <code>1 + 2 + 3 = 6</code>.`,
    },
    {
      id: 2,
      inputText: `num = 28`,
      outputText: `true`,
      explanation: `The number 28 is a perfect number as <code>1 + 2 + 4 + 7 + 14 = 28</code>.`,
    },
  ],
  constraints: `<li class='mt-2'>
  <code>1 ≤ num ≤ 10^6</code>
</li>`,
  handlerFunction: handlerIsPerfectNumber,
  starterCode: starterCodeIsPerfectNumber,
  order: 25,
  starterFunctionName: "function isPerfectNumber(",
};
