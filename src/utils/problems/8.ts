import assert from "assert";
import { Problem } from "../types/problem";

export const starterCodePrintNumbers = `function printNumbers(n) {
  // Write your code here
};`;

// checks if the user has the correct code
export const handlerPrintNumbers = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const testCases = [
      { input: 5, answer: [1, 2, 3, 4, 5] },
      { input: 10, answer: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
      { input: 3, answer: [1, 2, 3] },
      { input: 1, answer: [1] },
      { input: 0, answer: [] },
    ];

    // loop all tests to check if the user's code is correct
    for (const { input, answer } of testCases) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(input);
      assert.deepStrictEqual(result, answer);
    }
    return true;
  } catch (error: any) {
    console.log("printNumbers handler function error");
    throw new Error(error);
  }
};

export const printNumbers: Problem = {
  id: "print-numbers",
  title: "Print Numbers from 1 to N",
  problemStatement: `<p class='mt-3'>
  Write a function <code>printNumbers(n)</code> that takes a positive integer <code>n</code> as
  a parameter and returns an array containing numbers from 1 to <code>n</code>.
</p>`,
  examples: [
    {
      id: 1,
      inputText: `n = 5`,
      outputText: `[1, 2, 3, 4, 5]`,
      explanation: `The array contains numbers from 1 to 5.`,
    },
    {
      id: 2,
      inputText: `n = 10`,
      outputText: `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`,
      explanation: `The array contains numbers from 1 to 10.`,
    },
  ],
  constraints: `<li class='mt-2'>
  <code>1 ≤ n ≤ 100</code>
</li>`,
  handlerFunction: handlerPrintNumbers,
  starterCode: starterCodePrintNumbers,
  order: 8,
  starterFunctionName: "function printNumbers(",
};
