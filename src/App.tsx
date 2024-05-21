import { BrowserRouter, Route, Routes } from "react-router-dom";
import StationLists from "./pages/StationLists";
import StationMain from "./pages/StationMain";

function App() {
  return (
    <div className="w-full">
      <div className="w-6/12 h-screen my-1 mx-auto">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StationMain />} />
            <Route path="station-lists" element={<StationLists />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
