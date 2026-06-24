import { HomePage } from "@/pages/HomePage";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <section className="min-h-screen min-w-[375px]">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </Router>
      </section>
    </>
  );
}

export default App;
