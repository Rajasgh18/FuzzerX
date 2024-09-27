import { Card, CardContent, CardHeader, CardTitle } from "@/Components/card";
import { Switch } from "@/Components/switch";
import { AlertCircle } from "lucide-react";
import { PieChart, Pie, Cell } from "recharts";
import { useState } from "react";

const Dashboard = () => {
  const recentIssues = [
    { type: "Critical", description: "SQL injection vulnerability found in login endpoint" },
    { type: "Fixed", description: "XSS vulnerability patched in user profile" },
    { type: "Scan", description: "Full scan completed on payment gateway" },
  ];
  const letters = ["V", "P", "S", "M", "L", "X", "D", "A"];
  const radius = 80;
  const centerX = 100;
  const centerY = 100;
  const steps = ["Home", "Products", "Product Details", "Add to Cart", "Checkout"];
  const [userPosition] = useState(0);
  const data = [
    { name: "SQL Injection", value: 60, color: "#8884d8" },
    { name: "XSS", value: 24.5, color: "#82ca9d" },
    { name: "CSRF", value: 15.5, color: "#ffc658" },
  ];

  return (
    <main className="p-2 flex flex-col gap-y-2 h-full">
      <Card className="flex items-center gap-x-5">
        <h2 className="text-3xl font-bold ml-6 mr-16">Main Overview</h2>
        <div className="flex items-center gap-x-4">
          <Switch path="/zero-knowledge" badgeColor="#D0F3D2" text="Zero-Knowledge Auto-Discovery" />
          <Switch path="/payload-crafting" badgeColor="#903D62" text="Payload Crafting Section" />
          <Switch path="/contextual" badgeColor="#D04E3C" text="Contexual Analysis" />
          <Switch path="/cross-layered" badgeColor="#D1D6F0" text="Cross-Layered Testing Monitor" />
          <Switch path="/business-logic" badgeColor="#8182D3" text="Business Logic Awareness" />
          <Switch path="/api-hub" badgeColor="#5580C7" text="API Testing Hub" />
          <Switch path="/attack-simulation" badgeColor="#F5BF7D" text="Attack Simulation Planner" />
        </div>
      </Card>
      <div className="flex-grow grid grid-cols-5 gap-x-2">
        <Card className="flex-grow flex flex-col p-2">
          <button className="w-full bg-[#6E78C4CC] p-2 font-medium rounded-xl text-lg">Dashboard</button>
        </Card>
        <div className="col-span-3 flex flex-col gap-2">
          <div className="flex h-[60%]">
            <Card className="bg-gray-800 text-white w-64">
              <CardHeader>
                <CardTitle className="text-sm font-medium">Real-Time Fuzzing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative h-52">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#51557A" strokeWidth="1" />

                    <path d="M100,20 A80,80 0 0,1 180,100 M20,100 A80,80 0 0,1 100" fill="none" stroke="white" strokeWidth="2" />

                    {letters.map((letter, index) => {
                      const angle = (index / letters.length) * 2 * Math.PI - Math.PI / 2;
                      const x = centerX + radius * Math.cos(angle);
                      const y = centerY + radius * Math.sin(angle);
                      return (
                        <g key={letter}>
                          <circle cx={x} cy={y} r="12" fill="#51557A" />
                          <text x={x} y={y} textAnchor="middle" dy=".3em" fill="white" fontSize="12">
                            {letter}
                          </text>
                        </g>
                      );
                    })}
                    <text x={centerX} y={centerY} textAnchor="middle" dy=".3em" fill="white" className="text-3xl font-bold">
                      5.2%
                    </text>
                    <text x={centerX} y={centerY + 20} textAnchor="middle" fill="white" className="text-xs">
                      Active Scans
                    </text>
                  </svg>
                </div>

<<<<<<< HEAD
                <div className="mt-4">
                  <div className="  ">
                    <div className="flex items-center">
                      <img
                        src="https://avatars.githubusercontent.com/u/140960022?s=400&u=3ba3ead6ee484cf7edc8c5331bd03b063d049e33&v=4"
                        alt="Senior Pentester"
                        className="w-10 h-10 rounded-full mr-2"
                      />
                      <span className="text-sm ">Senior Pentester</span>
                    </div>

                    <svg width="80%" height="80%" viewBox="0 0 400 200">
                      <line x1="50" y1="100" x2="350" y2="100" stroke="#4B5563" strokeWidth="2" />
                      {steps.map((_, index) => (
=======
                <div className="mt-2">
                  <div className="flex items-center mb-1">
                    <img
                      src="https://avatars.githubusercontent.com/u/140960022?s=400&u=3ba3ead6ee484cf7edc8c5331bd03b063d049e33&v=4"
                      alt="Senior Pentester"
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <span className="text-sm">Senior Pentester</span>
                  </div>
                  <div className="w-full h-12">
                    <svg width="100%" height="100%" viewBox="0 0 400 100">
                      <line x1="25" y1="50" x2="375" y2="50" stroke="#4B5563" strokeWidth="3" />
                      {steps.map((step, index) => (
>>>>>>> 1480447 (fixing real time fuzzing card)
                        <g key={index}>
                          <circle cx={25 + index * 87.5} cy="50" r="7" fill="#4B5563" />
                          <text x={25 + index * 87.5} y="75" textAnchor="middle" fill="#9CA3AF" fontSize="14"></text>{" "}
                        </g>
                      ))}
                      <circle cx={25 + userPosition * 87.5} cy="50" r="12" fill="#3B82F6" />
                    </svg>
                  </div>
                  <div className="flex justify-between text-xs mt-14">
                    {[
                      { label: "Request", value: "7.5" },
                      { label: "Uptime", value: "34.7h 23m" },
                      { label: "Vuln Found", value: "17" },
                    ].map((item, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className="bg-gray-700 rounded-full w-16 h-16 flex flex-col items-center justify-center mb-1">
                          <div className="font-medium">{item.value}</div>
                        </div>
                        <div>{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="basis-2/4 flex align-center justify-center p-4">
              <img src="/Middle.png" alt="" />
            </div>
            <Card className="basis-1/4 text-white w-64">
              <CardHeader>
                <CardTitle className="text-sm font-medium">Attack Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative h-48">
                  <PieChart className="mt-6 ml-6" width={200} height={200}>
                    <Pie data={data} cx={100} cy={100} innerRadius={55} outerRadius={90} dataKey="value">
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="text-sm font-bold ml-10 mr-6">80.5%</div>
                    <div className="text-sm mr-8 ml-10">Detection Rate</div>
                  </div>
                </div>
                <div className="flex justify-between mt-24">
                  <div className="text-center">
                    <div className="text-2xl font-bold">551</div>
                    <div className="text-xs">Payloads Generated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">905</div>
                    <div className="text-xs">Mutations Applied</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex h-[40%] gap-x-2">
            <Card className="basis-1/3">
              <CardHeader>
                <CardTitle>Progression Modes</CardTitle>
              </CardHeader>
              <img src="/rainbow.png" alt="" />
            </Card>
            <Card className="basis-1/3">
              <h5 className="mb-4">Map Attack Vectors</h5>
              <img src="/shark.png" alt="" />
            </Card>
            <Card className=" basis-1/3">
              <CardHeader>
                <CardTitle>Detection Tracking</CardTitle>
              </CardHeader>
              <h6 className="font-extralight text-sm mt-14">vulnerabiility Detection</h6>
              <CardContent className="mt-6">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                    <span>36 Endpoints Scanned</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span>85% Coverage Increase</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <Card className="basis-1/5 py-3 flex flex-col gap-y-1 text-sm">
            <p className="font-medium text-[#838AC1]">Feature Analysis</p>
            <h4 className="ml-1">Adaptive Intelligence</h4>
            <div className="bg-[#51557399] rounded-xl p-4 mt-2">AI-driven payload generation active. Cross-vector mutations enabled</div>
            <div className="bg-[#51557399] rounded-xl p-4 mt-1">Current focus: API endpoint fuzzing</div>
          </Card>
          <Card className="basis-1/5 flex flex-col gap-y-2">
            <h5>Pattern Detection</h5>
            <div className="grid grid-cols-4 gap-2">
              <span className="py-4 flex-shrink-0 rounded-xl bg-[#8291E8] text-sm text-center font-bold">Auto</span>
              <span className="py-4 flex-shrink-0 rounded-xl bg-[#5580C7] text-sm text-center font-bold">Logic</span>
              <span className="py-4 flex-shrink-0 rounded-xl bg-[#88AF73] text-sm text-center font-bold">Chain</span>
              <span className="py-4 flex-shrink-0 rounded-xl bg-[#F5BF7D] text-sm text-center font-bold">Depth</span>
            </div>
          </Card>
          <Card className="basis-3/5">
            <CardHeader>
              <CardTitle>Recently Uncovered Issues</CardTitle>
            </CardHeader>
            <CardContent className="">
              <div className="flex space-x-2 mb-2 mt-4">
                <button className="bg-gray-700 px-3 py-1 rounded">All</button>
                <button className="bg-gray-700 px-3 py-1 rounded">Vulnerabilities</button>
                <button className="bg-gray-700 px-3 py-1 rounded">Scans</button>
                <button className="bg-gray-700 px-3 py-1 rounded">Fixes</button>
              </div>
              <ul className="space-y-2 mt-10">
                {recentIssues.map((issue, index) => (
                  <li key={index} className="flex ">
                    <AlertCircle className="mr-4" size={16} />
                    <span>{issue.description}</span>
                    <span className={`ml-auto ${issue.type === "Critical" ? "text-red-500" : issue.type === "Fixed" ? "text-green-500" : "text-blue-500"}`}>
                      {issue.type}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
