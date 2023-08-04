import assert from "assert";
import { Problem } from "../types/problem";

export const starterCodeEvenOrOdd = `function evenOrOdd(num) {
  // Write your code here
};`;

// checks if the user has the correct code
export const handlerEvenOrOdd = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const testCases = [
      { input: 4, answer: "Even" },
      { input: 7, answer: "Odd" },
      { input: 0, answer: "Even" },
      { input: -5, answer: "Odd" },
      { input: 12, answer: "Even" },
    ];

    // loop all tests to check if the user's code is correct
    for (const { input, answer } of testCases) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(input);
      assert.strictEqual(result, answer);
    }
    return true;
  } catch (error: any) {
    console.log("evenOrOdd handler function error");
    throw new Error(error);
  }
};

export const evenOrOdd: Problem = {
  id: "even-or-odd",
  title: "Even or Odd",
  problemStatement: `<p class='mt-3'>
  Write a function <code>evenOrOdd(num)</code> that takes an integer <code>num</code> as
  a parameter and returns <code>"Even"</code> if the number is even, and <code>"Odd"</code> if the number is odd.
</p>`,
  examples: [
    {
      id: 1,
      inputText: `num = 4`,
      outputText: `"Even"`,
      explanation: `The number 4 is even.`,
    },
    {
      id: 2,
      inputText: `num = 7`,
      outputText: `"Odd"`,
      explanation: `The number 7 is odd.`,
    },
  ],
  constraints: `<li class='mt-2'>
  <code>-10^9 ≤ num ≤ 10^9</code>
</li>`,
  handlerFunction: handlerEvenOrOdd,
  starterCode: starterCodeEvenOrOdd,
  order: 4,
  starterFunctionName: "function evenOrOdd(",
};
