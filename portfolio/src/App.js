import Contact from "../src/components/Contact/Contact";
import Intro from "../src/components/About/Intro";
import Navbar from "../src/components//Navigation/Navbar";
import Skills from "../src/components/Skills/Skills";
import Works from "../src/components/Works/Works";
import Footer from "../src/components/Footer/footer";

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
