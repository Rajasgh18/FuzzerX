import { useState } from 'react';

const ApiTestingHub = () => {
    const [activeTab, setActiveTab] = useState('rest');
    const [method, setMethod] = useState('GET');
    const [endpoint, setEndpoint] = useState('');
    const [requestBody, setRequestBody] = useState('');
    const [response, setResponse] = useState('');
    const [selectedEndpoint, setSelectedEndpoint] = useState<number | null>(null);

    const apiEndpoints = [
        { id: 1, name: 'Get Users', method: 'GET', url: '/api/users' },
        { id: 2, name: 'Create User', method: 'POST', url: '/api/users' },
        { id: 3, name: 'Update User', method: 'PUT', url: '/api/users/{id}' },
    ];

    const handleSendRequest = () => {
        // Simulating API request
        setResponse(JSON.stringify({ message: 'Response received', data: {} }, null, 2));
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen p-6">
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">API Testing Hub</h1>
                <button className="bg-blue-500 px-4 py-2 rounded">Back to Dashboard</button>
            </header>

            <div className="grid grid-cols-4 gap-6">
                <div className="col-span-1 bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">API Endpoints</h2>
                    <ul className="space-y-2">
                        {apiEndpoints.map((endpoint) => (
                            <li key={endpoint.id}>
                                <button
                                    className={`w-full text-left px-3 py-2 rounded ${selectedEndpoint === endpoint.id ? 'bg-blue-500' : 'bg-gray-700'
                                        }`}
                                    onClick={() => setSelectedEndpoint(endpoint.id)}
                                >
                                    {endpoint.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="col-span-3 bg-gray-800 p-4 rounded-lg">
                    <div className="flex space-x-4 mb-4">
                        <button
                            className={`px - 4 py-2 rounded ${activeTab === 'rest' ? 'bg-blue-500' : 'bg-gray-700'}`}
                            onClick={() => setActiveTab('rest')}
                        >
                            REST
                        </button>
                        <button
                            className={`px - 4 py-2 rounded ${activeTab === 'graphql' ? 'bg-blue-500' : 'bg-gray-700'}`}
                            onClick={() => setActiveTab('graphql')}
                        >
                            GraphQL
                        </button>
                        <button
                            className={`px - 4 py-2 rounded ${activeTab === 'websocket' ? 'bg-blue-500' : 'bg-gray-700'}`}
                            onClick={() => setActiveTab('websocket')}
                        >
                            WebSocket
                        </button>
                    </div>

                    <div className="space-y-4">
                        <div className="flex space-x-4">
                            <select
                                className="bg-gray-700 rounded px-3 py-2"
                                value={method}
                                onChange={(e) => setMethod(e.target.value)}
                            >
                                <option>GET</option>
                                <option>POST</option>
                                <option>PUT</option>
                                <option>DELETE</option>
                            </select>
                            <input
                                type="text"
                                className="flex-grow bg-gray-700 rounded px-3 py-2"
                                placeholder="Enter endpoint URL"
                                value={endpoint}
                                onChange={(e) => setEndpoint(e.target.value)}
                            />
                            <button className="bg-green-500 px-4 py-2 rounded" onClick={handleSendRequest}>
                                Send
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Request Body</h3>
                                <textarea
                                    className="w-full h-64 bg-gray-700 rounded px-3 py-2"
                                    value={requestBody}
                                    onChange={(e) => setRequestBody(e.target.value)}
                                ></textarea>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Response</h3>
                                <pre className="w-full h-64 bg-gray-700 rounded px-3 py-2 overflow-auto">
                                    {response}
                                </pre>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2 bg-gray-800 p-4 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Schema Viewer</h2>
                        <pre className="bg-gray-700 p-4 rounded overflow-auto h-64">
                            {JSON.stringify({
                                type: 'object',
                                properties: {
                                    id: { type: 'integer' },
                                    name: { type: 'string' },
                                    email: { type: 'string' },
                                },
                                required: ['name', 'email'],
                            }, null, 2)}
                        </pre>
                    </div>

                    <div className="col-span-2 bg-gray-800 p-4 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Authentication Setup</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Auth Type</label>
                                <select className="w-full bg-gray-700 rounded px-3 py-2">
                                    <option>No Auth</option>
                                    <option>API Key</option>
                                    <option>Bearer Token</option>
                                    <option>OAuth 2.0</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Token</label>
                                <input type="text" className="w-full bg-gray-700 rounded px-3 py-2" placeholder="Enter token" />
                            </div>
                        </div>
                    </div>

                    <div className="col-span-4 bg-gray-800 p-4 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Test Case Generator</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Test Scenario</label>
                                <input type="text" className="w-full bg-gray-700 rounded px-3 py-2" placeholder="Enter test scenario" />
                            </div>
                            <div className="flex space-x-4">
                                <button className="bg-blue-500 px-4 py-2 rounded flex-grow">Generate Test Cases</button>
                                <button className="bg-green-500 px-4 py-2 rounded flex-grow">Run All Tests</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApiTestingHub;