import assert from "assert";
import { Problem } from "../types/problem";

export const starterCodePrintFullName = `function printFullName() {
  // Exercise: Print Full Name
  // Write code that prompts the user to enter their first name and last name,
  // and then displays the full name on the console.
  // Write your code below this line
  const firstName = prompt("Enter your first name:");
  const lastName = prompt("Enter your last name:");
  const fullName = firstName + " " + lastName;
  alert(fullName);
  console.log(fullName);
}
`;

// Checks if the user has the correct code
export const handlerPrintFullName = (fn: any) => {
  try {
    // Capture the console.log output
    let output = "";
    const storeLog = (inputs: string) => (output += inputs + "\n");
    console["log"] = storeLog;

    // Stub the prompt function to simulate user input
    const prompt = (message: string) => {
      if (message === "Enter your first name:") return "Bruce";
      if (message === "Enter your last name:") return "Lee";
    };

    // Call the user's code
    fn();

    // Check if the output matches the expected string
    const expectedOutput = "Bruce Lee";
    if (output.trim() === expectedOutput) {
      return true;
    } else {
      throw new Error("Output does not match expected value.");
    }
  } catch (error: any) {
    console.log("PrintFullName handler function error");
    throw new Error(error);
  }
};

export const Two: Problem = {
  id: "print-full-name",
  title: "Print Full Name",
  problemStatement: `<p><br/>
    Exercise: Print Full Name
    <br/><p>
    </p>
    <p>
    Write a program that prompts the user to enter their first name and last name,
    and then displays the full name on the console.
    </p>
    <p>
    To prompt the user for input in JavaScript, you can use the <code>prompt()</code> function. It takes a string as an argument, which is the message to display to the user.
    </p>
    <p>
    Your task is to complete the code provided by filling in the missing line(s) to achieve the desired output.
    </p>
  `,
  examples: [
    {
      id: 1,
      inputText: "firstName = Bruce   lastName = Lee",
      outputText: "Bruce Lee",
      explanation: "",
    },
  ],
  constraints: ``,
  handlerFunction: handlerPrintFullName,
  starterCode: starterCodePrintFullName,
  order: 2,
  starterFunctionName: "",
};
