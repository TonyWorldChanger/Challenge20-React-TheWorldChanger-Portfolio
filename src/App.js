import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Contact from "./components/form/contactForm";
import TextInfo from "./components/TextInfo";

function App() {
    return (
        <div>
            <Header />
            <Navbar />
            <TextInfo />
            <AboutMe />
            <Card />
            <Contact />
            <Footer />
          
        </div>
    );
}

export default App;