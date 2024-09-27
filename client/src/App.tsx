import { Routes, Route } from "react-router-dom";
import Dashboard from "@/pages/dashboard";
import AttackSimulationPlanner from "@/pages/attack-simulation";
import BusinessLogicAwareness from "@/pages/business-logic";
import ApiTestingHub from "@/pages/api-hub";
import ZeroKnowledgeDiscovery from "@/pages/zero-knowledge";
import PayloadCraftingPage from "@/pages/payload-crafting";
import CrossLayeredTestingMonitor from "@/pages/cross-layered";
import ContextualAnalysisPage from "@/pages/contextual-analysis";
import Navbar from "./Components/navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/attack-simulation" element={<AttackSimulationPlanner />} />
        <Route path="/business-logic" element={<BusinessLogicAwareness />} />
        <Route path="/api-hub" element={<ApiTestingHub />} />
        <Route path="/zero-knowledge" element={<ZeroKnowledgeDiscovery />} />
        <Route path="/payload-crafting" element={<PayloadCraftingPage />} />
        <Route path="/cross-layered" element={<CrossLayeredTestingMonitor />} />
        <Route path="/contextual" element={<ContextualAnalysisPage />} />
      </Routes>
    </div>
  );
};

export default App;
