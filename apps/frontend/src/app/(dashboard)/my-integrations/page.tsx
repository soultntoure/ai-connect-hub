import React from 'react';
import Link from 'next/link';

const MyIntegrationsPage = () => {
  // In a real app, this would come from an API call for the current user's integrations
  const integrations = [
    { id: 'int-001', solutionName: 'Smart Chatbot Pro', status: 'Active', lastUsed: '2023-10-25' },
    { id: 'int-002', solutionName: 'Predictive Sales AI', status: 'Active', lastUsed: '2023-10-24' },
    { id: 'int-003', solutionName: 'Automated HR Assistant', status: 'Inactive', lastUsed: '2023-09-10' }
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">My Active Integrations</h2>
      {integrations.length === 0 ? (
        <p className="text-gray-600">You don't have any active integrations yet. Browse AI Solutions to get started!</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Solution Name</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Status</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Last Used</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {integrations.map((integration) => (
                <tr key={integration.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-800">{integration.solutionName}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      integration.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {integration.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-800">{integration.lastUsed}</td>
                  <td className="py-3 px-4">
                    <Link href={`/dashboard/my-integrations/${integration.id}`}>
                      <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">View/Manage</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-6">
        <Link href="/dashboard/solutions">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium">
            Discover More AI Solutions
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MyIntegrationsPage;