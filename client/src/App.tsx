import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import Cookies from 'js-cookie';
import Sidebar from './layout/sidebar/Sidebar';
import Auth from './layout/auth/Auth';
import RightBar from './layout/rightSection/RightBar';
import { Outlet } from "react-router-dom";

interface ContextType {
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

export const stateContext = createContext<ContextType>({
  total: 0,
  setTotal: () => {},
  text: '',
  setText : () => {}
});

function App() {
  const [total, setTotal] = useState<number>(0);
  const [text, setText] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const token = Cookies.get('token');
    setIsLoggedIn(!!token); // Using !! to convert token to boolean
  }, []);

  if (!isLoggedIn) {
    return <Auth />;
  }

  return (
    <div className='dark:bg-black dark:text-white h-screen w-screen flex'>
      <stateContext.Provider value={{ total, setTotal , text,setText }}>
        <Sidebar />
        <Outlet />
        <RightBar />
      </stateContext.Provider>
    </div>
  );
}

export default App;
