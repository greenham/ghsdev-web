import "./App.scss";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Skills from "./components/Skills";
import TopNav from "./components/TopNav";

function App() {
  return (
    <>
      <TopNav />
      <About id="about" />
      <Portfolio id="portfolio" />
      <Skills id="skills" />
      <Services id="services" />
      <Contact id="contact" />
    </>
  );
}

export default App;
