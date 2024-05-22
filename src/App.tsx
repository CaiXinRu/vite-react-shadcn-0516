import { BrowserRouter, Route, Routes } from "react-router-dom";
import StationLists from "./pages/StationLists";
import StationMain from "./pages/StationMain";
import Test from "./pages/Test";

function App() {
  return (
    <div className="w-full">
      <div className="w-6/12 h-screen my-1 mx-auto">
        <BrowserRouter
          basename={import.meta.env.DEV ? "/" : "/vite-react-shadcn-0516/"}
        >
          <Routes>
            <Route path="/" element={<StationMain />} />
            <Route path="station-lists" element={<StationLists />} />
            <Route path="test" element={<Test />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
