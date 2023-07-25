import assert from "assert";
import { Problem } from "../types/problem";

export const starterCodeSimpleSum = `function simpleSum(a, b) {
  // Write your code here
};`;

// checks if the user has the correct code
export const handlerSimpleSum = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const testCases = [
      { a: 2, b: 3, answer: 5 },
      { a: 0, b: 0, answer: 0 },
      { a: -5, b: 5, answer: 0 },
      { a: 10, b: -3, answer: 7 },
      { a: 123, b: 321, answer: 444 },
    ];

    // loop all tests to check if the user's code is correct
    for (const { a, b, answer } of testCases) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(a, b);
      assert.strictEqual(result, answer);
    }
    return true;
  } catch (error: any) {
    console.log("simpleSum handler function error");
    throw new Error(error);
  }
};

export const simpleSum: Problem = {
  id: "simple-sum",
  title: "Simple Sum",
  problemStatement: `<p class='mt-3'>
  Write a function <code>simpleSum(a, b)</code> that takes two integers <code>a</code> and <code>b</code> as
  parameters and returns their sum.
</p>`,
  examples: [
    {
      id: 1,
      inputText: "a = 2, b = 3",
      outputText: "5",
      explanation: "The sum of 2 and 3 is 5.",
    },
    {
      id: 2,
      inputText: "a = 0, b = 0",
      outputText: "0",
      explanation: "The sum of 0 and 0 is 0.",
    },
    {
      id: 3,
      inputText: "a = -5, b = 5",
      outputText: "0",
      explanation: "The sum of -5 and 5 is 0.",
    },
  ],
  constraints: `<li class='mt-2'>
  <code>-10^9 ≤ a, b ≤ 10^9</code>
</li>`,
  handlerFunction: handlerSimpleSum,
  starterCode: starterCodeSimpleSum,
  order: 5,
  starterFunctionName: "function simpleSum(",
};
