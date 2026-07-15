import { HomePage } from "@/pages/HomePage";
import { ProjectDetail } from "@/pages/ProjectDetail";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <section className="min-h-screen min-w-[375px] px-4 md:px-8">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route
              path="/projects/:id"
              element={<ProjectDetail />}
            ></Route>
          </Routes>
        </Router>
      </section>
    </>
  );
}

export default App;
