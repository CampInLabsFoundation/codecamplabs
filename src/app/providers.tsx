'use client'
import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';
import 'react-toastify/dist/ReactToastify.css';
import { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <RecoilRoot>
      
      {children}
      <ToastContainer/>
    </RecoilRoot>
  );
}
