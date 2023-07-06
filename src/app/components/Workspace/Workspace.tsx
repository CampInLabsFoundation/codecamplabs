import { useState } from "react";
import Split from "react-split";
import ProblemDescription from "./ProblemDescription/ProblemDescription";
import Playground from "./Playground/Playground";


type WorkspaceProps = {
	
};

const Workspace: React.FC<WorkspaceProps> = ({  }) => {


	return (
		<Split className='split' minSize={0}>
			<ProblemDescription/>
			<div className='bg-dark-fill-2'>
            <Playground />
			</div>
		</Split>
	);
};
export default Workspace;