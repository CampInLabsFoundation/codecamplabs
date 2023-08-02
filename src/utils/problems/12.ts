import assert from "assert";
import { Problem } from "../types/problem";

export const starterCodeReverseString = `function reverseString(str) {
  // Write your code here
};`;

// checks if the user has the correct code
export const handlerReverseString = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const testCases = [
      { input: "hello", answer: "olleh" },
      { input: "javascript", answer: "tpircsavaj" },
      { input: "racecar", answer: "racecar" },
      { input: "programming", answer: "gnimmargorp" },
      { input: "hello world", answer: "dlrow olleh" },
    ];

    // loop all tests to check if the user's code is correct
    for (const { input, answer } of testCases) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(input);
      assert.strictEqual(result, answer);
    }
    return true;
  } catch (error: any) {
    console.log("reverseString handler function error");
    throw new Error(error);
  }
};

export const reverseString: Problem = {
  id: "reverse-string",
  title: "Reverse a String",
  problemStatement: `<p class='mt-3'>
  Write a function <code>reverseString(str)</code> that takes a string <code>str</code> as
  a parameter and returns a new string with the characters in reverse order.
</p>`,
  examples: [
    {
      id: 1,
      inputText: `str = "hello"`,
      outputText: `"olleh"`,
      explanation: `The reversed string of "hello" is "olleh".`,
    },
    {
      id: 2,
      inputText: `str = "javascript"`,
      outputText: `"tpircsavaj"`,
      explanation: `The reversed string of "javascript" is "tpircsavaj".`,
    },
  ],
  constraints: `<li class='mt-2'>
  <code>1 ≤ str.length ≤ 1000</code>
</li>`,
  handlerFunction: handlerReverseString,
  starterCode: starterCodeReverseString,
  order: 12,
  starterFunctionName: "function reverseString(",
};
