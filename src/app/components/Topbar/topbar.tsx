
import Link from "next/link";
import React from "react";

import Image from "next/image";


type TopbarProps = {
	problemPage?: boolean;
};

const Topbar: React.FC<TopbarProps> = ({ problemPage }) => {


	return (
		<nav className='relative flex h-[100px] w-full shrink-0 items-center px-5 bg-white text-dark-gray-7'>
			<div className={`flex w-full items-center justify-between ${!problemPage ? "max-w-[1200px] mx-auto" : ""}`}>
				<Link href='' className='flex items-center h-[22px] flex-1'>
					<Image src='/CampFullLogo.png' alt='Logo' height={150} width={150} />
				</Link>
                
				{problemPage && (
					<div className='flex items-center gap-4 flex-1 justify-center'>
						<div
							className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer'

						>
							
						</div>
						<Link
							href='/'
							className='flex items-center gap-2 font-medium max-w-[170px] text-dark-gray-8 cursor-pointer'
						>
							<div>
								
							</div>
							<p>Problem List</p>
						</Link>
						<div
							className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer'
							
						>
							
						</div>
					</div>
				)}

				<div className='flex items-center space-x-4 flex-1 justify-end'>
					<div>
						<a
							href='https://campinlabs.com/product/donation/'
							target='_blank'
							rel='noreferrer'
							className='bg-sky-600 mr-3 py-1.5 px-3 cursor-pointer rounded hover:text-sky-600 text-white hover:bg-white hover:border-2
                            hover:border-sky-600 border-2 border-transparent transition duration-300 ease-in-out
                            '
						>
							Donate
						</a>
                        <Link href='/auth'>
						<button className='bg-brand-orange text-white py-1.5 px-3  sm:px-4 rounded-md text-sm font-medium
            hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange border-2 border-transparent
            transition duration-300 ease-in-out
             cursor-pointer '>Sign In</button>
					    </Link>
					</div>

				</div>
			</div>
		</nav>
	);
};
export default Topbar;