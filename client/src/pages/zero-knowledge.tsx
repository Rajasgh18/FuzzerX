import { ChangeEvent, useEffect, useState } from 'react';
import { Search, RotateCw, AlertTriangle, Check } from 'lucide-react';

const ZeroKnowledgeDiscovery = () => {
    const [isDiscoveryRunning, setIsDiscoveryRunning] = useState(false);
    const [crawlDepth, setCrawlDepth] = useState(0);
    const [discoveredEndpoints, setDiscoveredEndpoints] = useState<{
        url: string;
        method: string;
        status: string;
    }[]>([]);

    const activeSpan = (status: string) => {
        switch (status) {
            case 'Active':
                return 'bg-green-500';
            case 'Deprecated':
                return 'bg-red-500';
            case 'Secure':
                return 'bg-blue-500';
        }
    }

    useEffect(() => {
        if (isDiscoveryRunning) {
            const interval = setInterval(() => {
                setCrawlDepth((prev) => {
                    if (prev >= 100) {
                        setIsDiscoveryRunning(false);
                        clearInterval(interval);
                        return 100;
                    }
                    return prev + 10;
                });

                setDiscoveredEndpoints((prev) => [...prev, {
                    url: `/api/endpoint${Math.floor(Math.random() * 100)}`,
                    method: ['GET', 'POST', 'PUT', 'DELETE'][Math.floor(Math.random() * 4)],
                    status: ['Active', 'Deprecated', 'Secure'][Math.floor(Math.random() * 3)]
                }
                ]);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [isDiscoveryRunning]);

    return (
        <main>
            <h1 className="text-3xl font-bold mb-8">Zero-Knowledge Auto-Discovery</h1>

            <div className="flex gap-8">
                {/* Sidebar */}
                <div className="w-64 bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Filters</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Endpoint Type</label>
                            <select className="w-full bg-gray-700 rounded p-2">
                                <option>All</option>
                                <option>API</option>
                                <option>Static</option>
                                <option>Dynamic</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Protocol</label>
                            <select className="w-full bg-gray-700 rounded p-2">
                                <option>All</option>
                                <option>HTTP</option>
                                <option>HTTPS</option>
                                <option>WebSocket</option>
                            </select>
                        </div>
                    </div>
                    <h3 className="text-lg font-semibold mt-6 mb-2">Crawl Depth</h3>
                    <div className="bg-gray-700 rounded-full h-4">
                        <div className="bg-green-500 h-full rounded-full" style={{ width: `${crawlDepth}%` }}></div>
                    </div>
                    <span className="text-sm text-gray-400">{crawlDepth}% Complete</span>
                    <div className="mt-4">
                        <label className="block text-sm font-medium mb-1">Max Depth</label>
                        <input
                            type="range"
                            min="1"
                            max="10"
                            value="5"
                            className="w-full"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setCrawlDepth(parseInt(e.target.value) * 10)}
                        />
                    </div>
                    <button
                        className={`mt-4 w-full py-2 px-4 rounded-lg ${isDiscoveryRunning ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} transition-colors`}
                        onClick={() => setIsDiscoveryRunning(!isDiscoveryRunning)}
                    >
                        {isDiscoveryRunning ? 'Stop Discovery' : 'Start Discovery'}
                    </button>
                </div>

                {/* Main content */}
                <div className="flex-1">
                    {/* Network Graph */}
                    <div className="bg-gray-800 rounded-lg p-4 mb-8">
                        <h2 className="text-xl font-semibold mb-4">Network Graph</h2>
                        <div className="bg-gray-900 h-96 rounded-lg flex items-center justify-center relative">
                            {/* Placeholder for actual graph visualization */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center">
                                <div className="text-2xl font-bold">Root</div>
                            </div>
                            <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
                                <div className="text-sm">/api</div>
                            </div>
                            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
                                <div className="text-sm">/auth</div>
                            </div>
                            <div className="absolute top-3/4 left-1/3 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
                                <div className="text-sm">/users</div>
                            </div>
                        </div>
                    </div>

                    {/* Real-time Discovery Updates */}
                    <div className="bg-gray-800 rounded-lg p-4 mb-8">
                        <h2 className="text-xl font-semibold mb-4">Real-time Discovery Updates</h2>
                        <div className="space-y-2">
                            <div className="flex items-center text-green-400">
                                <Check size={16} className="mr-2" />
                                <span>Discovered new endpoint: /api/products</span>
                            </div>
                            <div className="flex items-center text-yellow-400">
                                <AlertTriangle size={16} className="mr-2" />
                                <span>Potential vulnerability found: SQL Injection at /api/users?id=1</span>
                            </div>
                            <div className="flex items-center text-blue-400">
                                <RotateCw size={16} className="mr-2" />
                                <span>Crawling: /blog/posts</span>
                            </div>
                        </div>
                    </div>

                    {/* Discovered Endpoints Table */}
                    <div className="bg-gray-800 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Discovered Endpoints</h2>
                            <div className="flex items-center bg-gray-700 rounded-lg p-2">
                                <Search className="text-gray-400 mr-2" size={20} />
                                <input type="text" placeholder="Search endpoints..." className="bg-transparent outline-none" />
                            </div>
                        </div>
                        <table className="w-full">
                            <thead>
                                <tr className="text-left text-gray-400">
                                    <th className="p-2">Endpoint</th>
                                    <th className="p-2">Method</th>
                                    <th className="p-2">Protocol</th>
                                    <th className="p-2">Status</th>
                                    {/* <th className="p-2">Actions</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {discoveredEndpoints.map((endpoint, index) => (
                                    <tr key={index}>
                                        <td className='p-2'>{endpoint.url}</td>
                                        <td className='p-2'>{endpoint.method}</td>
                                        <td className='p-2'>HTTPS</td>
                                        <td className='p-2'><span className={`${activeSpan(endpoint.status)} text-white text-xs font-medium px-2 py-1 rounded-lg`}>{endpoint.status}</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ZeroKnowledgeDiscovery;