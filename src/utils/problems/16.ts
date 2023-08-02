import assert from "assert";
import { Problem } from "../types/problem";

export const starterCodeSecondLargest = `function secondLargest(nums) {
  // Write your code here
};`;

// checks if the user has the correct code
export const handlerSecondLargest = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const testCases = [
      { input: [1, 2, 3, 4, 5], answer: 4 },
      { input: [10, 3, 6, 8, 2], answer: 8 },
      { input: [9, 9, 9], answer: 9 },
      { input: [-1, -5, -3, -10], answer: -3 },
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
    console.log("secondLargest handler function error");
    throw new Error(error);
  }
};

export const secondLargest: Problem = {
  id: "second-largest",
  title: "Find the Second Largest Number in an Array",
  problemStatement: `<p class='mt-3'>
  Write a function <code>secondLargest(nums)</code> that takes an array of integers <code>nums</code> as
  a parameter and returns the second largest number from the array.
</p>`,
  examples: [
    {
      id: 1,
      inputText: `nums = [1, 2, 3, 4, 5]`,
      outputText: `4`,
      explanation: `The second largest number in the array [1, 2, 3, 4, 5] is 4.`,
    },
    {
      id: 2,
      inputText: `nums = [10, 3, 6, 8, 2]`,
      outputText: `8`,
      explanation: `The second largest number in the array [10, 3, 6, 8, 2] is 8.`,
    },
  ],
  constraints: `<li class='mt-2'>
  <code>2 ≤ nums.length ≤ 1000</code>
</li> <li class='mt-2'>
  <code>-10^9 ≤ nums[i] ≤ 10^9</code>
</li>`,
  handlerFunction: handlerSecondLargest,
  starterCode: starterCodeSecondLargest,
  order: 16,
  starterFunctionName: "function secondLargest(",
};
