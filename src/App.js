import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./page/Home";
import About from "./page/About";
import Resume from "./page/Resume";
import Transcript from "./page/Transcript";
import Contact from "./page/Contact";
import Projects from "./page/Projects";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/transcript" element={<Transcript />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
