import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Gallary from "./Pages/Gallary";
import Contact from "./Pages/Contact";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import HireMeForm from "./Pages/HireMe";
import ScrollToTop from "./Components/ScrollToTop";
import Documents from "./Pages/private/Documents";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallary" element={<Gallary />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/hire" element={<HireMeForm />} />


        <Route path="/private" element={<Documents />} />
      </Routes>
    </>
  );
}

export default App;
