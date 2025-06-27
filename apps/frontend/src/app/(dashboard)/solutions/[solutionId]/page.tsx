import React from 'react';

interface SolutionDetailPageProps {
  params: { solutionId: string };
}

const SolutionDetailPage: React.FC<SolutionDetailPageProps> = ({ params }) => {
  const { solutionId } = params;

  // In a real app, you'd fetch solution details based on solutionId
  const solution = {
    id: solutionId,
    name: `AI Solution ${solutionId}`,
    description: `Detailed description for AI Solution ${solutionId}. This solution offers advanced capabilities in data analysis and predictive modeling.`,
    features: ['Real-time processing', 'Scalable architecture', 'Customizable dashboards'],
    price: '$99/month',
    category: 'Analytics'
  };

  if (!solution) {
    return <div>Loading or Solution not found...</div>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{solution.name}</h2>
      <p className="text-gray-700 mb-4">{solution.description}</p>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Key Features</h3>
        <ul className="list-disc list-inside text-gray-700">
          {solution.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Pricing</h3>
        <p className="text-gray-700">{solution.price}</p>
      </div>

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium">
        Activate This Solution
      </button>
    </div>
  );
};

export default SolutionDetailPage;