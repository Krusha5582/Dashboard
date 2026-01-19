// components/layout/DashboardLayout.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-[#F8F1E9] overflow-hidden">
      {/* Sidebar (passes mobileOpen state) */}
      <Sidebar />
      
      {/* Main content */}
      <div className="flex-1 flex flex-col w-full">
        <Header />
        
        <main className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="w-full max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
