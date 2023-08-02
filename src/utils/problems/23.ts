import assert from "assert";
import { Problem } from "../types/problem";

export const starterCodePowerOfNumber = `function powerOfNumber(base, exponent) {
  // Write your code here
};`;

// checks if the user has the correct code
export const handlerPowerOfNumber = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const testCases = [
      { input: [2, 3], answer: 8 },
      { input: [3, 4], answer: 81 },
      { input: [5, 2], answer: 25 },
      { input: [1, 100], answer: 1 },
      { input: [4, 0], answer: 1 },
    ];

    // loop all tests to check if the user's code is correct
    for (const { input, answer } of testCases) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(input[0], input[1]);
      assert.strictEqual(result, answer);
    }
    return true;
  } catch (error: any) {
    console.log("powerOfNumber handler function error");
    throw new Error(error);
  }
};

export const powerOfNumber: Problem = {
  id: "power-of-number",
  title: "Calculate Power of a Number",
  problemStatement: `<p class='mt-3'>
  Write a function <code>powerOfNumber(base, exponent)</code> that takes two positive integers <code>base</code> and <code>exponent</code> as
  parameters and returns the value of <code>base</code> raised to the power of <code>exponent</code>.
</p>`,
  examples: [
    {
      id: 1,
      inputText: `base = 2, exponent = 3`,
      outputText: `8`,
      explanation: `2 raised to the power of 3 is 2 * 2 * 2 = 8.`,
    },
    {
      id: 2,
      inputText: `base = 3, exponent = 4`,
      outputText: `81`,
      explanation: `3 raised to the power of 4 is 3 * 3 * 3 * 3 = 81.`,
    },
  ],
  constraints: `<li class='mt-2'>
  <code>1 ≤ base, exponent ≤ 10</code>
</li>`,
  handlerFunction: handlerPowerOfNumber,
  starterCode: starterCodePowerOfNumber,
  order: 23,
  starterFunctionName: "function powerOfNumber(",
};
