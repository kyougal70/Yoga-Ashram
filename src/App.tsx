import Navbar from "@/scenes/navbar";
import { useState, useEffect } from "react";
import Home from "./scenes/home";
import { SelectedPages } from "./types";
import Philosophy from "@/scenes/philosophy";
import OurClasses from "@/scenes/ourClasses";
import ContactUs from "@/scenes/contactUs";
import Footer from "./scenes/footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPages>("home");
  const [isPageAtTop, setIsPageAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsPageAtTop(true);
        setSelectedPage("home");
      } else {
        setIsPageAtTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app  bg-tertiary-25">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isPageAtTop={isPageAtTop}
      />

      <Home setSelectedPage={setSelectedPage} />
      <Philosophy setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
