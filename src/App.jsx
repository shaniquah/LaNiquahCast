// import { useState } from 'react'
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import FetchAPI from "./components/FetchApi";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <span>
        <SearchBar />
      </span>
      <br />
      <FetchAPI />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default App;
