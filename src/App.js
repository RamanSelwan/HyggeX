import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Faq from "./components/Faq";
import Flashcard from "./components/Flashcard";
import Contact from "./components/Contact";
import FaqPage from "./components/FaqPage";
import Button from "./components/Button";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

function App() {
  // This internal component handles route-specific logic.
  function RouteHandler() {
    const location = useLocation();
    const [currentRoute, setCurrentRoute] = useState("/");

    useEffect(() => {
      setCurrentRoute(location.pathname);
    }, [location]);

    const showMainAndFaq = currentRoute !== "/flashcard" && currentRoute !== "/contact" && currentRoute !== "/faq" && currentRoute !== "/button";

    return (
      <>
        {showMainAndFaq && (
          <>
            <Main />
            <Faq />
          </>
        )}
      </>
    );
  }

  return (
  
      <div className="flex items-center justify-center min-h-screen">
        <div className="h-[1818px] w-[1440px]">
          <Navbar />
          <Routes>
            <Route path="/flashcard" element={<Flashcard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/button" element={<Button />} />

            <Route path="*" element={<RouteHandler />} />
          </Routes>
        </div>
      </div>

  );
}

export default App;
