import { useState, useEffect } from 'react';
import { Activity, Brain, Users, Map, ChevronRight, ChevronDown, Play, Pause, Search } from 'lucide-react';

const UserBehaviorVisualization = ({ running }: { running: boolean }) => {
    const [userPosition, setUserPosition] = useState(0);

    useEffect(() => {
        if (running) {
            const interval = setInterval(() => {
                setUserPosition(prev => (prev + 1) % 5);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [running]);

    const steps = ['Home', 'Products', 'Product Details', 'Add to Cart', 'Checkout'];

    return (
        <svg width="100%" height="100%" viewBox="0 0 400 200">
            <line x1="50" y1="100" x2="350" y2="100" stroke="#4B5563" strokeWidth="2" />
            {steps.map((step, index) => (
                <g key={index}>
                    <circle cx={50 + index * 75} cy="100" r="5" fill="#4B5563" />
                    <text x={50 + index * 75} y="125" textAnchor="middle" fill="#9CA3AF" fontSize="12">{step}</text>
                </g>
            ))}
            <circle cx={50 + userPosition * 75} cy="100" r="10" fill="#3B82F6" />
        </svg>
    );
};

const ContextualAnalysisPage = () => {
    const [selectedNode, setSelectedNode] = useState<number | null>(null);
    const [simulationRunning, setSimulationRunning] = useState(false);
    const [expandedNodes, setExpandedNodes] = useState<any>({});

    type structure = {
        id: number;
        name: string,
        children?: structure[];
    }

    const applicationStructure: structure[] = [
        {
            id: 1, name: 'Home', children: [
                {
                    id: 2, name: 'Products', children: [
                        { id: 5, name: 'Product Details' },
                        { id: 6, name: 'Add to Cart' },
                    ]
                },
                {
                    id: 3, name: 'User Account', children: [
                        { id: 7, name: 'Login' },
                        { id: 8, name: 'Registration' },
                        { id: 9, name: 'Profile' },
                    ]
                },
                {
                    id: 4, name: 'Checkout', children: [
                        { id: 10, name: 'Payment' },
                        { id: 11, name: 'Confirmation' },
                    ]
                },
            ]
        },
    ];

    const toggleNode = (nodeId: number) => {
        setExpandedNodes((prev: any) => ({ ...prev, [nodeId]: !prev[nodeId] }));
    };

    const renderTree = (nodes: structure[]) => (
        <ul className="pl-4">
            {nodes.map((node) => (
                <li key={node.id} className="mb-2">
                    <div
                        className={`flex items-center cursor-pointer ${selectedNode === node.id ? 'text-blue-400' : 'text-white'}`}
                        onClick={() => {
                            setSelectedNode(node.id);
                            if (node.children) toggleNode(node.id);
                        }}
                    >
                        {node.children && (
                            expandedNodes[node.id] ?
                                <ChevronDown size={16} className="mr-1" /> :
                                <ChevronRight size={16} className="mr-1" />
                        )}
                        {!node.children && <ChevronRight size={16} className="mr-1 invisible" />}
                        {node.name}
                    </div>
                    {node.children && expandedNodes[node.id] && renderTree(node.children)}
                </li>
            ))}
        </ul>
    );

    return (
        <main>
            <h1 className="text-3xl font-bold mb-8">Contextual Analysis</h1>

            <div className="grid grid-cols-3 gap-8">
                {/* Application Structure Tree */}
                <div className="bg-gray-800 rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                        <Map className="mr-2" /> Application Structure
                    </h2>
                    <div className="mb-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search structure..."
                                className="w-full bg-gray-700 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                        </div>
                    </div>
                    <div className="overflow-auto max-h-96">
                        {renderTree(applicationStructure)}
                    </div>
                </div>

                {/* AI Insights Panel */}
                <div className="bg-gray-800 rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                        <Brain className="mr-2" /> AI Insights
                    </h2>
                    <div className="space-y-4">
                        <div className="bg-gray-700 p-4 rounded-lg">
                            <h3 className="font-semibold mb-2">Vulnerability Risk</h3>
                            <div className="flex items-center">
                                <div className="w-full bg-gray-600 rounded-full h-2.5 mr-2">
                                    <div className="bg-red-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                                </div>
                                <span className="text-sm">High</span>
                            </div>
                        </div>
                        <div className="bg-gray-700 p-4 rounded-lg">
                            <h3 className="font-semibold mb-2">User Flow Efficiency</h3>
                            <div className="flex items-center">
                                <div className="w-full bg-gray-600 rounded-full h-2.5 mr-2">
                                    <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                                </div>
                                <span className="text-sm">Medium</span>
                            </div>
                        </div>
                        <div className="bg-gray-700 p-4 rounded-lg">
                            <h3 className="font-semibold mb-2">Data Sensitivity</h3>
                            <div className="flex items-center">
                                <div className="w-full bg-gray-600 rounded-full h-2.5 mr-2">
                                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '40%' }}></div>
                                </div>
                                <span className="text-sm">Low</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Suggested Exploration Areas */}
                <div className="bg-gray-800 rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                        <Map className="mr-2" /> Suggested Exploration Areas
                    </h2>
                    <ul className="space-y-2">
                        <li className="flex items-center text-yellow-400">
                            <ChevronRight size={16} className="mr-2" />
                            Authentication flow in User Account
                        </li>
                        <li className="flex items-center text-red-400">
                            <ChevronRight size={16} className="mr-2" />
                            Payment processing in Checkout
                        </li>
                        <li className="flex items-center text-green-400">
                            <ChevronRight size={16} className="mr-2" />
                            Product search functionality
                        </li>
                    </ul>
                </div>

                {/* User Behavior Simulation */}
                <div className="col-span-2 bg-gray-800 rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                        <Users className="mr-2" /> User Behavior Simulation
                    </h2>
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Simulation Speed</label>
                            <select className="bg-gray-700 rounded p-2">
                                <option>Slow</option>
                                <option>Normal</option>
                                <option>Fast</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">User Type</label>
                            <select className="bg-gray-700 rounded p-2">
                                <option>New User</option>
                                <option>Returning Customer</option>
                                <option>Admin</option>
                            </select>
                        </div>
                        <button
                            className={`px - 4 py-2 rounded-lg flex items-center ${simulationRunning ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}`}
                            onClick={() => setSimulationRunning(!simulationRunning)}
                        >
                            {simulationRunning ? <Pause className="mr-2" /> : <Play className="mr-2" />}
                            {simulationRunning ? 'Stop Simulation' : 'Start Simulation'}
                        </button>
                    </div>
                    <div className="bg-gray-700 h-64 rounded-lg flex items-center justify-center">
                        <UserBehaviorVisualization running={simulationRunning} />
                    </div>
                </div>

                {/* Real-time Analytics */}
                <div className="bg-gray-800 rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                        <Activity className="mr-2" /> Real-time Analytics
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold mb-2">Active Users</h3>
                            <div className="text-4xl font-bold text-blue-400">127</div>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Avg. Session Duration</h3>
                            <div className="text-4xl font-bold text-green-400">5m 32s</div>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Conversion Rate</h3>
                            <div className="text-4xl font-bold text-yellow-400">3.2%</div>
                        </div>
                    </div>
                </div>
            </div>
        </ main>
    );
};

export default ContextualAnalysisPage;