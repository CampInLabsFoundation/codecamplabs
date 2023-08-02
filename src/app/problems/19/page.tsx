"use client"

import React, { useEffect, useState } from "react";
import Topbar from "../../components/Topbar/topbar";
import Workspace from "../../components/Workspace/Workspace";
import { Problem } from "@/utils/types/problem";
import { findAverage } from "@/utils/problems/19";






type ProblemPageProps = {
	
};
const useProblemData = () => {
	const [problem, setProblem] = useState<Problem | null>(null);
  
	useEffect(() => {
	  // Fetch the problem data here
	  const fetchedProblem = findAverage; // Replace with your data fetching logic
  
	  setProblem(fetchedProblem);
	}, []);
  
	return problem;
  };

const ProblemPage:React.FC<ProblemPageProps> = () => {
	const problem = useProblemData();

	console.log(problem); // Verify the problem object
  
	
	if (!problem) {
	  // Handle loading state if necessary
	  return <div>Loading...</div>;
	}
	
  

	return (
		<div>
			<Topbar problemPage/>
			<Workspace problem={problem} /> {/* Pass the problem as a prop to Workspace */}
	
		</div>
	);
};


export default ProblemPage;


