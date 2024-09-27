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
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar showSearchBar={true} />
              <Dashboard />
            </>
          }
        />
        <Route
          path="/attack-simulation"
          element={
            <>
              <Navbar />
              <AttackSimulationPlanner />
            </>
          }
        />
        <Route
          path="/business-logic"
          element={
            <>
              <Navbar />
              <BusinessLogicAwareness />
            </>
          }
        />
        <Route
          path="/api-hub"
          element={
            <>
              <Navbar />
              <ApiTestingHub />
            </>
          }
        />
        <Route
          path="/zero-knowledge"
          element={
            <>
              <Navbar />
              <ZeroKnowledgeDiscovery />
            </>
          }
        />
        <Route
          path="/payload-crafting"
          element={
            <>
              <Navbar />
              <PayloadCraftingPage />
            </>
          }
        />
        <Route
          path="/cross-layered"
          element={
            <>
              <Navbar />
              <CrossLayeredTestingMonitor />
            </>
          }
        />
        <Route
          path="/contextual"
          element={
            <>
              <Navbar />
              <ContextualAnalysisPage />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
