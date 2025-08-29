import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";
import "./index.css";
import Movies_Shows from "./components/Movies_Shows";
import { useState } from "react";
import Footer from "./components/Footer";

const pages = {
  home: <Home />,
  movies_shows: <Movies_Shows />,
};

type PageKey = keyof typeof pages;

const App = () => {
  const [selectedPage, setSelectedPage] = useState<PageKey>("home");
  return (
    <div className="App">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <main>{pages[selectedPage]}</main>
      <Footer />
    </div>
  );
};

export default App;
