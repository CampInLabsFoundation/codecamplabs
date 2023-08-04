import assert from "assert";
import { Problem } from "../types/problem";

export const starterCodeTotalPrice = `function calculateTotalPrice(price, quantity) {
  // Write your code here
};`;

// checks if the user has the correct code
export const handlerTotalPrice = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const testCases = [
      { input: [5, 3], answer: 15 },
      { input: [10, 2], answer: 20 },
      { input: [2.5, 4], answer: 10 },
      { input: [1, 0], answer: 0 },
      { input: [7, 5], answer: 35 },
    ];

    // loop all tests to check if the user's code is correct
    for (const { input, answer } of testCases) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(input[0], input[1]);
      assert.strictEqual(result, answer);
    }
    return true;
  } catch (error: any) {
    console.log("calculateTotalPrice handler function error");
    throw new Error(error);
  }
};

export const totalPrice: Problem = {
  id: "total-price",
  title: "Calculate Total Price",
  problemStatement: `<p class='mt-3'>
  Write a function <code>calculateTotalPrice(price, quantity)</code> that takes the price and quantity of an item as
  parameters and returns the total price (i.e., price multiplied by quantity).
</p>`,
  examples: [
    {
      id: 1,
      inputText: `price = 5, quantity = 3`,
      outputText: `15`,
      explanation: `The total price of an item with price $5 and quantity 3 is $5 * 3 = $15.`,
    },
    {
      id: 2,
      inputText: `price = 10, quantity = 2`,
      outputText: `20`,
      explanation: `The total price of an item with price $10 and quantity 2 is $10 * 2 = $20.`,
    },
  ],
  constraints: `<li class='mt-2'>
  <code>0 ≤ price, quantity ≤ 1000</code>
</li>`,
  handlerFunction: handlerTotalPrice,
  starterCode: starterCodeTotalPrice,
  order: 3,
  starterFunctionName: "function calculateTotalPrice(",
};
