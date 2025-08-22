import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import { lazy, Suspense } from "react";
import NotFound from "./components/NotFound";
import Details from "./components/Details";

const Home = lazy(() => import("./components/Home"));
const Library = lazy(() => import("./components/Library"));
const Apod = lazy(() => import("./components/Apod"));
const Sidebar = lazy(() => import("./components/Sidebar"));

function App() {
  return (
    <>
      <Router>
        <div className="app-layout">
          <Sidebar />
          <Suspense
            fallback={
              <div className="loading">
                <h1>Loading...</h1>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/apod" element={<Apod />} />
              <Route path="/library" element={<Library />} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </>
  );
}

export default App;
