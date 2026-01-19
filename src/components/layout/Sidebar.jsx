import React, { useState, useEffect } from 'react';
import { useLocation, Link } from "react-router-dom";
import { 
  LayoutDashboard, TrendingUp, Send, FileText, Bell, UserCog, Settings,
  GraduationCap, User, X 
} from 'lucide-react';

const navGroups = {
  primary: [
    { path: "/", label: "Overview", icon: LayoutDashboard },
    { path: "/progress-tracker", label: "Your Progress", icon: TrendingUp },
    { path: "/applications", label: "My Applications", icon: Send },
  ],
  supporting: [
    { path: "/documents", label: "Documents", icon: FileText },
    { path: "/updates", label: "Updates", icon: Bell },
  ],
  personal: [
    { path: "/counsellor", label: "My Counsellor", icon: UserCog },
    { path: "/profile-settings", label: "Settings", icon: Settings },
  ]
};

export default function Sidebar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  // Listen for hamburger clicks from Header
  useEffect(() => {
    const handleToggleSidebar = () => {
      setIsMobileOpen(prev => !prev);
    };
    
    window.addEventListener('toggle-mobile-sidebar', handleToggleSidebar);
    return () => window.removeEventListener('toggle-mobile-sidebar', handleToggleSidebar);
  }, []);

  // Close sidebar on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <>
      {/* Desktop Sidebar - Final Polish */}
      <aside className="hidden lg:block lg:w-64 xl:w-72 bg-white/90 backdrop-blur-sm border-r border-gray-50 shadow-sm">
        <div className="px-6 py-8 border-b border-gray-50 h-20 flex items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-emerald-600 rounded-xl shadow-sm flex items-center justify-center">
              <GraduationCap className="w-4.5 h-4.5 text-white" />
            </div>
            <div>
              <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest">Portal</p>
              <h2 className="text-lg font-black text-gray-900 truncate">Premier Global</h2>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-5 py-10 space-y-1 overflow-y-auto h-[calc(100vh-10rem)]">
          {Object.entries(navGroups).map(([groupKey, items]) => (
            <div key={groupKey} className="space-y-1.5 mb-6 last:mb-0">
              {/* Subtle Group Label */}
              <div className="px-3 py-1 mb-3">
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                  {groupKey === 'primary' ? 'Primary' : 
                   groupKey === 'supporting' ? 'Support' : 'Account'}
                </span>
              </div>
              {items.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`
                      group relative block rounded-xl px-4 py-2.5 text-sm font-medium transition-all h-12
                      ${active
                        ? "bg-emerald-50 text-gray-900 border border-emerald-200 shadow-sm"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:shadow-sm border border-transparent"
                      }
                    `}
                  >
                    <div className="flex items-center gap-3 h-full">
                      <div className={`
                        w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0
                        ${active
                          ? "bg-emerald-600 text-white shadow-sm"
                          : "bg-gray-100 text-gray-500 group-hover:bg-emerald-100 group-hover:text-emerald-600"
                        }
                      `}>
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <span className="truncate">{item.label}</span>
                    </div>
                    {active && (
                      <div className="absolute left-1 top-1/2 -translate-y-1/2 w-1 h-4 bg-emerald-600 rounded-r-full" />
                    )}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        {/* User Card - Clickable to Profile */}
        <div className="px-6 py-6 border-t border-gray-50">
          <Link 
            to="/profile-settings"
            className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100 hover:bg-gray-100 hover:shadow-sm transition-all group cursor-pointer"
          >
            <div className="w-10 h-10 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-gray-900 truncate group-hover:underline">Anya Sharma</p>
              <p className="text-xs text-gray-500 truncate">AS2023-007</p>
            </div>
            <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" 
          onClick={() => setIsMobileOpen(false)}
        />
      )}
      
      {/* Mobile Sidebar - Final Restraint */}
      <aside className={`
        lg:hidden fixed left-0 top-0 h-full w-80 max-w-[90vw] bg-white/95 backdrop-blur-md shadow-xl border-r border-gray-50 z-50
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
        transition-transform duration-300 ease-out
      `}>
        <div className="px-6 py-6 border-b border-gray-100 flex items-center justify-between h-24">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl shadow-sm flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest">Portal</p>
              <h2 className="text-lg font-black text-gray-900 truncate">Premier Global</h2>
            </div>
          </div>
          <button 
            onClick={() => setIsMobileOpen(false)} 
            className="p-2 hover:bg-gray-100 rounded-xl transition-all"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <nav className="flex-1 px-6 py-8 space-y-1 overflow-y-auto">
          {Object.entries(navGroups).map(([groupKey, items]) => (
            <div key={groupKey} className="space-y-1 mb-4">
              <div className="px-2 py-2">
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wider px-1">{
                  groupKey === 'primary' ? 'Primary' : 
                  groupKey === 'supporting' ? 'Support' : 'Account'
                }</span>
              </div>
              {items.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileOpen(false)}
                    className={`
                      flex items-center gap-4 px-5 py-3.5 h-14 rounded-xl text-sm font-semibold transition-all
                      ${active
                        ? "bg-emerald-500 text-white border border-emerald-400 shadow-sm hover:shadow-md"
                        : "text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 hover:shadow-sm border-transparent"
                      }
                    `}
                  >
                    <div className={`
                      w-10 h-10 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0
                      ${active ? "bg-white/20" : "bg-white/60 hover:bg-emerald-100"}
                    `}>
                      <Icon className={`w-5 h-5 ${active ? 'text-white' : 'text-emerald-600'}`} />
                    </div>
                    <span className="truncate">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          ))}
          
          {/* Mobile User Card */}
          <div className="px-2 py-4 border-t border-gray-100 mt-6">
            <Link 
              to="/profile-settings"
              onClick={() => setIsMobileOpen(false)}
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:bg-gray-100 hover:shadow-sm transition-all cursor-pointer"
            >
              <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-sm hover:scale-105 transition-transform">
                <User className="w-6 h-6 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-base font-semibold text-gray-900 truncate hover:underline">Anya Sharma</p>
                <p className="text-sm text-gray-500 truncate">AS2023-007</p>
              </div>
              <svg className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
}
