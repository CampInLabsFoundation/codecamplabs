import React from 'react';
import PreferenceNav from './PreferenceNav/PreferenceNav';
import CodeMirror from "@uiw/react-codemirror"
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';
import Split from 'react-split';

type PlaygroundProps = {
    
};

const Playground:React.FC<PlaygroundProps> = () => {
    
    return (
        <>  
            <div className='flex flex-col bg-dark-layer-1 relative overflow-x-hidden'>
                <PreferenceNav />
                <Split className='h-[calc(100vh-94px)]' direction='vertical' sizes={[60, 40]} minSize={60}>
				<div className='w-full overflow-auto'>
					<CodeMirror
						value='const a = 1;'
						theme={vscodeDark}
						
						extensions={[javascript()]}
						style={{ fontSize: 16 }}
					/>
				</div>
                <div>TestCases</div>
                </Split>
            </div>
        </>
    )
}
export default Playground;