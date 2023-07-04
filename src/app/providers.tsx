'use client'
import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';
import 'react-toastify/dist/ReactToastify.css';

export function Providers({ children }) {
  return (
    <RecoilRoot>
      
      {children}
      <ToastContainer/>
    </RecoilRoot>
  );
}
