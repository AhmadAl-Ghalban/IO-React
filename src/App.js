import logo from "./logo.svg";
import "./App.css";
import "./normaliz.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Features from "./components/Features";
import Servicess from "./components/Servicess";
import Protfolio from "./components/Protfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      {/* <div className="container">Header</div> */}
      <Header />
      <Landing />
      <Features />
      <Servicess />
      <Protfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
