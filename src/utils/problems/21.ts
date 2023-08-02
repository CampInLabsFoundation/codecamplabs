import assert from "assert";
import { Problem } from "../types/problem";

export const starterCodeFindLongestWord = `function findLongestWord(str) {
  // Write your code here
};`;

// checks if the user has the correct code
export const handlerFindLongestWord = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const testCases = [
      { input: "The quick brown fox jumps", answer: "quick" },
      { input: "Pack my box with five dozen liquor jugs", answer: "dozen" },
      { input: "Hello, world!", answer: "world" },
      { input: "javascript is awesome", answer: "javascript" },
      { input: "The five boxing wizards jump quickly", answer: "quickly" },
    ];

    // loop all tests to check if the user's code is correct
    for (const { input, answer } of testCases) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(input);
      assert.strictEqual(result, answer);
    }
    return true;
  } catch (error: any) {
    console.log("findLongestWord handler function error");
    throw new Error(error);
  }
};

export const findLongestWord: Problem = {
  id: "find-longest-word",
  title: "Find the Longest Word in a Sentence",
  problemStatement: `<p class='mt-3'>
  Write a function <code>findLongestWord(str)</code> that takes a sentence <code>str</code> as
  a parameter and returns the longest word in the sentence.
</p>`,
  examples: [
    {
      id: 1,
      inputText: `str = "The quick brown fox jumps"`,
      outputText: `"quick"`,
      explanation: `The longest word in the sentence is "quick" with 5 characters.`,
    },
    {
      id: 2,
      inputText: `str = "Pack my box with five dozen liquor jugs"`,
      outputText: `"dozen"`,
      explanation: `The longest word in the sentence is "dozen" with 5 characters.`,
    },
  ],
  constraints: `<li class='mt-2'>
  <code>1 ≤ str.length ≤ 10^4</code>
</li>`,
  handlerFunction: handlerFindLongestWord,
  starterCode: starterCodeFindLongestWord,
  order: 21,
  starterFunctionName: "function findLongestWord(",
};
