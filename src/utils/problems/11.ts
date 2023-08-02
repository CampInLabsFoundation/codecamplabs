import assert from "assert";
import { Problem } from "../types/problem";

export const starterCodeSumEvenNumbers = `function sumEvenNumbers(n) {
  // Write your code here
};`;

// checks if the user has the correct code
export const handlerSumEvenNumbers = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const testCases = [
      { input: 5, answer: 6 },
      { input: 10, answer: 30 },
      { input: 3, answer: 2 },
      { input: 1, answer: 0 },
      { input: 7, answer: 12 },
    ];

    // loop all tests to check if the user's code is correct
    for (const { input, answer } of testCases) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(input);
      assert.strictEqual(result, answer);
    }
    return true;
  } catch (error: any) {
    console.log("sumEvenNumbers handler function error");
    throw new Error(error);
  }
};

export const sumEvenNumbers: Problem = {
  id: "sum-even-numbers",
  title: "Calculate the Sum of Even Numbers from 1 to N",
  problemStatement: `<p class='mt-3'>
  Write a function <code>sumEvenNumbers(n)</code> that takes a positive integer <code>n</code> as
  a parameter and returns the sum of all even numbers from 1 to <code>n</code>.
</p>`,
  examples: [
    {
      id: 1,
      inputText: `n = 5`,
      outputText: `6`,
      explanation: `The even numbers from 1 to 5 are 2 and 4. The sum of these numbers is 2 + 4 = 6.`,
    },
    {
      id: 2,
      inputText: `n = 10`,
      outputText: `30`,
      explanation: `The even numbers from 1 to 10 are 2, 4, 6, 8, and 10. The sum of these numbers is 2 + 4 + 6 + 8 + 10 = 30.`,
    },
  ],
  constraints: `<li class='mt-2'>
  <code>1 ≤ n ≤ 100</code>
</li>`,
  handlerFunction: handlerSumEvenNumbers,
  starterCode: starterCodeSumEvenNumbers,
  order: 11,
  starterFunctionName: "function sumEvenNumbers(",
};
