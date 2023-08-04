/* The code is importing various components and CSS files. */
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import FetchAPI from "./FetchApi";
import Footer from "./Footer";
// import SortBy from "./Sort";
import { supabase } from "./AuthModal";
import "../App.css";
import "../index.css"


/**
 * The MainContent component renders a Navbar, SearchBar, FetchAPI component, and a Footer.
 */
export default function MainContent() {
   /* The `return` statement in the `MainContent` component is returning a JSX code block. This code
   block includes several components being rendered, such as `Navbar`, `SearchBar`, `FetchAPI`, and
   `Footer`. The components are being rendered within a fragment (`<>...</>`) which allows multiple
   components to be returned without adding an extra DOM element. The `br` elements are used to add
   line breaks between the components. */
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
    )
}