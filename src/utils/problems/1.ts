import assert from "assert";
import { Problem } from "../types/problem";

export const starterCodeHelloWorld = `function printHelloWorld() {
	// Exercise: Print "Hello, World!"
	// Write code that prints the string "Hello, World!" to the console.
	// Write your code under here
	console.log("Hello, World!")
  }

  
`;


// checks if the user has the correct code
export const handlerHelloWorld = (fn: any) => {
	try {
	  // Capture the console.log output
	  let output = "";
	  const storeLog = (inputs: string) => (output += inputs + "\n");
	  console["log"] = storeLog;
  
	  // Call the user's code
	  fn();
  
	  // Check if the output matches the expected string
	  const expectedOutput = "Hello, World!";
	  if (output.trim() === expectedOutput) {
		return true;
	  } else {
		throw new Error("Output does not match expected value.");
	  }
	} catch (error: any) {
	  console.log("HelloWorld handler function error");
	  throw new Error(error);
	}
  };
  

export const One: Problem = {
	id: "hello-world",
	title: "Hello, World!",
	problemStatement: `<p><p><br/>
	Exercise: Print "Hello, World!"
	<br/><p>
  </p>
  <p>
  Write a program that displays the message "Hello, World!" in the console.
  </p>
  <p>
  To print a string in JavaScript, you can use the <code>console.log()</code> function. Inside the parentheses, place the string you want to print, which in this case is "Hello, World!".
  </p>
  <p>
  Your task is to complete the code provided by filling in the missing line(s) to achieve the desired output.
  </p>
	
	`,
	examples: [
	  {
		id: 1,
		inputText: "",
		outputText: "Hello, World!",
		explanation: "",
	  },
	],
	constraints: ``,

	handlerFunction: handlerHelloWorld,
	starterCode: starterCodeHelloWorld,
	order: 1,
	starterFunctionName: "",
};