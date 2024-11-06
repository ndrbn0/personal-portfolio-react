import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/intro";
import Navbar from "./components/NavBar/navbar";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
