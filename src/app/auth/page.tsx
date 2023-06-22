import React from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';

type AuthPageProps = {};

const AuthPage: React.FC<AuthPageProps> = () => {
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
          </div>
        </div>
      );
      
};


export default AuthPage;
