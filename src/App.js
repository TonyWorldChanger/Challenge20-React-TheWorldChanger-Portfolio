import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Contact from "./components/form/contactForm";
import TextInfo from "./components/TextInfo";
import Project1 from "./images/Project1.png";
import Project2 from "./images/Project2.png";
import Project3 from "./images/Project3.png";

function App() {
    return (
        <div>
            <Header />
            <Navbar />
            <TextInfo />
            <AboutMe />
            <ProjectCard 
                image={Project1} 
                projectTitle="Navigation App" 
                projectDescription="This project was the first javascript project I've ever done. " 
                shareUrl="https://github.com/ADBLOW-TEAM-1/Project-ADBLOW" 
                learnUrl="https://github.com/TonyWorldChanger"
            />
             <ProjectCard 
                image={Project2} 
                projectTitle="Navigation App" 
                projectDescription="This project was the first javascript project I've ever done. " 
                shareUrl="https://github.com/NTumminaro/Sum-Of-Best" 
                learnUrl="https://github.com/TonyWorldChanger"
            />
             <ProjectCard 
                image={Project3} 
                projectTitle="Navigation App" 
                projectDescription="This project was the first javascript project I've ever done. " 
                shareUrl="https://github.com/TonyWorldChanger/Challenge13-E-Commerce_BackEnd" 
                learnUrl="https://github.com/TonyWorldChanger"
            />
            <Contact />
            <Footer />
          
        </div>
    );
}

export default App;