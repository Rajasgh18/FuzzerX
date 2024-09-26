import { useState } from 'react';
import { Layers, AlertTriangle, CheckCircle, Activity, Play, Pause, RefreshCw } from 'lucide-react';

const CrossLayeredTestingMonitor = () => {
    const [activeLayer, setActiveLayer] = useState('all');
    const [isTestingRunning, setIsTestingRunning] = useState(false);

    const layers = ['Frontend', 'API', 'Microservices', 'Backend'];
    const vulnerabilityTypes = ['XSS', 'SQL Injection', 'CSRF', 'Authentication Bypass'];

    const generateRandomData = () => {
        return layers.map(layer => ({
            name: layer,
            vulnerabilities: Math.floor(Math.random() * 10),
            coverage: Math.floor(Math.random() * 100),
        }));
    };

    const [testData, setTestData] = useState(generateRandomData());

    const refreshData = () => {
        setTestData(generateRandomData());
    };

    return (
        <main>
            <h1 className="text-3xl font-bold mb-8 flex items-center">
                <Layers className="mr-2" /> Cross-Layered Testing Monitor
            </h1>

            <div className="grid grid-cols-3 gap-8">
                {/* Stack Visualization */}
                <div className="col-span-2 bg-gray-800 rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Application Stack</h2>
                    <div className="relative h-96">
                        {layers.map((layer, index) => (
                            <div
                                key={layer}
                                className={`absolute w-full p-4 rounded-lg cursor-pointer transition-all duration-300 ${activeLayer === layer || activeLayer === 'all'
                                        ? 'opacity-100'
                                        : 'opacity-50'
                                    }`}
                                style={{
                                    backgroundColor: `rgba(59, 130, 246, ${0.5 - index * 0.1})`,
                                    bottom: `${index * 25}%`,
                                    height: '25%',
                                }}
                                onClick={() => setActiveLayer(layer)}
                            >
                                <h3 className="text-lg font-semibold">{layer}</h3>
                                <div className="mt-2">
                                    <span className="mr-4">Vulnerabilities: {testData[index].vulnerabilities}</span>
                                    <span>Coverage: {testData[index].coverage}%</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Controls and Metrics */}
                <div className="space-y-6">
                    <div className="bg-gray-800 rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-4">Test Controls</h2>
                        <div className="flex justify-between mb-4">
                            <button
                                className={`px-4 py-2 rounded-lg flex items-center ${isTestingRunning ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
                                    }`}
                                onClick={() => setIsTestingRunning(!isTestingRunning)}
                            >
                                {isTestingRunning ? (
                                    <>
                                        <Pause className="mr-2" /> Stop Testing
                                    </>
                                ) : (
                                    <>
                                        <Play className="mr-2" /> Start Testing
                                    </>
                                )}
                            </button>
                            <button
                                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg flex items-center"
                                onClick={refreshData}
                            >
                                <RefreshCw className="mr-2" /> Refresh Data
                            </button>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Active Layer</label>
                            <select
                                className="w-full bg-gray-700 rounded p-2"
                                value={activeLayer}
                                onChange={(e) => setActiveLayer(e.target.value)}
                            >
                                <option value="all">All Layers</option>
                                {layers.map(layer => (
                                    <option key={layer} value={layer}>{layer}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-4">Quick Metrics</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-700 p-4 rounded-lg">
                                <h3 className="text-sm font-medium mb-2">Total Vulnerabilities</h3>
                                <p className="text-2xl font-bold text-red-400">
                                    {testData.reduce((sum, layer) => sum + layer.vulnerabilities, 0)}
                                </p>
                            </div>
                            <div className="bg-gray-700 p-4 rounded-lg">
                                <h3 className="text-sm font-medium mb-2">Average Coverage</h3>
                                <p className="text-2xl font-bold text-green-400">
                                    {Math.round(testData.reduce((sum, layer) => sum + layer.coverage, 0) / layers.length)}%
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Vulnerability Distribution */}
                <div className="col-span-2 bg-gray-800 rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Vulnerability Distribution</h2>
                    <div className="h-64 flex items-end justify-between">
                        {vulnerabilityTypes.map((type, index) => (
                            <div key={type} className="w-1/5 flex flex-col items-center">
                                <div
                                    className="w-full bg-red-500 rounded-t-lg"
                                    style={{ height: `${(index + 1) * 20}%` }}
                                ></div>
                                <span className="mt-2 text-sm">{type}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Real-time Logs */}
                <div className="bg-gray-800 rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Real-time Logs</h2>
                    <div className="h-64 overflow-y-auto space-y-2">
                        <div className="flex items-center text-green-400">
                            <CheckCircle size={16} className="mr-2" />
                            <span>Frontend: Completed XSS test on login form</span>
                        </div>
                        <div className="flex items-center text-yellow-400">
                            <AlertTriangle size={16} className="mr-2" />
                            <span>API: Potential SQL injection in /users endpoint</span>
                        </div>
                        <div className="flex items-center text-blue-400">
                            <Activity size={16} className="mr-2" />
                            <span>Microservices: Testing auth service</span>
                        </div>
                        <div className="flex items-center text-red-400">
                            <AlertTriangle size={16} className="mr-2" />
                            <span>Backend: High severity vulnerability detected in database query</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CrossLayeredTestingMonitor;