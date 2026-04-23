import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle({ className = "" }) {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`relative p-2 rounded-full bg-white dark:bg-white/5 shadow-sm border border-appfg/10 dark:border-white/10 hover:bg-appbg dark:hover:bg-white/10 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blurple group overflow-hidden ${className}`}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            <div className="relative w-5 h-5">
                {/* Sun Icon */}
                <div className={`absolute inset-0 transition-all duration-500 transform ${theme === 'dark' ? 'translate-y-8 opacity-0 rotate-45' : 'translate-y-0 opacity-100 rotate-0'}`}>
                    <Sun size={20} className="text-appfg/70 group-hover:text-blurple transition-colors" />
                </div>
                
                {/* Moon Icon */}
                <div className={`absolute inset-0 transition-all duration-500 transform ${theme === 'light' ? '-translate-y-8 opacity-0 -rotate-45' : 'translate-y-0 opacity-100 rotate-0'}`}>
                    <Moon size={20} className="text-white/70 group-hover:text-blurple transition-colors" />
                </div>
            </div>
        </button>
    );
}
