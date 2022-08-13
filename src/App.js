import Navbar from "./Components/Navbar";
import "./App.css"
import Intro from "./Components/Intro";
import  Services from "./Components/Services";
import Experience from "./Components/Experience";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";




function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <Services></Services>
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
