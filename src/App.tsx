import Providers from "@/Providers";
import MyMapComponent from "@/pages/MapTest";
import StationDetails from "@/pages/StationDetails";
import StationLists from "@/pages/StationLists";
import StationMain from "@/pages/StationMain";
import StationMap from "@/pages/StationMap";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="max-w-3xl h-screen my-1 mx-auto">
      <Providers>
        <BrowserRouter
          basename={import.meta.env.DEV ? "/" : "/vite-react-shadcn-0516/"}
        >
          <Routes>
            <Route path="/" element={<StationMain />} />
            <Route path="/station-map/:id" element={<StationMap />} />
            <Route path="/station-lists/:id" element={<StationLists />} />
            <Route
              path="/station-lists/station-details/:id"
              element={<StationDetails />}
            />
            <Route path="/my-map" element={<MyMapComponent />} />
          </Routes>
        </BrowserRouter>
      </Providers>
    </div>
  );
}

export default App;
