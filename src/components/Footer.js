import React from "react";
import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";


function Footer() {
    return (
        <footer className="footer">
            <IconButton href="https://github.com/TonyWorldChanger">
                <GitHubIcon/>
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/tony-steverson-jr">
                <LinkedInIcon/>
            </IconButton>
            <IconButton href="https://www.instagram.com/">
                <InstagramIcon/>
            </IconButton>
        </footer>
    );
}

export default Footer;