import { HashRouter, Route, Routes } from "react-router-dom";
import StationList from "./pages/StationList";

function App() {
  return (
    <div className="w-full">
      <div className="w-6/12 h-screen my-1 mx-auto">
        <HashRouter>
          <Routes>
            <Route path="/" element={<StationList />} />
          </Routes>
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
