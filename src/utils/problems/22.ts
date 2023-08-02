import assert from "assert";
import { Problem } from "../types/problem";

export const starterCodeFindGCD = `function findGCD(a, b) {
  // Write your code here
};`;

// checks if the user has the correct code
export const handlerFindGCD = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const testCases = [
      { input: [12, 18], answer: 6 },
      { input: [24, 36], answer: 12 },
      { input: [48, 72], answer: 24 },
      { input: [7, 11], answer: 1 },
      { input: [10, 5], answer: 5 },
    ];

    // loop all tests to check if the user's code is correct
    for (const { input, answer } of testCases) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(input[0], input[1]);
      assert.strictEqual(result, answer);
    }
    return true;
  } catch (error: any) {
    console.log("findGCD handler function error");
    throw new Error(error);
  }
};

export const findGCD: Problem = {
  id: "find-gcd",
  title: "Find the GCD (Greatest Common Divisor) of Two Numbers",
  problemStatement: `<p class='mt-3'>
  Write a function <code>findGCD(a, b)</code> that takes two positive integers <code>a</code> and <code>b</code> as
  parameters and returns their Greatest Common Divisor (GCD).
</p>`,
  examples: [
    {
      id: 1,
      inputText: `a = 12, b = 18`,
      outputText: `6`,
      explanation: `The GCD of 12 and 18 is 6.`,
    },
    {
      id: 2,
      inputText: `a = 24, b = 36`,
      outputText: `12`,
      explanation: `The GCD of 24 and 36 is 12.`,
    },
  ],
  constraints: `<li class='mt-2'>
  <code>1 ≤ a, b ≤ 10^9</code>
</li>`,
  handlerFunction: handlerFindGCD,
  starterCode: starterCodeFindGCD,
  order: 22,
  starterFunctionName: "function findGCD(",
};
