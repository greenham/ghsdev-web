import "./App.scss";
import About from "./components/About";
import Connect from "./components/Connect";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import TopNav from "./components/TopNav";

function App() {
  return (
    <>
      <TopNav />
      <About id="about" />
      <Portfolio id="portfolio" />
      <Skills id="skills" />
      <Connect id="connect" />
    </>
  );
}

export default App;
