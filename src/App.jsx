import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Apod from "./components/Apod";
import Sidebar from "./components/Sidebar";
import { lazy, Suspense } from "react";
import NotFound from "./components/NotFound";


const Home = lazy(() => import("./components/Home"));
const Library = lazy(() => import("./components/Library"))

function App() {
  return (
    <>
      <Router>
        <div className="app-layout">
          <Sidebar />
          <Suspense fallback={<div className="loading"><h1>Loading...</h1></div>}>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/apod" element={<Apod />} />
              <Route path="/" element={<Home />} />
              <Route path="/library" element={<Library />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </>
  );
}

export default App;
