import Contact from "./components/Contact/Contact";
import Intro from "./components/About/Intro";
import Navbar from "./components/NavBar/Navbar";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
