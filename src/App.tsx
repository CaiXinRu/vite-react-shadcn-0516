import Providers from "@/Providers";
import ClassOne from "@/pages/ClassOne";
import StationDetail from "@/pages/StationDetail";
import StationLists from "@/pages/StationLists";
import StationMain from "@/pages/StationMain";
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
            <Route path="/station-lists/:id" element={<StationLists />} />
            <Route path="/class-one" element={<ClassOne />} />
            <Route path="/station/:id" element={<StationDetail />} />
          </Routes>
        </BrowserRouter>
      </Providers>
    </div>
  );
}

export default App;
