import React from 'react';

const DashboardHomePage = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Welcome to your Dashboard!</h2>
      <p className="text-gray-700">This is an overview of your active AI integrations and recent activities.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-2">Active Integrations</h3>
          <p className="text-4xl font-extrabold">5</p>
        </div>
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-2">New Solutions Added</h3>
          <p className="text-4xl font-extrabold">3</p>
        </div>
        <div className="bg-purple-500 text-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-2">Usage Metrics (WIP)</h3>
          <p className="text-4xl font-extrabold">...</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHomePage;