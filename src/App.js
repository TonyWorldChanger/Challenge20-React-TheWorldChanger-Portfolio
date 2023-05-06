import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import devCard from "./components/devCard";

function App() {
    return (
        <div>
            <Header />
            <Navbar />
            <devCard />
            <devCard />
            <devCard />
            <devCard />
            <devCard />
            <devCard />
        </div>
    );
}

export default App;