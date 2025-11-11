import React from 'react';
import MainTop from '../components/home/MainTop';
import Navbar from '../components/navbar/navbar';


//theme
import { useTheme } from '../context/ThemeContext';

const HomePage: React.FC = () => {

const {theme, toggleTheme} = useTheme();


const isDark = theme === "dark";


  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark
          ? 'bg-gray-900 text-gray-100'
          : 'bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900'
      }`}
    >
      <Navbar  
      theme={theme}
      toggleTheme={toggleTheme}
      />
      <MainTop/>
    </div>
  );
};

export default HomePage;
