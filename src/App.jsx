import Nav from "./components/Nav";
import Hero from "./components/Hero";
import WhatIBuild from "./components/WhatIBuild";
import Projects from "./components/Projects";
import Lab from "./components/Lab";
import Services from "./components/Services";
import Proof from "./components/Proof";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950 text-bone-100">
      <Nav />
      <main>
        <Hero />
        <WhatIBuild />
        <Projects />
        <Lab />
        <Services />
        <Proof />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
