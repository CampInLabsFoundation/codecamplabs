'use client'
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Image from 'next/image';
import AuthModal from '../components/Modals/AuthModal';
import { authModalState } from '@/atoms/authModalAtom';
import { useRecoilValue } from 'recoil';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';
import { useRouter } from 'next/navigation';

type AuthPageProps = {};

const AuthPage: React.FC<AuthPageProps> = () => {
  const authModal = useRecoilValue(authModalState);
	const [user, loading, error] = useAuthState(auth);
	const [pageLoading, setPageLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		if (user) router.push("/");
		if (!loading && !user) setPageLoading(false);
	}, [user, router, loading]);

	if (pageLoading) return null;
    return (
        <div>
          <div className="mx-auto">
            <Navbar />
            <div className="h-screen flex items-center justify-center pointer-events-none select-none">
              <div className="w-full h-full">
                <div
                  className="bg-cover bg-center w-full h-full"
                  style={{ backgroundImage: "url('/authBg.png')" }}
                ></div>
              </div>
            </div>
            {authModal.isOpen && <AuthModal />}

          </div>
        </div>
      );
      
};


export default AuthPage;
