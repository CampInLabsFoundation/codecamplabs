import assert from "assert";
import { Problem } from "../types/problem";

export const starterCodeSumDigits = `function sumDigits(n) {
  // Write your code here
};`;

// checks if the user has the correct code
export const handlerSumDigits = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const testCases = [
      { input: 123, answer: 6 },
      { input: 9876, answer: 30 },
      { input: 0, answer: 0 },
      { input: 999, answer: 27 },
      { input: 12, answer: 3 },
    ];

    // loop all tests to check if the user's code is correct
    for (const { input, answer } of testCases) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(input);
      assert.strictEqual(result, answer);
    }
    return true;
  } catch (error: any) {
    console.log("sumDigits handler function error");
    throw new Error(error);
  }
};

export const sumDigits: Problem = {
  id: "sum-digits",
  title: "Find the Sum of Digits of a Number",
  problemStatement: `<p class='mt-3'>
  Write a function <code>sumDigits(n)</code> that takes a non-negative integer <code>n</code> as
  a parameter and returns the sum of its digits.
</p>`,
  examples: [
    {
      id: 1,
      inputText: `n = 123`,
      outputText: `6`,
      explanation: `The sum of digits of 123 is 1 + 2 + 3 = 6.`,
    },
    {
      id: 2,
      inputText: `n = 9876`,
      outputText: `30`,
      explanation: `The sum of digits of 9876 is 9 + 8 + 7 + 6 = 30.`,
    },
  ],
  constraints: `<li class='mt-2'>
  <code>0 ≤ n ≤ 10^9</code>
</li>`,
  handlerFunction: handlerSumDigits,
  starterCode: starterCodeSumDigits,
  order: 13,
  starterFunctionName: "function sumDigits(",
};
