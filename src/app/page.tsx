/* eslint-disable react/no-unescaped-entities */
'use client' 
import Image from 'next/image'
import Topbar from './components/Topbar/topbar'
import ProblemsTable from './components/ProblemsTable/ProblemsTable'
import React, { useState } from 'react'
import { firestore } from './firebase/firebase'
import { doc, setDoc } from 'firebase/firestore'


export default function Home() {
	const [inputs, setInputs] = useState({
		id: '',
		title: '',
		difficulty: '',
		category: '',
		videoId: '',
		order: 0,
		likes: 0,
		dislikes: 0,
	})

	/*
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputs({
			...inputs,
			[e.target.name]: e.target.value
		})
	};
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault(); // prevent page refresh
		const newProblem = {
			...inputs,
			order: Number(inputs.order)
		};
		await setDoc(doc(firestore, "problems", inputs.id), newProblem);

	}
	*/
	
  return (
    <main className='bg-dark-layer-2 min-h-screen'>
      <Topbar />
      <h1
					className='text-2xl text-center text-gray-700 dark:text-gray-400 font-medium
					uppercase mt-10 mb-5'
				>
					Let's Learn Programming!
				</h1>

					<table className='text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto'>
						
							<thead className='text-xs text-gray-700 uppercase dark:text-gray-400 border-b '>
								<tr>
									<th scope='col' className='px-1 py-3 w-0 font-medium'>
										Status
									</th>
									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Title
									</th>
									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Difficulty
									</th>

									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Category
									</th>
									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Solution
									</th>
								</tr>
							</thead>
              <ProblemsTable setLoadingProblems={function (value: React.SetStateAction<boolean>): void {
				  throw new Error('Function not implemented.')
			  } } />
          </table>
					

		{/*
		<form className= "p-6 flex flex-col max-w-sm gap-3" onSubmit={handleSubmit}> 
			<input type='text' onChange={handleInputChange} placeholder='problem id' name='id' />
			<input type='text' onChange={handleInputChange} placeholder='title' name='title' />
			<input type='text' onChange={handleInputChange} placeholder='difficulty' name='difficulty' />
			<input type='text' onChange={handleInputChange} placeholder='order' name='order' />
			<input type='text' onChange={handleInputChange} placeholder='category?' name='category' />
			<input type='text' onChange={handleInputChange} placeholder='videoId?' name='videoId' />
			<button>Save to db</button>
		</form>
  		*/}
    </main>
  )
}
