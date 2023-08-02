import assert from "assert";
import { Problem } from "../types/problem";

export const starterCodeIsPrime = `function isPrime(n) {
  // Write your code here
};`;

// checks if the user has the correct code
export const handlerIsPrime = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const testCases = [
      { input: 5, answer: true },
      { input: 10, answer: false },
      { input: 13, answer: true },
      { input: 1, answer: false },
      { input: 23, answer: true },
    ];

    // loop all tests to check if the user's code is correct
    for (const { input, answer } of testCases) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(input);
      assert.strictEqual(result, answer);
    }
    return true;
  } catch (error: any) {
    console.log("isPrime handler function error");
    throw new Error(error);
  }
};

export const isPrime: Problem = {
  id: "is-prime",
  title: "Check for Prime Number",
  problemStatement: `<p class='mt-3'>
  Write a function <code>isPrime(n)</code> that takes a positive integer <code>n</code> as
  a parameter and returns <code>true</code> if the number is a prime number, and <code>false</code> otherwise.
</p>
<p class='mt-3'>
  A prime number is a whole number greater than 1 that is divisible by only 1 and itself.
</p>`,
  examples: [
    {
      id: 1,
      inputText: `n = 5`,
      outputText: `true`,
      explanation: `The number 5 is a prime number as it is only divisible by 1 and 5.`,
    },
    {
      id: 2,
      inputText: `n = 10`,
      outputText: `false`,
      explanation: `The number 10 is not a prime number as it is divisible by 1, 2, 5, and 10.`,
    },
  ],
  constraints: `<li class='mt-2'>
  <code>1 ≤ n ≤ 10^9</code>
</li>`,
  handlerFunction: handlerIsPrime,
  starterCode: starterCodeIsPrime,
  order: 14,
  starterFunctionName: "function isPrime(",
};
