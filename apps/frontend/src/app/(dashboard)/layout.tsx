import React from 'react';
import Link from 'next/link';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-gray-800 text-white p-6">
        <div className="text-2xl font-bold mb-8">AI Connect</div>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link href="/dashboard" className="block text-gray-300 hover:text-white">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/dashboard/solutions" className="block text-gray-300 hover:text-white">
                AI Solutions
              </Link>
            </li>
            <li>
              <Link href="/dashboard/my-integrations" className="block text-gray-300 hover:text-white">
                My Integrations
              </Link>
            </li>
            <li>
              <Link href="/dashboard/settings" className="block text-gray-300 hover:text-white">
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8 overflow-auto">
        <header className="bg-white shadow p-4 mb-8 rounded-lg flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
          {/* User profile/logout goes here */}
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">Logout</button>
        </header>
        <div className="bg-white p-6 rounded-lg shadow-md">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;