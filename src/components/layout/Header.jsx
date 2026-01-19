import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, ChevronDown, AlertCircle, User, Settings, LogOut } from 'lucide-react';

const pageTitles = {
  '/': 'Overview',
  '/progress-tracker': 'Your Progress', 
  '/applications': 'My Applications',
  '/documents': 'Documents',
  '/updates': 'Updates',
  '/counsellor': 'My Counsellor',
  '/profile-settings': 'Settings'
};

export default function Header({ 
  hasBlockingTask = false, 
  blockingTaskText = 'Essay draft pending',
  studentId = 'AS2023-007'
}) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Robust page title matching (nested routes)
  const getCurrentTitle = () => {
    return Object.entries(pageTitles).find(([path]) => 
      location.pathname === path || location.pathname.startsWith(`${path}/`)
    )?.[1] || 'Dashboard';
  };

  const currentTitle = getCurrentTitle();

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menu on escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm sticky top-0 z-40 px-4 py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Mobile: Hamburger + Page Title */}
        <div className="lg:hidden flex items-center gap-3 flex-shrink-0">
          <button 
            className="p-2.5 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all"
            onClick={() => window.dispatchEvent(new CustomEvent('toggle-mobile-sidebar'))}
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-xl font-black text-gray-900">{currentTitle}</h1>
        </div>

        {/* Desktop: Page Title + Student ID */}
        <div className="hidden lg:block min-w-0 flex-1">
          <h1 className="text-2xl font-black text-gray-900 leading-tight truncate">
            {currentTitle}
          </h1>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
            <span className="text-sm font-semibold text-emerald-600">{studentId}</span>
          </div>
        </div>

        {/* Conditional Status Badge (Mobile + Desktop) */}
        {hasBlockingTask && (
          <Link 
            to="/progress-tracker" 
            className="flex items-center gap-2 text-sm font-semibold text-amber-700 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-xl transition-all shadow-sm hover:shadow-md"
            aria-label="Resolve blocking task"
          >
            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse flex-shrink-0" />
            <span className="hidden sm:inline truncate max-w-[200px]">{blockingTaskText}</span>
            <AlertCircle className="w-4 h-4 flex-shrink-0 sm:hidden" />
          </Link>
        )}

        {/* Right: Account Actions */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link 
            to="/profile-settings"
            className="hidden sm:block px-4 py-2 text-sm font-semibold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-all border border-emerald-100 hover:border-emerald-200 shadow-sm"
            aria-label="Go to profile settings"
          >
            Profile
          </Link>
          
          {/* Real Avatar Dropdown */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={handleMenuToggle}
              className="flex items-center gap-2 p-2 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-sm hover:border-gray-200 transition-all group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              aria-expanded={menuOpen}
              aria-haspopup="true"
              aria-label="Account menu"
            >
              <div className="w-9 h-9 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-semibold text-sm shadow-sm flex-shrink-0">
                AS
              </div>
              <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${menuOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-2xl shadow-xl py-1 z-50">
                <Link 
                  to="/profile-settings"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-xl mx-1 transition-all group"
                >
                  <User className="w-4 h-4 text-gray-500 group-hover:text-gray-900 flex-shrink-0" />
                  Profile Settings
                </Link>
                <Link 
                  to="/counsellor"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-xl mx-1 transition-all group"
                >
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-gray-900 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  My Counsellor
                </Link>
                <div className="border-t border-gray-100 my-1"></div>
                <button 
                  onClick={() => {
                    setMenuOpen(false);
                    window.location.href = '/login';
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-700 hover:bg-red-50 rounded-xl mx-1 transition-all group"
                >
                  <LogOut className="w-4 h-4 text-red-500 group-hover:text-red-700 flex-shrink-0" />
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
