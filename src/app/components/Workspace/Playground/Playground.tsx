import React, { useState } from 'react';
import PreferenceNav from './PreferenceNav/PreferenceNav';
import CodeMirror from "@uiw/react-codemirror"
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';
import Split from 'react-split';
import EditorFooter from './EditorFooter';
import { Problem } from '@/utils/types/problem';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/firebase';
import { toast } from 'react-toastify';
import { problems } from '@/app/mockProblems/problems';

import { handlerTwoSum, starterCodeTwoSum} from "@/utils/problems/two-sum";

type PlaygroundProps = {
    problem: Problem
    setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
};

const Playground:React.FC<PlaygroundProps> = ({ problem, setSuccess }) => {

    

    const [userCode,setUserCode] = useState<string>(starterCodeTwoSum)
    const [user] = useAuthState(auth);

    const handleSubmit = async () => {
		if (!user) {
			toast.error("Please login to submit your code", {
				position: "top-center",
				autoClose: 3000,
				theme: "dark",
			});
			return;
		}
		try {
            const exercise = 'two-sum'; // Change this value based on the exercise you want to test




			const cb = new Function(`return ${userCode}`)();
			const success = handlerTwoSum(cb);

			
			
			if (success) {
				toast.success("Congrats! All tests passed!", {
					position: "top-center",
					autoClose: 3000,
					theme: "dark",
				});
				setSuccess(true);
				setTimeout(() => {
					setSuccess(false);
				}, 4000);
			}
			
		} catch (error: any) {
			console.log(error.message);
			if (
				error.message.startsWith("AssertionError [ERR_ASSERTION]: Expected values to be strictly deep-equal:")
			) {
				toast.error("Oops! One or more test cases failed", {
					position: "top-center",
					autoClose: 3000,
					theme: "dark",
				});
			} else {
				toast.error(error.message, {
					position: "top-center",
					autoClose: 3000,
					theme: "dark",
				});
			}
		}
	};


    const onChange = (value: string) => {
        setUserCode(value);
    };

    return (
        <>  
            <div className='flex flex-col bg-dark-layer-1 relative overflow-x-hidden'>
                <PreferenceNav />
                <Split className='h-[calc(100vh-94px)]' direction='vertical' sizes={[60, 40]} minSize={60}>
				<div className='w-full overflow-auto'>
					<CodeMirror
						value={problem.starterCode}
						theme={vscodeDark}
						onChange={onChange}
						extensions={[javascript()]}
						style={{ fontSize: 16 }}
					/>
				</div>
                <div className='w-full px-5 overflow-auto'>
					{/* testcase heading */}
					<div className='flex h-10 items-center space-x-6'>
						<div className='relative flex h-full flex-col justify-center cursor-pointer'>
							<div className='text-sm font-medium leading-5 text-white'>Testcases</div>
							<hr className='absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white' />
						</div>
					</div>
                    <div className='flex'>
						{problem.examples.map((example, index) => (
							<div
								className='mr-2 items-start mt-2 '
								key={example.id}
								//onClick={() => setActiveTestCaseId(index)}
							>
								<div className='flex flex-wrap items-center gap-y-4'>
									<div
										className={`font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap
										
									`}
									>
										Case {index + 1}
									</div>
								</div>
							</div>
						))}

				    </div>
                    <div className='font-semibold my-4'>
						<p className='text-sm font-medium mt-4 text-white'>Input:</p>
						<div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
							nums: [2,7,11,15], target: 9
						</div>
						<p className='text-sm font-medium mt-4 text-white'>Output:</p>
						<div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
							[0,1]
						</div>
					</div>
                </div>
                </Split>
                <EditorFooter handleSubmit={handleSubmit} />
            </div>
        </>
    )
}

export default Playground;