import assert from "assert";
import { Problem } from "../types/problem";

export const starterCodeReverseArray = `function reverseArray(arr) {
  // Write your code here
};`;

// checks if the user has the correct code
export const handlerReverseArray = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const testCases = [
      { input: [1, 2, 3, 4, 5], answer: [5, 4, 3, 2, 1] },
      { input: [10, 3, 6, 8, 2], answer: [2, 8, 6, 3, 10] },
      { input: [9, 1, 5, 7], answer: [7, 5, 1, 9] },
      { input: [-1, -5, -3, -10], answer: [-10, -3, -5, -1] },
      { input: [7, 7, 7, 7, 7], answer: [7, 7, 7, 7, 7] },
    ];

    // loop all tests to check if the user's code is correct
    for (const { input, answer } of testCases) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(input);
      assert.deepStrictEqual(result, answer);
    }
    return true;
  } catch (error: any) {
    console.log("reverseArray handler function error");
    throw new Error(error);
  }
};

export const reverseArray: Problem = {
  id: "reverse-array",
  title: "Reverse an Array",
  problemStatement: `<p class='mt-3'>
  Write a function <code>reverseArray(arr)</code> that takes an array <code>arr</code> as
  a parameter and returns a new array with the elements in reverse order.
</p>`,
  examples: [
    {
      id: 1,
      inputText: `arr = [1, 2, 3, 4, 5]`,
      outputText: `[5, 4, 3, 2, 1]`,
      explanation: `The reversed array of [1, 2, 3, 4, 5] is [5, 4, 3, 2, 1].`,
    },
    {
      id: 2,
      inputText: `arr = [10, 3, 6, 8, 2]`,
      outputText: `[2, 8, 6, 3, 10]`,
      explanation: `The reversed array of [10, 3, 6, 8, 2] is [2, 8, 6, 3, 10].`,
    },
  ],
  constraints: `<li class='mt-2'>
  <code>1 ≤ arr.length ≤ 1000</code>
</li>`,
  handlerFunction: handlerReverseArray,
  starterCode: starterCodeReverseArray,
  order: 18,
  starterFunctionName: "function reverseArray(",
};
