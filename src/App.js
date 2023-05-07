import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";

function App() {
    return (
        <div>
            <Header />
            <Navbar />
            <AboutMe />
            <Card />
            <Footer />
          
        </div>
    );
}

export default App;