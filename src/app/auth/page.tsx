'use client'
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Image from 'next/image';
import AuthModal from '../components/Modals/AuthModal';
import { authModalState } from '@/atoms/authModalAtom';
import { useRecoilValue } from 'recoil';

type AuthPageProps = {};

const AuthPage: React.FC<AuthPageProps> = () => {
    const authModal = useRecoilValue(authModalState)
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
