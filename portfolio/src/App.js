import { Contact } from "./components/Contact/Contact.js";
import { Intro } from "./components/About/Intro.js";
import { Navbar } from "./components/NavBar/Navbar.js";
import { Skills } from "./components/Skills/Skills.js";
import { Works } from "./components/Works/Works.js";
import { Footer } from "./components/Footer/Footer.js";

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
