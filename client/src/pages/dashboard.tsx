import { Card } from "@/Components/card"
import { Switch } from "@/Components/switch"

const Dashboard = () => {
    return (
        <main className="p-2 flex flex-col gap-y-2 h-full">
            <Card className="flex items-center gap-x-5">
                <h2 className="text-xl">Main Overview</h2>
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
                        <Card className="basis-1/4">
                            <h5>Real-Time Fuzzing</h5>
                        </Card>
                        <div className="basis-2/4">

                        </div>
                        <Card className="basis-1/4">
                            <h5>Attack Methods</h5>
                        </Card>
                    </div>
                    <div className="flex h-[40%] gap-x-2">
                        <Card className="basis-1/3">
                            <h5>Progression Modes</h5>
                        </Card>
                        <Card className="basis-1/3">
                            <h5>Map Attack Vectors</h5>
                        </Card>
                        <Card className="basis-1/3">
                            <h5>Detection Tracking</h5>
                        </Card>
                    </div>
                </div>
                <div className="flex flex-col gap-y-2">
                    <Card className="basis-2/5 py-3 flex flex-col gap-y-1 text-sm">
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
                    <Card className="basis-2/5">
                        <h5>Recently Uncovered Issues</h5>
                    </Card>
                </div>
            </div>
        </main>

    )
}

export default Dashboard;
