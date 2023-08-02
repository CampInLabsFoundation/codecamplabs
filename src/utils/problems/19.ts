import assert from "assert";
import { Problem } from "../types/problem";

export const starterCodeFindAverage = `function findAverage(arr) {
  // Write your code here
};`;

// checks if the user has the correct code
export const handlerFindAverage = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const testCases = [
      { input: [1, 2, 3, 4, 5], answer: 3 },
      { input: [10, 3, 6, 8, 2], answer: 5.8 },
      { input: [9, 1, 5, 7], answer: 5.5 },
      { input: [-1, -5, -3, -10], answer: -4.75 },
      { input: [7, 7, 7, 7, 7], answer: 7 },
    ];

    // loop all tests to check if the user's code is correct
    for (const { input, answer } of testCases) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(input);
      assert.strictEqual(result, answer);
    }
    return true;
  } catch (error: any) {
    console.log("findAverage handler function error");
    throw new Error(error);
  }
};

export const findAverage: Problem = {
  id: "find-average",
  title: "Find the Average of an Array",
  problemStatement: `<p class='mt-3'>
  Write a function <code>findAverage(arr)</code> that takes an array of numbers <code>arr</code> as
  a parameter and returns the average of the numbers as a floating-point number.
</p>`,
  examples: [
    {
      id: 1,
      inputText: `arr = [1, 2, 3, 4, 5]`,
      outputText: `3`,
      explanation: `The average of [1, 2, 3, 4, 5] is (1 + 2 + 3 + 4 + 5) / 5 = 3.`,
    },
    {
      id: 2,
      inputText: `arr = [10, 3, 6, 8, 2]`,
      outputText: `5.8`,
      explanation: `The average of [10, 3, 6, 8, 2] is (10 + 3 + 6 + 8 + 2) / 5 = 5.8.`,
    },
  ],
  constraints: `<li class='mt-2'>
  <code>1 ≤ arr.length ≤ 1000</code>
</li>`,
  handlerFunction: handlerFindAverage,
  starterCode: starterCodeFindAverage,
  order: 19,
  starterFunctionName: "function findAverage(",
};
