
import { auth } from "@/app/firebase/firebase";
import React from "react";
import { useSignOut } from "react-firebase-hooks/auth";
import { FiLogOut } from "react-icons/fi";

const Logout: React.FC = () => {
	const [signOut, loading, error] = useSignOut(auth);

	const handleLogout = () => {
		signOut();
	};
	return (
		<button className='bg-slate-500 py-1.5 px-3 cursor-pointer rounded text-brand-orange' onClick={handleLogout}>
			<FiLogOut style={{ width: '30px', height: '30px' }} />
		</button>
	);
};
export default Logout;