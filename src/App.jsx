import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Sets from "./components/Sets";
import Agenda from "./components/Agenda";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Sets />
        <Agenda />
        <Gallery />
      </main>
      <Contact />
    </div>
  );
}

export default App;
