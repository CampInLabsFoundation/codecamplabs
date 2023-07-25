import assert from "assert";
import { Problem } from "../types/problem";

export const starterCodeCheckNumber = `function checkNumber(num) {
  // Write your code here
};`;

// checks if the user has the correct code
export const handlerCheckNumber = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const testCases = [
      { input: 5, answer: "positive" },
      { input: -3, answer: "negative" },
      { input: 0, answer: "zero" },
      { input: 10, answer: "positive" },
      { input: -7, answer: "negative" },
    ];

    // loop all tests to check if the user's code is correct
    for (const { input, answer } of testCases) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(input);
      assert.strictEqual(result, answer);
    }
    return true;
  } catch (error: any) {
    console.log("checkNumber handler function error");
    throw new Error(error);
  }
};

export const checkNumber: Problem = {
  id: "check-number",
  title: "Check if a Number is Positive, Negative, or Zero",
  problemStatement: `<p class='mt-3'>
  Write a function <code>checkNumber(num)</code> that takes a number <code>num</code> as
  a parameter and returns "positive" if the number is greater than zero,
  "negative" if the number is less than zero, and "zero" if the number is equal to zero.
</p>
<p class='mt-3'><strong>Hint:</strong> You can use if-else statements to check the value of the number and return the corresponding result. Remember to handle the case when the number is zero separately.</p>`,
  examples: [
    {
      id: 1,
      inputText: `num = 5`,
      outputText: `"positive"`,
      explanation: `5 is greater than zero, so it is "positive".`,
    },
    {
      id: 2,
      inputText: `num = -3`,
      outputText: `"negative"`,
      explanation: `-3 is less than zero, so it is "negative".`,
    },
    {
      id: 3,
      inputText: `num = 0`,
      outputText: `"zero"`,
      explanation: `0 is equal to zero, so it is "zero".`,
    },
  ],
  constraints: `<li class='mt-2'>
  <code>-10^9 ≤ num ≤ 10^9</code>
</li>`,
  handlerFunction: handlerCheckNumber,
  starterCode: starterCodeCheckNumber,
  order: 6,
  starterFunctionName: "function checkNumber(",
};
