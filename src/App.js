import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Symptoms from "./components/Symptoms";
import Products from "./components/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Symptoms />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
