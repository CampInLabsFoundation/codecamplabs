import assert from "assert";
import { Problem } from "../types/problem";

export const starterCodeCountVowels = `function countVowels(str) {
  // Write your code here
};`;

// checks if the user has the correct code
export const handlerCountVowels = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const testCases = [
      { input: "hello", answer: 2 },
      { input: "programming", answer: 4 },
      { input: "javascript", answer: 4 },
      { input: "algorithm", answer: 3 },
      { input: "aeiou", answer: 5 },
    ];

    // loop all tests to check if the user's code is correct
    for (const { input, answer } of testCases) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(input);
      assert.strictEqual(result, answer);
    }
    return true;
  } catch (error: any) {
    console.log("countVowels handler function error");
    throw new Error(error);
  }
};

export const countVowels: Problem = {
  id: "count-vowels",
  title: "Count Vowels",
  problemStatement: `<p class='mt-3'>
  Write a function <code>countVowels(str)</code> that takes a string <code>str</code> as
  a parameter and returns the count of vowels (a, e, i, o, u) present in the string.
</p>
<p class='mt-3'>
  The input string contains only lowercase letters, and it may not contain spaces or special characters.
</p>`,
  examples: [
    {
      id: 1,
      inputText: `str = "hello"`,
      outputText: `2`,
      explanation: `In the string "hello", there are two vowels (e, o).`,
    },
    {
      id: 2,
      inputText: `str = "programming"`,
      outputText: `4`,
      explanation: `In the string "programming", there are four vowels (o, a, i, i).`,
    },
    {
      id: 3,
      inputText: `str = "javascript"`,
      outputText: `4`,
      explanation: `In the string "javascript", there are four vowels (a, i, a, i).`,
    },
  ],
  constraints: `<li class='mt-2'>
  The input string contains only lowercase letters.
</li>`,
  handlerFunction: handlerCountVowels,
  starterCode: starterCodeCountVowels,
  order: 10,
  starterFunctionName: "function countVowels(",
};
