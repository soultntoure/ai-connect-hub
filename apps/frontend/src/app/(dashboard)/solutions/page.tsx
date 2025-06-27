import React from 'react';
import Link from 'next/link';

const SolutionsListingPage = () => {
  // In a real app, this would come from an API call
  const solutions = [
    { id: '1', name: 'Smart Chatbot Pro', description: 'Enhance customer support with an intelligent AI chatbot.', category: 'Customer Service' },
    { id: '2', name: 'Predictive Sales AI', description: 'Forecast sales trends and identify high-value leads.', category: 'Sales & Marketing' },
    { id: '3', name: 'Automated HR Assistant', description: 'Streamline HR queries and employee onboarding.', category: 'Human Resources' },
    { id: '4', name: 'Inventory Optimization AI', description: 'Optimize stock levels and reduce waste.', category: 'Operations' }
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Browse AI Solutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((solution) => (
          <div key={solution.id} className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-bold mb-2 text-gray-900">{solution.name}</h3>
            <p className="text-sm text-blue-600 mb-2">{solution.category}</p>
            <p className="text-gray-700 mb-4">{solution.description}</p>
            <Link href={`/dashboard/solutions/${solution.id}`}>
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionsListingPage;