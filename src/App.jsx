import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Navbar from "./components/Navbar";
import Project from "./pages/Project";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<About />}></Route>
        <Route path="projects" element={<Projects />}></Route>
        <Route path="projects/:id" element={<Project />}></Route>
      </Routes>
    </>
  );
}
