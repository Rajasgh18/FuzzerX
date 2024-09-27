import { Card, CardContent, CardHeader, CardTitle } from "@/Components/card";
import { Switch } from "@/Components/switch";
import { AlertCircle } from "lucide-react";
import { PieChart, Pie, Cell } from "recharts";

const Dashboard = () => {
  const recentIssues = [
    { type: "Critical", description: "SQL injection vulnerability found in login endpoint" },
    { type: "Fixed", description: "XSS vulnerability patched in user profile" },
    { type: "Scan", description: "Full scan completed on payment gateway" },
  ];
  const progressionData = [
    { name: "Completed", value: 47 },
    { name: "Remaining", value: 83 },
  ];
  const letters = ["V", "P", "S", "M", "L", "X", "D", "A"];
  const radius = 80;
  const centerX = 100;
  const centerY = 100;
  return (
    <main className="p-2 flex flex-col gap-y-2 h-full">
      <Card className="flex items-center gap-x-5">
        <h2 className="text-3xl font-bold ml-6 mr-32">Main Overview</h2>
        <div className="flex items-center gap-x-4">
          <Switch badgeColor="#D0F3D2" text="Zero-Knowledge Auto-Discovery" />
          <Switch badgeColor="#903D62" text="Payload Crafting Section" />
          <Switch badgeColor="#D04E3C" text="Contexual Analysis" />
          <Switch badgeColor="#D1D6F0" text="Cross-Layered Testing Monitor" />
          <Switch badgeColor="#8182D3" text="Business Logic Awareness" />
          <Switch badgeColor="#5580C7" text="API Testing Hub" />
          <Switch badgeColor="#F5BF7D" text="Attack Simulation Planner" />
        </div>
      </Card>
      <div className="flex-grow grid grid-cols-5 gap-x-2">
        <Card className="flex-grow flex flex-col p-2">
          <button className="w-full bg-[#6E78C4CC] p-2 font-medium rounded-xl text-lg">Dashboard</button>
        </Card>
        <div className="col-span-3 flex flex-col gap-2">
          <div className="flex h-[60%]">
            <Card className="basis-1/4 text-white w-64">
              <CardHeader>
                <CardTitle className="text-sm font-medium">Real-Time Fuzzing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative h-52">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
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
                    <text x={centerX} y={centerY} textAnchor="middle" dy=".3em" className="text-3xl font-bold">
                      5.2%
                    </text>
                    <text x={centerX} y={centerY + 20} textAnchor="middle" className="text-xs">
                      Active Scans
                    </text>
                  </svg>
                </div>

                <div className="mt-4">
                  <div className="flex items-center mb-2">
                    <img
                      src="https://avatars.githubusercontent.com/u/140960022?s=400&u=3ba3ead6ee484cf7edc8c5331bd03b063d049e33&v=4"
                      alt="Senior Pentester"
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <span className="text-sm">Senior Pentester</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <div className="font-medium">Request</div>
                      <div>7.5</div>
                    </div>
                    <div>
                      <div className="font-medium">Uptime</div>
                      <div>34.7h 23m</div>
                    </div>
                    <div>
                      <div className="font-medium">Vuln Found</div>
                      <div>17</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="basis-2/4"></div>
            <Card className="basis-1/4">
              <h5>Attack Methods</h5>
            </Card>
          </div>
          <div className="flex h-[40%] gap-x-2">
            <Card className="basis-1/3">
              <CardHeader>
                <CardTitle>Progression Modes</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center items-center">
                <PieChart width={200} height={200}>
                  <Pie data={progressionData} cx={100} cy={100} innerRadius={60} outerRadius={80} fill="#8884d8" paddingAngle={5} dataKey="value">
                    <Cell key="cell-0" fill="#6366f1" />
                    <Cell key="cell-1" fill="#1f2937" />
                  </Pie>
                </PieChart>
                <div className="absolute text-center">
                  <div className="text-3xl font-bold">47/130</div>
                  <div className="text-sm">Completed Stages</div>
                </div>
              </CardContent>
            </Card>
            <Card className="basis-1/3">
              <h5>Map Attack Vectors</h5>
            </Card>
            <Card className=" basis-1/3">
              <CardHeader>
                <CardTitle>Detection Tracking</CardTitle>
              </CardHeader>
              <h6 className="text-sm mt-6">vulnerabiility Detection</h6>
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
