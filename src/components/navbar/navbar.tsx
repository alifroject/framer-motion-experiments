import { Link } from 'react-router-dom';
import type React from 'react';
import IconButton from '@mui/material/IconButton';


import Brightness7Icon from '@mui/icons-material/Brightness7';
import DarkModeIcon from '@mui/icons-material/DarkMode';

interface NavbarProps {
    // You can add props here in the future if needed
    theme?: 'light' | 'dark';
    toggleTheme?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {

    return (
        <nav className="bg-blue-600 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl font-bold">
                            MyApp
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex gap-8">
                        <Link
                            to="/"
                            className="hover:text-blue-200 transition-colors duration-200"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="hover:text-blue-200 transition-colors duration-200"
                        >
                            About
                        </Link>
                        <Link
                            to="/contact"
                            className="hover:text-blue-200 transition-colors duration-200"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Right side items */}
                    <div className="flex gap-4 items-center">
                        <IconButton
                            onClick={toggleTheme}
                            sx={{
                                bgcolor: theme === 'dark' ? 'grey.700' : 'grey.300',
                                transition: '0.3s',
                                color: theme === 'dark' ? 'yellow' : 'black',
                                mb: 1,
                            }}
                        >
                            {theme === 'dark' ? <Brightness7Icon /> : <DarkModeIcon />}
                        </IconButton>

                        <button className="px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                            Login
                        </button>
                        <button className="px-4 py-2 bg-white text-blue-600 rounded font-semibold hover:bg-blue-50 transition-colors">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
