import React from 'react';

interface IntegrationDetailPageProps {
  params: { integrationId: string };
}

const IntegrationDetailPage: React.FC<IntegrationDetailPageProps> = ({ params }) => {
  const { integrationId } = params;

  // In a real app, you'd fetch integration details
  const integration = {
    id: integrationId,
    solutionName: `Integrated Solution ${integrationId}`,
    status: 'Active',
    configuredOn: '2023-10-26',
    usage: '1,234 API calls this month',
    settings: {
      apiKey: 'sk-xxxxxxxxxxxxx',
      endpoint: 'https://api.example.com/integration'
    }
  };

  if (!integration) {
    return <div>Loading or Integration not found...</div>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Integration Details: {integration.solutionName}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
        <div>
          <p><span className="font-medium">Status:</span> {integration.status}</p>
          <p><span className="font-medium">Configured On:</span> {integration.configuredOn}</p>
          <p><span className="font-medium">Current Usage:</span> {integration.usage}</p>
        </div>
        <div>
          <h3 className="font-medium text-lg mb-2">Configuration:</h3>
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
            <code>{JSON.stringify(integration.settings, null, 2)}</code>
          </pre>
        </div>
      </div>
      <div className="mt-6 space-x-4">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md font-medium">Edit Configuration</button>
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-medium">Deactivate Integration</button>
      </div>
    </div>
  );
};

export default IntegrationDetailPage;