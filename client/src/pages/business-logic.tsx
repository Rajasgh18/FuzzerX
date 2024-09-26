import { useState } from 'react';
import { Link } from 'react-router-dom';

const BusinessLogicAwareness = () => {
    const [selectedProcess, setSelectedProcess] = useState<'orderProcess' | 'userRegistration'>('orderProcess');
    const [customScenario, setCustomScenario] = useState('');
    const [riskLevel, setRiskLevel] = useState('medium');

    const processes: {
        orderProcess: string[];
        userRegistration: string[];
    } = {
        orderProcess: [
            'Start',
            'Add to Cart',
            'Checkout',
            'Payment',
            'Confirmation'
        ],
        userRegistration: [
            'Start',
            'Enter Details',
            'Verify Email',
            'Set Password',
            'Complete'
        ],
    };

    return (
        <main>
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Business Logic Awareness</h1>
                <Link to='/' className="bg-blue-500 px-4 py-2 rounded">Back to Dashboard</Link>
            </header>

            <div className="grid grid-cols-4 gap-6">
                <div className="col-span-1 bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Business Processes</h2>
                    <ul className="space-y-2">
                        <li>
                            <button
                                className={`w-full text-left px-3 py-2 rounded ${selectedProcess === 'orderProcess' ? 'bg-blue-500' : 'bg-gray-700'
                                    }`}
                                onClick={() => setSelectedProcess('orderProcess')}
                            >
                                Order Process
                            </button>
                        </li>
                        <li>
                            <button
                                className={`w-full text-left px-3 py-2 rounded ${selectedProcess === 'userRegistration' ? 'bg-blue-500' : 'bg-gray-700'
                                    }`}
                                onClick={() => setSelectedProcess('userRegistration')}
                            >
                                User Registration
                            </button>
                        </li>
                    </ul>
                </div>

                <div className="col-span-3 bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Process Visualization</h2>
                    <div className="flex justify-between items-center">
                        {processes[selectedProcess].map((step: string, index: number) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mb-2">
                                    {step}
                                </div>
                                {index < processes[selectedProcess].length - 1 && (
                                    <div className="w-full h-1 bg-green-500"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col-span-2 bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Logic Flaw Detection</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Detection Sensitivity</label>
                            <input type="range" min="1" max="10" className="w-full" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Analysis Depth</label>
                            <select className="w-full bg-gray-700 rounded px-3 py-2">
                                <option>Shallow</option>
                                <option>Medium</option>
                                <option>Deep</option>
                            </select>
                        </div>
                        <button className="w-full bg-green-500 px-4 py-2 rounded">Start Analysis</button>
                    </div>
                </div>

                <div className="col-span-2 bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Custom Scenario Builder</h2>
                    <div className="space-y-4">
                        <textarea
                            className="w-full h-32 bg-gray-700 rounded px-3 py-2"
                            placeholder="Describe your custom scenario here..."
                            value={customScenario}
                            onChange={(e) => setCustomScenario(e.target.value)}
                        ></textarea>
                        <button className="w-full bg-blue-500 px-4 py-2 rounded">Generate Scenario</button>
                    </div>
                </div>

                <div className="col-span-2 bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Risk Assessment</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Overall Risk Level</label>
                            <select
                                className="w-full bg-gray-700 rounded px-3 py-2"
                                value={riskLevel}
                                onChange={(e) => setRiskLevel(e.target.value)}
                            >
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                        <div className="bg-gray-700 p-4 rounded">
                            <h3 className="font-semibold mb-2">Risk Factors:</h3>
                            <ul className="list-disc list-inside">
                                <li>Input validation: Medium risk</li>
                                <li>Access control: Low risk</li>
                                <li>Data integrity: High risk</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-span-2 bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Detected Logic Flaws</h2>
                    <ul className="space-y-2">
                        <li className="flex justify-between items-center bg-gray-700 p-2 rounded">
                            <span>Incomplete order cancellation process</span>
                            <span className="bg-yellow-500 text-black px-2 py-1 rounded text-sm">Medium</span>
                        </li>
                        <li className="flex justify-between items-center bg-gray-700 p-2 rounded">
                            <span>Potential race condition in inventory update</span>
                            <span className="bg-red-500 px-2 py-1 rounded text-sm">High</span>
                        </li>
                        <li className="flex justify-between items-center bg-gray-700 p-2 rounded">
                            <span>Insufficient input sanitization in search function</span>
                            <span className="bg-green-500 px-2 py-1 rounded text-sm">Low</span>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default BusinessLogicAwareness;