import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const NotFound: React.FC = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const navigate = useNavigate();

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') navigate('/');
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [navigate]);

    return (
        <div
            className={`min-h-screen flex items-center justify-center p-6 transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'
                }`}
        >
            <div
                className={`max-w-md w-full text-center rounded-lg shadow-md p-8 transition-colors duration-300 ${isDark ? 'bg-gray-800' : 'bg-white'
                    }`}
            >
                <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: [0.98, 1.02, 0.98], rotate: [-2, 2, -2] }}
                    transition={{ duration: 2.2, repeat: Infinity }}
                    className="mb-4"
                >   
                    <div className="text-6xl">
                        {isDark ? '🌙' : '🧭'}
                    </div>
                </motion.div>

                <h1 className={`text-3xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                    Page not found
                </h1>
                <p className={`mt-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    Sorry — the page you were looking for doesn’t exist. Try going back
                    home or explore the app.
                </p>

                <div className="mt-6 flex items-center justify-center gap-3">
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => navigate('/')}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Go home
                    </motion.button>

                    <Link
                        to="/"
                        onClick={() => navigate(-1)}
                        className={`px-4 py-2 rounded-md border transition-colors ${isDark ? 'border-gray-700 text-gray-200 hover:bg-gray-700' : 'border-gray-200 text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        Go back
                    </Link>
                </div>

                <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                    Tip: press <kbd className="px-1 py-0.5 bg-gray-200 rounded">Esc</kbd> to return home
                </div>
            </div>
        </div>
    );
};

export default NotFound;
