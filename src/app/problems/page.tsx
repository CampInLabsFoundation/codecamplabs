"use client"

import React from "react";
import Topbar from "../components/Topbar/topbar";

type ProblemPageProps = {
	
};

const ProblemPage:React.FC<ProblemPageProps> = () => {


	return (
		<div>
			<Topbar problemPage/>	
		</div>
	);
};
export default ProblemPage;

