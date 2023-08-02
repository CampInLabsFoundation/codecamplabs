import assert from "assert";
import { Problem } from "../types/problem";

export const starterCodeRemoveDuplicates = `function removeDuplicates(arr) {
  // Write your code here
};`;

// checks if the user has the correct code
export const handlerRemoveDuplicates = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const testCases = [
      { input: [1, 2, 3, 4, 5], answer: [1, 2, 3, 4, 5] },
      { input: [10, 3, 6, 8, 3, 2, 6], answer: [10, 3, 6, 8, 2] },
      { input: [9, 1, 5, 7, 1, 5, 9], answer: [9, 1, 5, 7] },
      { input: [-1, -5, -3, -10, -3, -5, -1], answer: [-1, -5, -3, -10] },
      { input: [7, 7, 7, 7, 7], answer: [7] },
    ];

    // loop all tests to check if the user's code is correct
    for (const { input, answer } of testCases) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(input);
      assert.deepStrictEqual(result, answer);
    }
    return true;
  } catch (error: any) {
    console.log("removeDuplicates handler function error");
    throw new Error(error);
  }
};

export const removeDuplicates: Problem = {
  id: "remove-duplicates",
  title: "Remove Duplicates from an Array",
  problemStatement: `<p class='mt-3'>
  Write a function <code>removeDuplicates(arr)</code> that takes an array <code>arr</code> as
  a parameter and returns a new array with duplicate elements removed.
</p>`,
  examples: [
    {
      id: 1,
      inputText: `arr = [1, 2, 3, 4, 5]`,
      outputText: `[1, 2, 3, 4, 5]`,
      explanation: `The array [1, 2, 3, 4, 5] does not have any duplicate elements.`,
    },
    {
      id: 2,
      inputText: `arr = [10, 3, 6, 8, 3, 2, 6]`,
      outputText: `[10, 3, 6, 8, 2]`,
      explanation: `The array [10, 3, 6, 8, 3, 2, 6] has duplicate elements 3 and 6, which are removed in the new array.`,
    },
  ],
  constraints: `<li class='mt-2'>
  <code>1 ≤ arr.length ≤ 1000</code>
</li>`,
  handlerFunction: handlerRemoveDuplicates,
  starterCode: starterCodeRemoveDuplicates,
  order: 20,
  starterFunctionName: "function removeDuplicates(",
};
