import assert from "assert";
import { Problem } from "../types/problem";

export const starterCodeFindMax = `function findMax(nums) {
  // Write your code here
};`;

// checks if the user has the correct code
export const handlerFindMax = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const testCases = [
      { input: [1, 5, 3, 9, 2], answer: 9 },
      { input: [0, -5, -2, -8, -1], answer: 0 },
      { input: [10], answer: 10 },
      { input: [-3, -6, -1, -8, -4], answer: -1 },
      { input: [2, 2, 2, 2, 2], answer: 2 },
    ];

    // loop all tests to check if the user's code is correct
    for (const { input, answer } of testCases) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(input);
      assert.strictEqual(result, answer);
    }
    return true;
  } catch (error: any) {
    console.log("findMax handler function error");
    throw new Error(error);
  }
};

export const findMax: Problem = {
  id: "find-max",
  title: "Find the Maximum",
  problemStatement: `<p class='mt-3'>
  Write a function <code>findMax(nums)</code> that takes an array of integers <code>nums</code> as
  a parameter and returns the maximum value in the array.
</p>
<p class='mt-3'><strong>Hint:</strong> You can solve this problem by iterating through the array and keeping track of the maximum value found so far. Start by assuming that the first element of the array is the maximum, and then update the maximum as you iterate through the rest of the elements.</p>`,
  examples: [
    {
      id: 1,
      inputText: `nums = [1, 5, 3, 9, 2]`,
      outputText: `9`,
      explanation: `The maximum value in the array [1, 5, 3, 9, 2] is 9.`,
    },
    {
      id: 2,
      inputText: `nums = [0, -5, -2, -8, -1]`,
      outputText: `0`,
      explanation: `The maximum value in the array [0, -5, -2, -8, -1] is 0.`,
    },
  ],
  constraints: `<li class='mt-2'>
  <code>1 ≤ nums.length ≤ 1000</code>
</li>`,
  handlerFunction: handlerFindMax,
  starterCode: starterCodeFindMax,
  order: 9,
  starterFunctionName: "function findMax(",
};
