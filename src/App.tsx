import Providers from "@/Providers";
import Header from "@/components/Header";
import HeaderSheet from "@/components/HeaderSheet";
import BarSettings from "@/pages/BarSettings";
import BikeOperations from "@/pages/BikeOperations";
import JobSettings from "@/pages/JobSettings";
import Performance from "@/pages/Performance";
import PowerInfo from "@/pages/PowerInfo";
import Search from "@/pages/Search";
import StationDetails from "@/pages/StationDetails";
import StationLists from "@/pages/StationLists";
import StationMain from "@/pages/StationMain";
import WorkingList from "@/pages/WorkingList";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [isSheetbarOpen, setSheetbarOpen] = useState<boolean>(false);

  const handleMenuClick = () => {
    setSheetbarOpen(true);
  };

  const handleSidebarClose = () => {
    setSheetbarOpen(false);
  };

  return (
    <div className="max-w-3xl h-screen my-1 mx-auto">
      <Providers>
        <BrowserRouter
          basename={import.meta.env.DEV ? "/" : "/vite-react-shadcn-0516/"}
        >
          <Header onMenuClick={handleMenuClick} />
          <HeaderSheet isOpen={isSheetbarOpen} onClose={handleSidebarClose} />
          <Routes>
            <Route path="/" element={<StationMain />} />
            <Route path="/station-lists/:id" element={<StationLists />} />
            <Route
              path="/station-lists/station-details/:id"
              element={<StationDetails />}
            />
            <Route path="/search" element={<Search />} />
            <Route path="/power-info" element={<PowerInfo />} />
            <Route path="/working-list" element={<WorkingList />} />
            <Route path="/bike-operations" element={<BikeOperations />} />
            <Route path="/bar-settings" element={<BarSettings />} />
            <Route path="/job-settings" element={<JobSettings />} />
            <Route path="/performance" element={<Performance />} />
          </Routes>
        </BrowserRouter>
      </Providers>
    </div>
  );
}

export default App;
