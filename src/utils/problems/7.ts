import assert from "assert";
import { Problem } from "../types/problem";

export const starterCodeIsLeapYear = `function isLeapYear(year) {
  // Write your code here
};`;

// checks if the user has the correct code
export const handlerIsLeapYear = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const testCases = [
      { input: 2020, answer: true },
      { input: 2000, answer: true },
      { input: 1900, answer: false },
      { input: 2021, answer: false },
      { input: 2008, answer: true },
    ];

    // loop all tests to check if the user's code is correct
    for (const { input, answer } of testCases) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(input);
      assert.strictEqual(result, answer);
    }
    return true;
  } catch (error: any) {
    console.log("isLeapYear handler function error");
    throw new Error(error);
  }
};

export const isLeapYear: Problem = {
  id: "is-leap-year",
  title: "Check if a Year is a Leap Year",
  problemStatement: `<p class='mt-3'>
  Write a function <code>isLeapYear(year)</code> that takes a year <code>year</code> as
  a parameter and returns <code>true</code> if the year is a leap year, and <code>false</code> otherwise.
</p>
<p class='mt-3'><strong>Hint:</strong> A leap year is a year that is divisible by 4 but not divisible by 100, except if it is also divisible by 400. You can use if-else statements to check the conditions for a leap year and return the corresponding result.</p>`,
  examples: [
    {
      id: 1,
      inputText: `year = 2020`,
      outputText: `true`,
      explanation: `2020 is divisible by 4 but not divisible by 100, so it is a leap year.`,
    },
    {
      id: 2,
      inputText: `year = 2000`,
      outputText: `true`,
      explanation: `2000 is divisible by 4 and divisible by 400, so it is a leap year.`,
    },
    {
      id: 3,
      inputText: `year = 1900`,
      outputText: `false`,
      explanation: `1900 is divisible by 4 and divisible by 100, so it is not a leap year.`,
    },
  ],
  constraints: `<li class='mt-2'>
  <code>1 ≤ year ≤ 10^9</code>
</li>`,
  handlerFunction: handlerIsLeapYear,
  starterCode: starterCodeIsLeapYear,
  order: 7,
  starterFunctionName: "function isLeapYear(",
};
