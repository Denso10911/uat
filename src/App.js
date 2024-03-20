import './App.css';
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import Offer from "./components/Offer";
import Footer from "./components/Footer";

function App() {
 return (
  <div className="App">
   <Header/>
   <HeroSection/>
   <Offer/>
   <Footer/>
  </div>
 );
}

export default App;
