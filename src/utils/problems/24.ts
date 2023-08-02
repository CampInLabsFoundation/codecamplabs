import assert from "assert";
import { Problem } from "../types/problem";

export const starterCodeSumOfEvenNumbers = `function sumOfEvenNumbers(nums) {
  // Write your code here
};`;

// checks if the user has the correct code
export const handlerSumOfEvenNumbers = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const testCases = [
      { input: [1, 2, 3, 4, 5], answer: 6 },
      { input: [2, 4, 6, 8, 10], answer: 30 },
      { input: [11, 13, 15, 17, 19], answer: 0 },
      { input: [0, 2, 4, 6, 8, 10], answer: 30 },
      { input: [1, 3, 5, 7, 9], answer: 0 },
    ];

    // loop all tests to check if the user's code is correct
    for (const { input, answer } of testCases) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(input);
      assert.strictEqual(result, answer);
    }
    return true;
  } catch (error: any) {
    console.log("sumOfEvenNumbers handler function error");
    throw new Error(error);
  }
};

export const sumOfEvenNumbers: Problem = {
  id: "sum-of-even-numbers",
  title: "Sum of Even Numbers",
  problemStatement: `<p class='mt-3'>
  Write a function <code>sumOfEvenNumbers(nums)</code> that takes an array of integers <code>nums</code> as
  a parameter and returns the sum of even numbers in the array.
</p>`,
  examples: [
    {
      id: 1,
      inputText: `nums = [1, 2, 3, 4, 5]`,
      outputText: `6`,
      explanation: `The even numbers in the array are 2 and 4, and their sum is 6.`,
    },
    {
      id: 2,
      inputText: `nums = [2, 4, 6, 8, 10]`,
      outputText: `30`,
      explanation: `All numbers in the array are even, and their sum is 30.`,
    },
  ],
  constraints: `<li class='mt-2'>
  <code>1 ≤ nums.length ≤ 1000</code>
</li>`,
  handlerFunction: handlerSumOfEvenNumbers,
  starterCode: starterCodeSumOfEvenNumbers,
  order: 24,
  starterFunctionName: "function sumOfEvenNumbers(",
};
