import assert from "assert";
import { Problem } from "../types/problem";

export const starterCodeCountOccurrences = `function countOccurrences(str, char) {
  // Write your code here
};`;

// checks if the user has the correct code
export const handlerCountOccurrences = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const testCases = [
      { input: ["hello", "l"], answer: 2 },
      { input: ["programming", "m"], answer: 2 },
      { input: ["banana", "a"], answer: 3 },
      { input: ["javascript", "z"], answer: 0 },
      { input: ["testing", "t"], answer: 2 },
    ];

    // loop all tests to check if the user's code is correct
    for (const { input, answer } of testCases) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(input[0], input[1]);
      assert.strictEqual(result, answer);
    }
    return true;
  } catch (error: any) {
    console.log("countOccurrences handler function error");
    throw new Error(error);
  }
};

export const countOccurrences: Problem = {
  id: "count-occurrences",
  title: "Count Occurrences of a Character in a String",
  problemStatement: `<p class='mt-3'>
  Write a function <code>countOccurrences(str, char)</code> that takes a string <code>str</code> and a character <code>char</code> as
  parameters and returns the number of occurrences of the character in the string.
</p>`,
  examples: [
    {
      id: 1,
      inputText: `str = "hello", char = "l"`,
      outputText: `2`,
      explanation: `The character 'l' occurs twice in the string "hello".`,
    },
    {
      id: 2,
      inputText: `str = "banana", char = "a"`,
      outputText: `3`,
      explanation: `The character 'a' occurs three times in the string "banana".`,
    },
  ],
  constraints: `<li class='mt-2'>
  <code>1 ≤ str.length ≤ 1000</code>
</li> <li class='mt-2'>
  <code>1 ≤ char.length ≤ 1</code> (single character)
</li>`,
  handlerFunction: handlerCountOccurrences,
  starterCode: starterCodeCountOccurrences,
  order: 15,
  starterFunctionName: "function countOccurrences(",
};
