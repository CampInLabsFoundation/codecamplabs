"use client"
import Link from "next/link";
import React from "react";

import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/firebase";
import Logout from "../Buttons/Logout";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import Timer from "../Timer/Timer";

type TopbarProps = {
	problemPage?: boolean;
};

const Topbar: React.FC<TopbarProps> = ({ problemPage }) => {
	const [user] = useAuthState(auth);
	const setAuthModalState = useSetRecoilState(authModalState);
	return (
		<nav className='relative flex h-[100px] w-full shrink-0 border-b border-b-4 items-center px-5 bg-white text-dark-gray-7'>
			<div className={`flex w-full items-center justify-between ${!problemPage ? "max-w-[1200px] mx-auto" : ""}`}>
				<Link href='' className='flex items-center h-[22px] flex-1'>
					<Image src='/CampFullLogo.png' alt='Logo' height={150} width={150} />
				</Link>
	
				{problemPage && (
					<div className='flex items-center gap-4 flex-1 justify-center'>
						<div
							className='flex items-center justify-center rounded bg-gray-700 hover:bg-gray-300 h-8 w-8 cursor-pointer'
							//onClick={() => handleProblemChange(false)}
						>
							<FaChevronLeft />
						</div>
						<Link
							href='/'
							className='flex items-center gap-2 font-medium max-w-[170px]  text-dark-gray-10 cursor-pointer'
						>
							<div>
								<BsList />
							</div>
							<p>Problem List</p>
						</Link>
						<div
							className='flex items-center justify-center rounded bg-gray-700 hover:bg-gray-300 h-8 w-8 cursor-pointer'
							//onClick={() => handleProblemChange(true)}
						>
							<FaChevronRight />
						</div>
					</div>
				)}

		
			<div className='flex items-center space-x-4 flex-1 justify-end'>
			
		
			<a
				href='https://campinlabs.com/product/donation/'
				target='_blank'
				rel='noreferrer'
				className='bg-sky-600 mr-3 py-1.5 px-3 cursor-pointer rounded hover:text-sky-600 text-white hover:bg-white hover:border-2
						hover:border-sky-600 border-2 border-transparent transition duration-300 ease-in-out'
			>
				Donate
			</a>
			{!user && (
				<Link href='/auth' onClick={() => setAuthModalState((prev) => ({ ...prev, isOpen: true, type: "login" }))}>
				<button className='bg-brand-orange text-white py-1.5 px-3 sm:px-4 rounded-md text-sm font-medium
									hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange border-2 border-transparent
									transition duration-300 ease-in-out cursor-pointer'>
					Sign In
				</button>
				</Link>
			)}
			{problemPage && <Timer />}
			{user && (
				<div className='cursor-pointer group relative'>
				<Image src='/avatar.png' alt='Avatar' width={45} height={45} className='rounded-full' />
				<div className='absolute  top-10 left-2/4 -translate-x-2/4 mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg 
								z-40 group-hover:scale-100 scale-0 
								transition-all duration-300 ease-in-out'>
					<p className='text-sm'>{user.email}</p>
				</div>
				</div>
			)}
			{user && <Logout />}
			</div>
		</div>
		</nav>

	);
};
export default Topbar;