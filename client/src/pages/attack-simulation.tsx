import { DragEvent, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const timelineData = [
    { name: 'Stage 1', progress: 20 },
    { name: 'Stage 2', progress: 45 },
    { name: 'Stage 3', progress: 30 },
    { name: 'Stage 4', progress: 60 },
    { name: 'Stage 5', progress: 40 },
];

const AttackSimulationPlanner = () => {
    const [dragging, setDragging] = useState(false);
    const [logs, setLogs] = useState<string[]>(['Simulation ready...']);
    const [activeChain, setActiveChain] = useState<string[]>([]);

    const handleDragStart = (e: DragEvent<HTMLDivElement>, vulnType: string) => {
        e.dataTransfer.setData('text/plain', vulnType);
        setDragging(true);
    };

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const vulnType = e.dataTransfer.getData('text');
        setActiveChain([...activeChain, vulnType]);
        addLog(`Added ${vulnType} to attack chain`);
        setDragging(false);
    };

    const addLog = (message: string) => {
        setLogs(prevLogs => [message, ...prevLogs.slice(0, 4)]);
    };

    return (
        <main>
            <h1 className="text-3xl font-light mb-8 text-white">Attack Simulation Planner</h1>

            <div className="grid grid-cols-12 gap-8 h-[calc(100vh-120px)]">
                <div className="col-span-3 bg-gray-800 rounded-lg p-6 flex flex-col">
                    <h2 className="text-xl font-light mb-4 text-white">Vulnerabilities</h2>
                    <div className="space-y-3 flex-grow">
                        {['SQL Injection', 'XSS', 'CSRF', 'File Inclusion', 'Command Injection'].map((vuln) => (
                            <div
                                key={vuln}
                                draggable
                                onDragStart={(e: DragEvent<HTMLDivElement>) => handleDragStart(e, vuln)}
                                className="bg-gray-700 p-3 rounded-md cursor-move hover:bg-gray-600 transition-colors text-sm"
                            >
                                {vuln}
                            </div>
                        ))}
                    </div>
                    <div className="mt-6">
                        <h3 className="text-lg font-light mb-2 text-white">Simulation Logs</h3>
                        <div className="bg-gray-700 p-3 rounded-md text-xs h-32 overflow-y-auto">
                            {logs.map((log, index) => (
                                <p key={index} className="mb-1">{log}</p>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="col-span-6 bg-gray-800 rounded-lg p-6 flex flex-col">
                    <h2 className="text-xl font-light mb-4 text-white">Attack Chain</h2>
                    <div
                        className={`border border-gray-600 rounded-lg flex-grow flex items-center justify-center ${dragging ? 'border-green-500' : ''}`}
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                    >
                        {activeChain.length > 0 ? (
                            <div className="flex flex-wrap gap-2 p-4">
                                {activeChain.map((vuln, index) => (
                                    <div key={index} className="bg-blue-600 text-white text-xs p-2 rounded-md">
                                        {vuln}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-500 text-sm">Drag vulnerabilities here to build attack chain</p>
                        )}
                    </div>

                    <div className="mt-6">
                        <h3 className="text-lg font-light mb-2 text-white">Attack Timeline</h3>
                        <ResponsiveContainer width="100%" height={200}>
                            <AreaChart data={timelineData}>
                                <XAxis dataKey="name" stroke="#9CA3AF" />
                                <YAxis stroke="#9CA3AF" />
                                <Tooltip contentStyle={{ backgroundColor: '#374151', border: 'none' }} />
                                <Area type="monotone" dataKey="progress" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.2} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="col-span-3 bg-gray-800 rounded-lg p-6 flex flex-col">
                    <h2 className="text-xl font-light mb-4 text-white">Controls</h2>
                    <div className="space-y-3 flex-grow">
                        <button
                            className="w-full bg-green-600 hover:bg-green-500 text-white font-light py-2 px-4 rounded-md transition-colors text-sm"
                            onClick={() => addLog('Simulation started')}
                        >
                            Start Simulation
                        </button>
                        <button
                            className="w-full bg-red-600 hover:bg-red-500 text-white font-light py-2 px-4 rounded-md transition-colors text-sm"
                            onClick={() => addLog('Simulation stopped')}
                        >
                            Stop Simulation
                        </button>
                        <button
                            className="w-full bg-yellow-600 hover:bg-yellow-500 text-white font-light py-2 px-4 rounded-md transition-colors text-sm"
                            onClick={() => addLog('Simulation paused')}
                        >
                            Pause Simulation
                        </button>
                    </div>
                    <div className="mt-6">
                        <h3 className="text-lg font-light mb-2 text-white">Simulation Progress</h3>
                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                        </div>
                        <p className="text-right text-xs mt-1">45% Complete</p>
                    </div>
                </div>
            </div>
        </main >
    );
};

export default AttackSimulationPlanner;