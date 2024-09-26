import { ChangeEvent, useState } from 'react';
import { Code, Zap, GitBranch, Play, Save, Copy, RefreshCw } from 'lucide-react';

const PayloadCraftingPage = () => {
    const [customPayload, setCustomPayload] = useState('');
    const [selectedVector, setSelectedVector] = useState<string>('sql-injection');
    const [complexity, setComplexity] = useState<number>(50);
    const [mutationRate, setMutationRate] = useState<number>(30);

    const attackVectors = [
        { value: 'sql-injection', label: 'SQL Injection' },
        { value: 'xss', label: 'Cross-Site Scripting (XSS)' },
        { value: 'xxe', label: 'XML External Entity (XXE)' },
        { value: 'csrf', label: 'Cross-Site Request Forgery (CSRF)' },
        { value: 'ssrf', label: 'Server-Side Request Forgery (SSRF)' },
    ];

    const aiSuggestedPayloads = [
        "' OR '1'='1",
        "<script>alert('XSS')</script>",
        "<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?><!DOCTYPE foo [<!ELEMENT foo ANY ><!ENTITY xxe SYSTEM \"file:///etc/passwd\" >]><foo>&xxe;</foo>",
    ];

    return (
        <main>
            <h1 className="text-3xl font-bold mb-8">Payload Crafting</h1>

            <div className="grid grid-cols-3 gap-8">
                {/* Custom Payload Editor */}
                <div className="col-span-2 bg-gray-800 rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                        <Code className="mr-2" /> Custom Payload Editor
                    </h2>
                    <textarea
                        className="w-full h-64 bg-gray-700 text-white p-4 rounded-lg font-mono"
                        value={customPayload}
                        onChange={(e) => setCustomPayload(e.target.value)}
                        placeholder="Enter your custom payload here..."
                    />
                    <div className="flex justify-between mt-4">
                        <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg flex items-center">
                            <Play className="mr-2" /> Test Payload
                        </button>
                        <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg flex items-center">
                            <Save className="mr-2" /> Save Payload
                        </button>
                    </div>
                </div>

                {/* Attack Vector and Controls */}
                <div className="bg-gray-800 rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Attack Vector</h2>
                    <select
                        className="w-full bg-gray-700 p-2 rounded-lg mb-4"
                        value={selectedVector}
                        onChange={(e) => setSelectedVector(e.target.value)}
                    >
                        {attackVectors.map((vector) => (
                            <option key={vector.value} value={vector.value}>{vector.label}</option>
                        ))}
                    </select>

                    <h3 className="text-lg font-semibold mt-6 mb-2">Payload Complexity</h3>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={complexity}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setComplexity(parseInt(e.target.value))}
                        className="w-full"
                    />
                    <span className="text-sm text-gray-400">{complexity}%</span>

                    <h3 className="text-lg font-semibold mt-6 mb-2">Mutation Rate</h3>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={mutationRate}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setMutationRate(parseInt(e.target.value))}
                        className="w-full"
                    />
                    <span className="text-sm text-gray-400">{mutationRate}%</span>

                    <button className="mt-6 w-full bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg flex items-center justify-center">
                        <Zap className="mr-2" /> Generate AI Payload
                    </button>
                </div>

                {/* AI-Generated Payload Suggestions */}
                <div className="col-span-2 bg-gray-800 rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                        <Zap className="mr-2" /> AI-Generated Payload Suggestions
                    </h2>
                    <div className="space-y-4">
                        {aiSuggestedPayloads.map((payload, index) => (
                            <div key={index} className="bg-gray-700 p-4 rounded-lg flex justify-between items-center">
                                <code className="font-mono">{payload}</code>
                                <button className="text-blue-400 hover:text-blue-300" onClick={() => setCustomPayload(payload)}>
                                    <Copy size={20} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Payload Mutation Visualization */}
                <div className="bg-gray-800 rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                        <GitBranch className="mr-2" /> Payload Mutation Visualization
                    </h2>
                    <div className="bg-gray-700 h-64 rounded-lg flex items-center justify-center">
                        {/* Placeholder for mutation visualization */}
                        <div className="text-center">
                            <div className="text-6xl mb-4">🧬</div>
                            <p className="text-gray-400">Mutation Visualization</p>
                        </div>
                    </div>
                    <button className="mt-4 w-full bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg flex items-center justify-center">
                        <RefreshCw className="mr-2" /> Mutate Payload
                    </button>
                </div>
            </div>
        </main>
    );
};

export default PayloadCraftingPage;