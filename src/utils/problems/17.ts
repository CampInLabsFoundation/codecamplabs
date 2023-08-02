import assert from "assert";
import { Problem } from "../types/problem";

export const starterCodeIsArmstrong = `function isArmstrong(n) {
  // Write your code here
};`;

// checks if the user has the correct code
export const handlerIsArmstrong = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const testCases = [
      { input: 153, answer: true },
      { input: 370, answer: true },
      { input: 9474, answer: true },
      { input: 123, answer: false },
      { input: 371, answer: false },
    ];

    // loop all tests to check if the user's code is correct
    for (const { input, answer } of testCases) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(input);
      assert.strictEqual(result, answer);
    }
    return true;
  } catch (error: any) {
    console.log("isArmstrong handler function error");
    throw new Error(error);
  }
};

export const isArmstrong: Problem = {
  id: "is-armstrong",
  title: "Check for Armstrong Number",
  problemStatement: `<p class='mt-3'>
  Write a function <code>isArmstrong(n)</code> that takes a positive integer <code>n</code> as
  a parameter and returns <code>true</code> if the number is an Armstrong number, and <code>false</code> otherwise.
</p>
<p class='mt-3'>
  An Armstrong number (also known as narcissistic number) of order <code>k</code> is a number that is equal to the sum of its own digits raised to the power of <code>k</code>.
</p>`,
  examples: [
    {
      id: 1,
      inputText: `n = 153`,
      outputText: `true`,
      explanation: `153 is an Armstrong number as 1^3 + 5^3 + 3^3 = 153.`,
    },
    {
      id: 2,
      inputText: `n = 370`,
      outputText: `true`,
      explanation: `370 is an Armstrong number as 3^3 + 7^3 + 0^3 = 370.`,
    },
  ],
  constraints: `<li class='mt-2'>
  <code>1 ≤ n ≤ 10^9</code>
</li>`,
  handlerFunction: handlerIsArmstrong,
  starterCode: starterCodeIsArmstrong,
  order: 17,
  starterFunctionName: "function isArmstrong(",
};
