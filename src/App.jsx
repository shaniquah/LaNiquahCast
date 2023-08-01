// import { useState } from 'react'
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import FetchAPI from "./components/FetchApi";
import Footer from "./components/Footer";
import "./App.css";
// import SortBy from "./components/Sort";

function App() {
  return (
    <>
      <Navbar />
      <SearchBar />
      {/* <SortBy /> */}
      <br />
      <FetchAPI />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default App;
