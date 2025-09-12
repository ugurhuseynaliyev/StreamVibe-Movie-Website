import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";
import "./index.css";
import Movies_Shows from "./components/Movies_Shows";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Support from "./components/Support";
import Subscriptions from "./components/Subscriptions";


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movies_shows" element={<Movies_Shows />}/>
        <Route path="/support" element={<Support />}/>
        <Route path="/subscriptions" element={<Subscriptions />}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
