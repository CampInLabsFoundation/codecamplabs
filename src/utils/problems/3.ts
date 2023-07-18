import assert from "assert";
import { Problem } from "../types/problem";

export const starterCodeVariablesAndOperations = `function performCalculations() {
    // Exercise: Variables and Operations
    // Write code that prompts the user to enter two numbers, stores them in variables,
    // and performs addition and subtraction operations on the numbers.
    // Write your code below this line
  
    // Prompt the user for the first number
    const num1 = parseFloat(prompt("Enter the first number:"));
  
    // Prompt the user for the second number
    const num2 = parseFloat(prompt("Enter the second number:"));
  
    // Perform addition and subtraction operations
    const sum = num1 + num2;
    const difference = num1 - num2;
  
    // Display the results
    alert(sum)
    alert(difference)
    console.log("Sum:", sum);
    console.log("Difference:", difference);
  }
  
`;

// Checks if the user has the correct code
export const handlerVariablesAndOperations = async (fn: any) => {
  // Capture the console.log output
  let output = "";
  const originalLog = console.log;
  console.log = (...messages) => {
    output += messages.join(" ") + "\n";
  };

  try {
    // Call the user's code
    await fn();

    // Check if the output contains the sum and difference values
    assert.strictEqual(output.includes("Sum:"), true);
    assert.strictEqual(output.includes("Difference:"), true);
  } catch (error: any) {
    console.log("VariablesAndOperations handler function error");
    throw new Error(error);
  } finally {
    // Restore the original console.log function
    console.log = originalLog;
  }
};

export const Three: Problem = {
  id: "variables-and-operations",
  title: "Variables and Operations",
  problemStatement: `<p><br/>
    Exercise: Variables and Operations
    <br/><p>
    </p>
    <p>
    Write a program that prompts the user to enter two numbers, stores them in variables,
    and performs addition and subtraction operations on the numbers.
    </p>
    <p>
    To store a value in JavaScript, you can use variables. Variables allow you to assign a value to a name that you can use in your program.
    </p>
    <p>
    Your program should prompt the user to enter the first number, then the second number. Store the entered numbers in variables.
    </p>
    <p>
    After that, perform the following operations using the stored values:
    <ul>
      <li>Addition (+): Calculate the sum of the two numbers.</li>
      <li>Subtraction (-): Calculate the difference between the two numbers.</li>
    </ul>
    </p>
    <p>
    Finally, display the results by logging them using the <code>console.log()</code> function.
    </p>
    <p>
    Your task is to complete the code provided by filling in the missing line(s) to achieve the desired output.
    </p>
  `,
  examples: [
    {
      id: 1,
      inputText: "num1 = 10 num2 = 5",
      outputText: "Sum: 15\nDifference: 5",
      explanation: "",
    },
  ],
  constraints: ``,
  handlerFunction: handlerVariablesAndOperations,
  starterCode: starterCodeVariablesAndOperations,
  order: 3,
  starterFunctionName: "",
};
